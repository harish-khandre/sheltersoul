import { z } from "zod";

export const formValidator = z.object({
  name: z.string().trim().optional(),
  location: z.string().trim().url(),
  file: z.instanceof(File).optional(),
});
