import { z } from "zod";

const envSchema = z.object({
  MODE: z.enum(["production", "development", "test"]), //* this mode was defined in package.json file in script > dev:test
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === "true"),
});

export const env = envSchema.parse(import.meta.env);
