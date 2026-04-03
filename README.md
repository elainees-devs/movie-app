This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Next.js Movie App Structure

## Overview
This project is a scalable Next.js 15 movie application using the App Router. It includes pages for home, movie details, search, user authentication (login/register), and user favorites. The structure follows best practices for maintainability and scalability.

## Folder Structure

/movie-app
│
├── app/                              # Next.js App Router (Frontend + API)
│   ├── layout.tsx
│   ├── page.tsx
│
│   ├── movies/
│   │   └── [id]/
│   │       └── page.tsx
│
│   ├── search/
│   │   └── page.tsx
│
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│
│   ├── favorites/
│   │   └── page.tsx
│
│   ├── dashboard/
│   │   └── page.tsx
│
│   ├── profile/
│   │   └── page.tsx
│
│   ├── api/                          # 🔥 BACKEND (Route Handlers)
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   └── register/
│   │   │       └── route.ts
│   │   │
│   │   ├── users/
│   │   │   └── profile/
│   │   │       └── route.ts
│   │   │
│   │   ├── movies/
│   │   │   ├── route.ts              # GET all movies
│   │   │   └── [id]/
│   │   │       └── route.ts          # GET single movie
│   │   │
│   │   ├── genres/
│   │   │   └── route.ts
│   │   │
│   │   ├── favorites/
│   │   │   ├── route.ts              # GET, POST
│   │   │   └── [movieId]/
│   │   │       └── route.ts          # DELETE
│   │   │
│   │   └── health/
│   │       └── route.ts              # Health check (optional)
│
│   └── globals.css
│
├── components/                       # UI components
│   ├── MovieCard.tsx
│   ├── Navbar.tsx
│   └── ...
│
├── layouts/                          # UI layouts
│   ├── AuthLayout.tsx
│   └── MainLayout.tsx
│
├── context/                          # Global state (frontend)
│   ├── AuthContext.tsx
│   └── FavoritesContext.tsx
│
├── hooks/                            # Custom hooks
│   ├── useAuth.ts
│   └── useFavorites.ts
│
├── lib/                              # Shared logic (frontend + backend)
│   ├── db.ts                         # 🔥 Database connection (Prisma or pg)
│   ├── auth.ts                       # 🔥 JWT / session helpers
│   ├── api/                          # Frontend API calls
│   │   ├── movies.ts
│   │   └── auth.ts
│   └── utils/
│       └── formatDate.ts
│
├── services/                         # 🔥 Business logic layer
│   ├── auth.service.ts
│   ├── user.service.ts
│   ├── movie.service.ts
│   ├── genre.service.ts
│   └── favorite.service.ts
│
├── controllers/                      # 🔥 Request handlers (clean separation)
│   ├── auth.controller.ts
│   ├── user.controller.ts
│   ├── movie.controller.ts
│   ├── genre.controller.ts
│   └── favorite.controller.ts
│
├── validators/                       # 🔥 Input validation (Zod/Joi)
│   ├── auth.validator.ts
│   ├── movie.validator.ts
│   └── favorite.validator.ts
│
├── middleware/                       # 🔥 Auth & route protection
│   └── auth.middleware.ts
│
├── types/                            # TypeScript types/interfaces
│   ├── user.ts
│   ├── movie.ts
│   └── index.ts
│
├── prisma/                           # 🔥 Prisma ORM (if using Prisma)
│   ├── schema.prisma
│   └── migrations/
│
├── sql/                              # Raw SQL (your schema.sql)
│   └── schema.sql
│
├── styles/
│   └── ...
│
├── public/
│
├── .env                              # Environment variables
├── README.md
├── package.json
├── tsconfig.json
└── ...onfig files
```

## Explanations
- **app/**: Main entry for routes/pages using the App Router. Each subfolder is a route; dynamic routes use [id]. Also contains - **app/api/**: for backend route handlers.
- **app/api/**: Backend endpoints built with Next.js Route Handlers. Handles requests for auth, movies, genres, favorites, and users.
- **components/**: Reusable UI elements (cards, navbars, buttons).
- **layouts/**: Shared layout components for different sections (e.g., authenticated vs. public).
- **context/**: React context providers for global state (auth, favorites).
- **hooks/**: Custom hooks for encapsulating logic (e.g., authentication, favorites).
- **lib/db/**: Database connection and queries (PostgreSQL using Prisma or pg).
- **lib/auth/**: Authentication utilities (JWT handling, password hashing, session logic).
- **lib/api/**: Functions for making API requests (movies, auth).
- **lib/utils/**: General utility functions (formatting, helpers).
- **services/**: Business logic layer (e.g., movie service, favorite service, user service).
- **controllers/**: Handles request/response logic and connects API routes to services.
- **validators/**: Input validation schemas (e.g., Zod/Joi for request validation).
- **middleware/**: Handles authentication, authorization, and request interception.
- **types/**: TypeScript interfaces/types (User, Movie, Genre, Favorite, Role).
- **prisma/**: Prisma schema and migrations for PostgreSQL database.
- **sql/**: Raw SQL files (e.g., schema.sql) for manual database setup and structure.
- **styles/**: CSS modules or other style files for components.
public/: Static files served as-is.
- **.env**: Environment variables (database URL, JWT secret, etc.).
- **README.md**: Project overview and setup instructions.

## Setting Up PostgreSQL Locally

Follow these steps to create and initialize your local PostgreSQL database for the movie app:

1. **Install PostgreSQL**  
   - On Ubuntu:  
     ```bash
     sudo apt update
     sudo apt install postgresql postgresql-contrib
     ```
   - On Mac (Homebrew):  
     ```bash
     brew install postgresql
     ```

2. **Start PostgreSQL Service**  
   - On Ubuntu:  
     ```bash
     sudo service postgresql start
     ```
   - On Mac:  
     ```bash
     brew services start postgresql
     ```

3. **Switch to the postgres user**  
   - On Ubuntu:  
     ```bash
     sudo -u postgres psql
     ```
   - On Mac:  
     ```bash
     psql postgres
     ```

4. **Create a new database and user**  
   In the PostgreSQL prompt:
   ```sql
   CREATE DATABASE movieapp;
   CREATE USER yourusername WITH PASSWORD 'yourpassword';
   GRANT ALL PRIVILEGES ON DATABASE movieapp TO yourusername;
   ```
   Replace `yourusername` and `yourpassword` with your preferred credentials.

5. **Exit psql**  
   ```sql
   \q
   ```

6. **Update your .env file**  
   Set your DATABASE_URL in .env:
   ```
   DATABASE_URL=postgresql://yourusername:yourpassword@localhost:5432/movieapp
   ```

7. **Run your schema**  
   From your project root, run:
   ```bash
   psql -U yourusername -d movieapp -f sql/schema.sql
   ```
   If you get a “role does not exist” error, use the `-U` flag with the correct username.

You now have a local PostgreSQL database set up for your app!

## App Folder Structure by User Role

### Visitor
```
app/
├── page.tsx                # Home (browse/search, read-only movie details)
├── search/                 # Browse/Search
│   └── page.tsx
├── movies/
│   └── [id]/
│       └── page.tsx        # Movie Details (read-only)
└── auth/
    ├── login/
    │   └── page.tsx        # Login
    └── register/
        └── page.tsx        # Sign Up
```

### Logged-in User
```
app/
├── dashboard/              # Home / Dashboard
│   ├── page.tsx
│   ├── search/
│   │   └── page.tsx        # Browse/Search
│   └── movies/
│       └── [id]/
│           └── page.tsx    # Movie Details (add to favorites, add review)
├── favorites/
│   └── page.tsx            # Favorites
├── profile/
│   └── page.tsx            # Profile / Settings
```

- **Visitor**: Can browse/search and view movie details (read-only), and sign up or log in.
- **Logged-in User**: Has access to dashboard, can browse/search, view movie details (with add to favorites/review), manage favorites, and update profile/settings.

> Adjust routing and access control in your app to match these user flows for best UX and security.
