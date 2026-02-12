import { ServerActionResponse } from '@/src/common-types';
import { ContactUsSchemaType } from '..';

// We removed 'use server' because Hostinger Shared Hosting is static
export async function contactUsFormSubmit(
  values: ContactUsSchemaType
): Promise<ServerActionResponse<boolean>> {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_form_id_here"; // Get this from formspree.io

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      return {
        isSuccess: true,
        data: true,
        message: 'Thanks for getting in touch! We will get back to you soon.',
      };
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    console.error("Submission Error:", error);
    return {
      isSuccess: false,
      data: null,
      message: 'There was an error sending your message. Please try again.',
    };
  }
}