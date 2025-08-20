import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Give us a bit more detail."),
  source_url: z.string().url("Must be a valid URL.").optional().or(z.literal("")),
  website: z.string().optional(), // honeypot
});

export type LeadInput = z.infer<typeof leadSchema>;