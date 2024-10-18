"use server"
import { contactFormSchema } from '@/lib/contactValidation';
import { Resend } from 'resend';
import EmailTemplate from '../_components/EmailTemplate'; // Adjust the path as necessary
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY); // Replace with your API key

export async function sendEmail(formData: FormData) {

    const formFields = {
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        service: formData.get('service'),
      };


  try {
    const validatedData = contactFormSchema.parse(formFields);

    const emailData = {
      from: `Contact Form ${validatedData.email}`, // Sender email
      to: 'yassineifguisse@gmail.com', // Recipient email
      subject: `New message from ${validatedData.email}`,
      Reply_to: validatedData.email as string,
     react: React.createElement(EmailTemplate , {

        email: validatedData.email,
        service: validatedData.service,
        phone: validatedData.phone ?? '',
        message: validatedData.message
     })
    };

    const result = await resend.emails.send(emailData);
    return { status: 'success', result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { status: 'error', error: error.message };
  }
}
