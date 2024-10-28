// ContactValidation.ts
import { z } from "zod";



  export const contactFormSchema = 
    z.object({
      name: z.string().min(1, "Invalid name address"),
      email: z.string().email("Invalid email address"),
      company: z.string().optional(),
      phone: z.string().optional(),
      service: z.string().min(1, "Please select a service"),
      spending:z.string().optional(),
      message: z.string().min(10, "Message must be at least 10 characters long"),
    });

// Infer TypeScript types for the form data from the schema
export type ContactFormData = z.infer<typeof contactFormSchema>;
