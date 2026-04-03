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

```
/movie-app
│
├── app/                        # App Router entry point (Next.js 15)
│   ├── layout.tsx              # Root layout (shared UI, providers)
│   ├── page.tsx                # Home page (movie listings, etc.)
│   ├── movies/                 # Movie-related routes
│   │   └── [id]/               # Dynamic route for movie details
│   │       └── page.tsx        # Movie details page
│   ├── search/                 # Search page
│   │   └── page.tsx
│   ├── auth/                   # Authentication routes
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── favorites/              # User favorites page
│   │   └── page.tsx
│   └── globals.css             # Global styles
│
├── components/                 # Reusable UI components (buttons, cards, etc.)
│   ├── MovieCard.tsx
│   ├── Navbar.tsx
│   └── ...
│
├── layouts/                    # Shared layouts (e.g., AuthLayout, MainLayout)
│   ├── AuthLayout.tsx
│   └── MainLayout.tsx
│
├── context/                    # React context/state management (e.g., Auth, Favorites)
│   ├── AuthContext.tsx
│   └── FavoritesContext.tsx
│
├── hooks/                      # Custom React hooks
│   ├── useAuth.ts
│   └── useFavorites.ts
│
├── lib/                        # API calls and utility functions
│   ├── api/                    # API call helpers (fetch, axios, etc.)
│   │   ├── movies.ts
│   │   └── auth.ts
│   └── utils/                  # General utility functions
│       └── formatDate.ts
│
├── styles/                     # Component-specific and global styles
│   ├── MovieCard.module.css
│   └── ...
│
├── public/                     # Static assets (images, icons, etc.)
│
├── README.md                   # Project documentation
├── package.json
├── tsconfig.json
└── ...                         # Other config files
```

## Explanations
- **app/**: Main entry for routes/pages using the App Router. Each subfolder is a route; dynamic routes use [id].
- **components/**: Reusable UI elements (cards, navbars, buttons).
- **layouts/**: Shared layout components for different sections (e.g., authenticated vs. public).
- **context/**: React context providers for global state (auth, favorites).
- **hooks/**: Custom hooks for encapsulating logic (e.g., authentication, favorites).
- **lib/api/**: Functions for making API requests (movies, auth).
- **lib/utils/**: General utility functions (formatting, helpers).
- **styles/**: CSS modules or other style files for components.
- **public/**: Static files served as-is.
- **README.md**: Project overview and setup instructions.
