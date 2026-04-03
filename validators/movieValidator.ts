
import { z } from 'zod';

export const createMovieSchema = z.object({
	title: z.string().min(1),
	description: z.string().optional(),
	releaseDate: z.string().optional(),
	posterUrl: z.string().url().optional(),
	rating: z.number().min(0).max(10).optional(),
	genreIds: z.array(z.number()).optional(),
});

export const updateMovieSchema = createMovieSchema.partial();
