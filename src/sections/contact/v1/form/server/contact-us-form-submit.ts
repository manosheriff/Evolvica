import { ServerActionResponse } from '@/src/common-types';
import { ContactUsSchemaType } from '..';

/** * REWRITTEN FOR STATIC EXPORT:
 * Removed 'use server' and 'nodemailer' because Hostinger Shared Hosting 
 * cannot execute server-side Node.js code.
 */
export async function contactUsFormSubmit(
  values: ContactUsSchemaType
): Promise<ServerActionResponse<boolean>> {
  
  // 1. Register at Formspree.io to get your unique ID.
  // 2. This allows the user's browser to send the email directly.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_form_id_here"; 

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return {
      isSuccess: true,
      data: true,
      message: 'Thanks for getting in touch!',
    };
  } catch (error) {
    console.error("Form Submission Error:", error);

    return {
      isSuccess: false,
      data: null,
      message: 'Could not send message. Please try again later.',
    };
  }
}