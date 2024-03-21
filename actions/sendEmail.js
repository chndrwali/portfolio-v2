'use server'

import { Resend } from 'resend';
import { validateString, getErrorMessage  } from '@/lib/utils'
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend('re_QJFNrLom_PzwkKFHBVcyPxCLvDvfQrsdZ');

export const sendEmail = async (formData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Calling to Work <onboarding@resend.dev>',
      to: 'chndrwali@gmail.com',
      subject: 'Message from your portfolio website',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};


