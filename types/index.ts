
// User Role
export interface Role {
	id: number;
	name: string;
}

// User
export interface User {
	id: number;
	email: string;
	passwordHash: string;
	name?: string;
	createdAt: string; // ISO date string
	updatedAt: string; // ISO date string
	roleId: number;
	role?: Role;
}

// Movie
export interface Movie {
	id: number;
	title: string;
	description?: string;
	releaseDate?: string; // ISO date string
	posterUrl?: string;
	rating?: number;
	createdAt: string; // ISO date string
	updatedAt: string; // ISO date string
	genres?: Genre[];
}

// Genre
export interface Genre {
	id: number;
	name: string;
}

// MovieGenre (join table)
export interface MovieGenre {
	id: number;
	movieId: number;
	genreId: number;
}

// Favorite (user-movie join)
export interface Favorite {
	id: number;
	userId: number;
	movieId: number;
	createdAt: string; // ISO date string
	user?: User;
	movie?: Movie;
}
