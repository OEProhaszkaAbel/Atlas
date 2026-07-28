import { z } from 'zod';

export const MeasuresSchema = z.object({
  user_id: z.number().int().positive(),
  neck: z.number().int().nonnegative().max(100).default(0),
  shoulders: z.number().int().nonnegative().max(200).default(0),
  chest: z.number().int().nonnegative().max(200).default(0),
  bicep_left: z.number().int().nonnegative().max(100).default(0),
  bicep_right: z.number().int().nonnegative().max(100).default(0),
  forearm_left: z.number().int().nonnegative().max(100).default(0),
  forearm_right: z.number().int().nonnegative().max(100).default(0),
  waist: z.number().int().nonnegative().max(200).default(0),
  hips: z.number().int().nonnegative().max(200).default(0),
  thigh_left: z.number().int().nonnegative().max(150).default(0),
  thigh_right: z.number().int().nonnegative().max(150).default(0),
  calf_left: z.number().int().nonnegative().max(100).default(0),
  calf_right: z.number().int().nonnegative().max(100).default(0),
  glutes: z.number().int().nonnegative().max(200).default(0),
  weight: z.number().int().nonnegative().max(300).default(0), // kg
  height: z.number().int().nonnegative().max(300).default(0), // cm
});

export type Measures = z.infer<typeof MeasuresSchema>;