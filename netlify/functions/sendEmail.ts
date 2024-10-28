import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";
import "dotenv/config";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  selectedService: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "developer.hugheshs@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail: Handler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "No form data provided." }),
      };
    }

    const formData: FormData = JSON.parse(event.body);

    // Email to Admin
    const adminEmailOptions = {
      from: '"Coachella Valley Handyman" <developer.hugheshs@gmail.com>',
      to: "contact@coachellavalleyhandyman.com", // Your business email
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      text: `
        You have received a new contact form submission:

        - Name: ${formData.firstName} ${formData.lastName}
        - Email: ${formData.email}
        - Phone: ${formData.phoneNumber}
        - Address: ${formData.address}
        - City: ${formData.city}
        - State: ${formData.state}
        - ZIP Code: ${formData.zip}
        - Selected Service: ${formData.selectedService}
        - Message: ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h1 style="color: #333;">New Service Request from ${formData.firstName} ${formData.lastName} | ${formData.selectedService}</h1>
        <ul style="list-style-type: none; padding: 0;">
            <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Phone:</strong> ${formData.phoneNumber}</li>
            <li><strong>Address:</strong> ${formData.address}</li>
            <li><strong>City:</strong> ${formData.city}</li>
            <li><strong>State:</strong> ${formData.state}</li>
            <li><strong>ZIP Code:</strong> ${formData.zip}</li>
            <li><strong>Selected Service:</strong> ${formData.selectedService}</li>
            <li><strong>Message:</strong> ${formData.message}</li>
        </ul>
        </div>
    `,
    };

    // Email to Customer
    const customerEmailOptions = {
      from: '"Coachella Valley Handyman" <developer.hugheshs@gmail.com>',
      to: formData.email, // Customer's email
      subject: "Thank you for contacting Coachella Valley Handyman",
      text: `Hello ${formData.firstName},

      Thank you for reaching out to Coachella Valley Handyman! We have received your inquiry regarding ${formData.selectedService}. Our team will review your request and be in touch with you as soon as possible.

      Best regards,
      Coachella Valley Handyman Team`,
      html: `
        <p>Hello ${formData.firstName},</p>
        <p>Thank you for reaching out to Coachella Valley Handyman! We have received your inquiry regarding <strong>${formData.selectedService}</strong>. Our team will review your request and be in touch with you as soon as possible.</p>
        <p>Best regards,<br/>Coachella Valley Handyman Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminEmailOptions);
    await transporter.sendMail(customerEmailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending emails:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send emails." }),
    };
  }
};

export { sendEmail as handler };
