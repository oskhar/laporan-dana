import { z } from 'zod';

export const TabelSchema = z.object({
  id: z.number().default(0),
  nama: z.string(),
  dansos: z.number(),
  kas: z.number(),
});

export type TabelDto = z.infer<typeof TabelSchema>;
