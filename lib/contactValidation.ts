import { z } from "zod";

// Define the Zod schema for validation
export const contactFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// Infer TypeScript types for the form data from the schema
export type ContactFormData = z.infer<typeof contactFormSchema>;
