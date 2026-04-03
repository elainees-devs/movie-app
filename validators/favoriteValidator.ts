import { z } from 'zod';

export const addFavoriteSchema = z.object({
  movieId: z.number(),
});
