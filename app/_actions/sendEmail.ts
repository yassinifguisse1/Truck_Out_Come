"use server"
import { contactFormSchema } from '@/lib/contactValidation';
import { Resend } from 'resend';
import EmailTemplate from '../_components/EmailTemplate'; // Adjust the path as necessary
import React from 'react';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY); // Replace with your API key
console.log('API Key:', process.env.RESEND_API_KEY);

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {



  try {
    const validatedData = contactFormSchema.parse(formData);
    const emailData = {
      from: `Contact Form <onboarding@resend.dev>`, // Sender email
      to: `yassinifguisse100@gmail.com`, // Recipient email
      subject: `New message from ${validatedData.email}`,
      Reply_to: validatedData.email as string,
      react: React.createElement(EmailTemplate, {
        email: validatedData.email,
        service: validatedData.service,
        phone: validatedData.phone ?? "",
        message: validatedData.message,
      }),
    };

    const result = await resend.emails.send(emailData);
    console.log('Email sending result:', result); // Add this line

    return { status: 'success', result };
  } catch (error) {
    // console.error('Error sending email:', error);
    // console.error('Error sending email:', error.response?.data || error.message);
    const msg = (error as Error).message;
    return { status: 'error', error: msg };
  }
}
