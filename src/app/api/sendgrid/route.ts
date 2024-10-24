// Import SendGrid mail package
import sgMail from '@sendgrid/mail';

// Set the API key with proper typing
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const msg = {
      to: 'contact@coachellavalleyhandyman.com',
      from: 'contact@coachellavalleyhandyman.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send the email using SendGrid
    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
  }
}
