-- Roles
INSERT INTO roles (name) VALUES
('visitor'),
('user'),
('admin');

-- Users (with role_id)
INSERT INTO users (email, password_hash, name, role_id) VALUES
('alice@example.com', 'hash1', 'Alice', 2),
('bob@example.com', 'hash2', 'Bob', 2),
('carol@example.com', 'hash3', 'Carol', 2),
('dave@example.com', 'hash4', 'Dave', 3),
('eve@example.com', 'hash5', 'Eve', 1);

-- Movies
INSERT INTO movies (title, description, release_date, poster_url, rating) VALUES
('Inception', 'A thief who steals corporate secrets through dream-sharing technology.', '2010-07-16', 'https://example.com/inception.jpg', 8.8),
('The Dark Knight', 'Batman battles the Joker in Gotham City.', '2008-07-18', 'https://example.com/darkknight.jpg', 9.0),
('Interstellar', 'A team travels through a wormhole in search of a new home for humanity.', '2014-11-07', 'https://example.com/interstellar.jpg', 8.6),
('Parasite', 'Greed and class discrimination threaten a newly formed symbiotic relationship.', '2019-05-30', 'https://example.com/parasite.jpg', 8.6),
('The Matrix', 'A hacker discovers reality is a simulation and fights against its controllers.', '1999-03-31', 'https://example.com/matrix.jpg', 8.7);

-- Genres
INSERT INTO genres (name) VALUES
('Action'),
('Sci-Fi'),
('Thriller'),
('Drama'),
('Comedy');

-- Movie Genres
-- Assuming movie IDs 1-5 and genre IDs 1-5
INSERT INTO movie_genres (movie_id, genre_id) VALUES
(1, 2), -- Inception: Sci-Fi
(2, 1), -- Dark Knight: Action
(3, 2), -- Interstellar: Sci-Fi
(4, 3), -- Parasite: Thriller
(5, 2), -- Matrix: Sci-Fi
(2, 3), -- Dark Knight: Thriller (multiple genres)
(1, 1), -- Inception: Action
(4, 4), -- Parasite: Drama
(5, 1), -- Matrix: Action
(3, 4); -- Interstellar: Drama

-- Favorites
-- Assuming user IDs 1-5 and movie IDs 1-5
INSERT INTO favorites (user_id, movie_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 1);