# Next.js Movie App Backend System Design

## Overview
A scalable, production-ready backend for a movie application using Next.js (App Router) and PostgreSQL. The architecture follows best practices for maintainability, security, and performance.

---

## 1. High-Level Architecture

- **Next.js App Router**: Handles both frontend and backend (API routes in `app/api/`).
- **API Layer**: RESTful endpoints for authentication, users, movies, genres, and favorites.
- **Service Layer**: Business logic, validation, and orchestration.
- **Database Layer**: PostgreSQL accessed via Prisma ORM.
- **Middleware**: Authentication, authorization, rate limiting, logging, validation.
- **Validation**: Zod schemas for request validation.

---

## 2. Folder Structure

```
/movie-app
│
├── app/api/           # API route handlers (REST endpoints)
├── services/          # Business logic (userService, movieService, etc.)
├── controllers/       # Request/response orchestration
├── validators/        # Zod schemas for input validation
├── types/             # TypeScript types/interfaces
├── middleware/        # Auth, role, logger, rateLimit, etc.
├── lib/               # DB connection (db.ts), helpers, utilities
├── prisma/            # Prisma schema and migrations
├── sql/               # Raw SQL schema and seed files
├── ...                # UI, context, hooks, layouts, etc.
```

---

## 3. Request Flow

1. **Client Request** →
2. **API Route Handler** (`app/api/.../route.ts`) →
3. **Middleware** (auth, role, logger, rateLimit, validation) →
4. **Controller** (optional, orchestrates request/response) →
5. **Service** (business logic, calls DB) →
6. **Database Layer** (Prisma/SQL) →
7. **Response**

---

## 4. Key Components

### API Layer
- Route handlers for each endpoint (e.g., `/api/auth/login`, `/api/movies/[id]`).
- Thin, delegates to services/controllers.

### Middleware
- **auth.ts**: Verifies JWT, attaches user to request.
- **role.ts**: Checks user role for protected routes.
- **rateLimit.ts**: Limits requests per IP.
- **logger.ts**: Logs requests to file.
- **validation**: Uses Zod schemas for input validation.

### Services
- Encapsulate business logic (e.g., userService, movieService).
- Called by controllers or directly by route handlers.

### Controllers (optional)
- Orchestrate request/response, call services, handle errors.

### Database Layer
- **Prisma ORM**: Models for User, Role, Movie, Genre, MovieGenre, Favorite.
- **PostgreSQL**: Main data store.

---

## 5. Security & Best Practices
- Passwords hashed with bcrypt.
- JWT for authentication.
- Role-based authorization.
- Rate limiting to prevent abuse.
- Input validation with Zod.
- Consistent error handling and logging.
- Use environment variables for secrets/config.

---

## 6. Scalability & Maintainability
- Modular folder structure.
- Separation of concerns (API, services, middleware, DB).
- Easy to add new features (e.g., reviews, admin endpoints).
- Replace in-memory rate limiting with Redis for production.

---

## 7. Example Sequence Diagram

```
Client → API Route → [Middleware: auth, role, rateLimit, logger, validation] → Controller → Service → Prisma → PostgreSQL
```

---

## 8. Technologies Used
- Next.js (App Router)
- TypeScript
- PostgreSQL
- Prisma ORM
- Zod (validation)
- bcrypt (password hashing)
- jsonwebtoken (JWT)
- dotenv (env config)

---

## 9. Extensibility
- Add more services/controllers for new features.
- Swap Prisma for raw SQL or another ORM if needed.
- Integrate with external APIs (e.g., movie data providers).

---

## 10. Diagram

```markdown
[View Backend Architecture Diagram](backend-architecture.md)