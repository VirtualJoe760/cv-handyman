import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, selectedService, phoneNumber, address, city, state, zip } = body;

  try {
    // Create a transporter object using Outlook SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: 'contact@coachellavalleyhandyman.com', // Your Outlook email address
        pass: process.env.EMAIL_PASSWORD, // Your Outlook email password or app password
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    // Send mail to your email
    await transporter.sendMail({
      from: email,
      to: 'contact@coachellavalleyhandyman.com',
      subject: `New Service Request: ${name} | ${selectedService}`,
      text: `
        Name: ${name}\n
        Phone: ${phoneNumber}\n
        Email: ${email}\n
        Address: ${address}, ${city}, ${state} ${zip}\n\n
        Service Requested: ${selectedService}\n
        Message: ${message}
      `,
    });

    // Send response email to the client
    await transporter.sendMail({
      from: 'contact@coachellavalleyhandyman.com',
      to: email,
      subject: `Thank You for Your Service Request, ${name}`,
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>We have received your service request and will get back to you shortly.</p>
        <p>In the meantime, feel free to browse through our <a href="https://coachellavalleyhandyman.com/tips">Handyman Tips</a> section for helpful how-tos and home improvement ideas.</p>
        <p>Best regards,<br/>Coachella Valley Handyman</p>
        <img src="/palm-tree-svgrepo-com.svg" alt="Coachella Valley Handyman" width="100" />
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Error sending email', error });
  }
}
