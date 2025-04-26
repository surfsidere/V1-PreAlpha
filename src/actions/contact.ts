
'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  inquiryType: z.enum(["development_investment", "custom_home", "property_inquiry", "general"]),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message must be less than 1000 characters." }),
  recaptchaToken: z.string(),
});

type ContactFormData = z.infer<typeof formSchema>;

interface VerificationResponse {
    success: boolean;
    score: number;
    action: string;
    challenge_ts: string;
    hostname: string;
    'error-codes'?: string[];
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const validatedData = formSchema.parse(data);
    const { recaptchaToken, ...formData } = validatedData;

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is not set in environment variables.");
      return { success: false, message: "Server configuration error." };
    }

    // Verify reCAPTCHA token
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const response = await fetch(verificationUrl, {
      method: 'POST',
    });

    if (!response.ok) {
      console.error("Failed to verify reCAPTCHA token. Status:", response.status);
      return { success: false, message: "Failed to verify CAPTCHA. Please try again." };
    }

    const verificationResult: VerificationResponse = await response.json();

    console.log("reCAPTCHA verification result:", verificationResult);


    // Check verification success and score (for v3)
    // Adjust score threshold as needed (e.g., 0.5)
    if (!verificationResult.success || verificationResult.score < 0.5) {
       console.warn("reCAPTCHA verification failed or score too low:", verificationResult);
       return { success: false, message: "CAPTCHA verification failed. Please try again." };
    }

    // --- reCAPTCHA verified ---
    // TODO: Implement actual submission logic (e.g., send email, save to database)
    console.log("Form data submitted successfully (simulated):", formData);

    return { success: true, message: "Thank you for contacting us. We will get back to you shortly." };

  } catch (error) {
    if (error instanceof z.ZodError) {
        console.error("Form validation error:", error.errors);
        // Combine multiple validation errors if necessary
        const messages = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('; ');
        return { success: false, message: `Invalid form data: ${messages}` };
    }
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
