import { ServerActionResponse } from '@/src/common-types';
import { ContactUsSchemaType } from '..';

/**
 * REWRITTEN FOR STATIC HOSTING:
 * Removed 'use server' and 'nodemailer'.
 * We now use a client-side fetch to a third-party API.
 */
export async function contactUsFormSubmit(
  values: ContactUsSchemaType
): Promise<ServerActionResponse<boolean>> {
  const { name, email, subject, message, phone } = values;

  // 1. Sign up at Formspree.io and replace the ID below
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id_here';

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        phone,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message via API');
    }

    return {
      isSuccess: true,
      data: true,
      message: 'Thanks for getting in touch',
    };
  } catch (error) {
    console.error('Submission error:', error);

    return {
      isSuccess: false,
      data: null,
      message: 'Could not send message. Please try again later.',
    };
  }
}
