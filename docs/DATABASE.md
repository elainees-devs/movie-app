# Database Relationships

The following diagram and description illustrate the relationships between the tables in the PostgreSQL schema for the movie app:

## Entity Relationship Diagram (ERD)

```
roles (1)
   |
   v
users (1) ────< (M) favorites (M) >──── (1) movies
            |
            v
          (1) genres (M) <─── (M) movie_genres (M) >─── (1) movies
```

## Table Relationships

- **roles**
  - Has many users
  - Each user is assigned a role ('user', 'admin', 'visitor')
- **users**
  - Belongs to a role (via `role_id`)
  - Has many favorites
- **movies**
  - Can be favorited by many users (via favorites)
  - Can have many genres (via movie_genres)
- **favorites**
  - Links users and movies (many-to-many)
  - Each favorite references one user and one movie
- **genres**
  - Can be assigned to many movies (via movie_genres)
- **movie_genres**
  - Links movies and genres (many-to-many)
  - Each entry references one movie and one genre

## Foreign Key Constraints

- `users.role_id` → `roles.id`
- `favorites.user_id` → `users.id`
- `favorites.movie_id` → `movies.id`
- `movie_genres.movie_id` → `movies.id`
- `movie_genres.genre_id` → `genres.id`

## Indexes

To optimize query performance and enforce uniqueness, the following indexes are used in the PostgreSQL schema:

- **roles**
  - Implicit unique index on `id` (primary key)
  - `name` is unique, so a unique index is created on `name` for fast role lookups and to enforce uniqueness.
- **users**
  - `idx_users_email` — Unique index on email for fast lookups and uniqueness.
  - `idx_users_role_id` — Index on role_id for efficient queries by user role.
- **movies**
  - `idx_movies_title` — Index on title for efficient search/filtering.
  - `idx_movies_release_date` — Index on release_date for sorting/filtering.
- **genres**
  - `idx_genres_name` — Unique index on genre name.
- **favorites**
  - `idx_favorites_user_id` — Index on user_id for quick user-favorite queries.
  - `idx_favorites_movie_id` — Index on movie_id for quick movie-favorite queries.
- **movie_genres**
  - `idx_movie_genres_movie_id` — Index on movie_id for genre lookups.
  - `idx_movie_genres_genre_id` — Index on genre_id for movie lookups.

These indexes help ensure fast queries and maintain data integrity in your movie app database.

This structure ensures data integrity and supports efficient queries for user favorites, movie genres, and more.
