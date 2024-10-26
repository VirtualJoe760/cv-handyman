import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, address, city, state, zip, selectedService, message } = req.body;

    try {
      // Setup nodemailer transporter using Gmail SMTP
      const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // Use TLS
        auth: {
          user: 'contact@coachellavalleyhandyman.com', // Your Outlook email address
          pass: process.env.EMAIL_PASSWORD, // Your Outlook email password (or app-specific password)
        },
        tls: {
          ciphers: 'SSLv3',
        },
      });
      

      // Email to the company
      const companyMailOptions = {
        from: email, // Client's email
        to: 'contact@coachellavalleyhandyman.com', // Company's email
        subject: `New Service Request: ${firstName} ${lastName} | ${selectedService}`,
        text: `
          **Name**: ${firstName} ${lastName}
          **Phone**: ${phoneNumber}
          **Email**: ${email}
          **Address**: ${address}, ${city}, ${state}, ${zip}

          **Requested Service**: ${selectedService}

          **Message**:
          ${message}
        `,
      };

      // Email to the client
      const clientMailOptions = {
        from: 'contact@coachellavalleyhandyman.com',
        to: email, // Client's email
        subject: `Thank You for Your Service Request - Coachella Valley Handyman`,
        html: `
          <div style="padding: 20px; font-family: Arial, sans-serif;">
            <img src="https://coachellavalleyhandyman.com/palm-tree-svgrepo-com.svg" alt="Coachella Valley Handyman" width="50">
            <h2>Thank You, ${firstName}!</h2>
            <p>We have received your service request for <strong>${selectedService}</strong>. Our team will be in touch shortly.</p>
            <p>In the meantime, check out our <a href="https://coachellavalleyhandyman.com/tips">Tips section</a> for handyman how-tos and home improvement ideas.</p>
            <p>Best Regards,<br>Coachella Valley Handyman Team</p>
          </div>
        `,
      };

      // Send both emails
      await transporter.sendMail(companyMailOptions);
      await transporter.sendMail(clientMailOptions);

      // Success response
      res.status(200).json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email', error });
    }
    
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
