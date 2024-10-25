// ContactValidation.ts
import { z } from "zod";

// Define the Zod schema for validation with a translation function
export const contactFormSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().email(t("Email_Error")),
    phone: z.string().optional(),
    service: z.string().min(1, t("Service_Error")),
    message: z.string().min(10, t("Message_Error")),
  });

// Infer TypeScript types for the form data from the schema
export type ContactFormData = z.infer<typeof contactFormSchema>;
