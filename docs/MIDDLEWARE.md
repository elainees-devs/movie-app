Client Request
   |
   v
+--------------------+
|  Next.js Middleware|
|--------------------|
|  authMiddleware    |  <-- Verifies JWT, attaches user info
|  roleMiddleware    |  <-- Checks user role/permissions
|  loggerMiddleware  |  <-- Logs request details
+--------------------+
   |
   v
+--------------------+
|   Route Handler    |  <-- Thin layer: handles req/res
|--------------------|
|  GET /api/movies   |
|  POST /api/favorites|
|  GET /api/users/profile|
+--------------------+
   |
   v
+--------------------+
|    Controller      |  <-- Optional: orchestrates services
|--------------------|
| Calls service layer|
+--------------------+
   |
   v
+--------------------+
|     Service Layer   |  <-- Contains business logic
|--------------------|
| addFavorite(userId, movieId) |
| getMoviesWithGenres()        |
+--------------------+
   |
   v
+--------------------+
|   Database Layer    |  <-- Prisma or raw SQL
|--------------------|
|  Users, Movies, Favorites, Genres|
|  Queries & Joins                |
+--------------------+
   |
   v
Response to Client

How Middleware Helps:
authMiddleware
Runs before the route handler.
Decodes JWT → attaches user object → rejects if invalid.
roleMiddleware
Checks the user’s role (e.g., admin, user).
Rejects unauthorized access (403).
loggerMiddleware
Logs request method, URL, timestamp.
Can be extended to log response times for monitoring.