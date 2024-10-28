"use server"
import { contactFormSchema } from '@/lib/contactValidation';
import { Resend } from 'resend';
import EmailTemplate from '../_components/EmailTemplate'; // Adjust the path as necessary
import React from 'react';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {



  try {
    const validatedData = contactFormSchema.parse(formData);
    const emailData = {
      from: `Contact Form <onboarding@resend.dev>`, // Sender email
      to: `yassinifguisse100@gmail.com`, // Recipient email
      subject: `New message from ${validatedData.email}`,
      Reply_to: validatedData.email as string,
      react: React.createElement(EmailTemplate, {
        name:validatedData.name ,
        email: validatedData.email as string,
        company:validatedData.company ?? "",
        service: validatedData.service as string,
        phone: validatedData.phone ?? "" as string,
        spending:validatedData.spending ?? "" as string,
        message: validatedData.message as string,
      }),
    };

    const result = await resend.emails.send(emailData);

    return { status: 'success', result };
  } catch (error) {

    const msg = (error as Error).message;
    return { status: 'error', error: msg };
  }
}
