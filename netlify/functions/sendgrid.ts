// netlify/functions/sendgrid.ts

import { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    city,
    state,
    zip,
    selectedService,
    message,
  } = JSON.parse(event.body || '{}');

  // Construct the subject and body of the message to send to the team
  
  const teamMsg = {
    to: 'contact@coachellavalleyhandyman.com',
    from: 'contact@coachellavalleyhandyman.com',
    subject: `New Service Request from ${firstName} ${lastName} | ${selectedService}`,
    text: `Service Request Details:\n
      Name: ${firstName} ${lastName}\n
      Email: ${email}\n
      Phone: ${phoneNumber}\n
      Address: ${address}, ${city}, ${state} ${zip}\n
      Selected Service: ${selectedService}\n
      Message:\n
      ${message}
    `,
  };

  // Construct the reply message to send back to the client

  const clientMsg = {
    to: email,
    from: 'contact@coachellavalleyhandyman.com',
    subject: `${firstName} ${lastName}, Thank you for contacting Coachella Valley Handyman`,
    text: `${firstName} ${lastName}, we appreciate your business and our team is working hard to process your service request. Please expect a phone call or email response from us very soon. In the meantime, be sure to visit our Tips section at https://coachellavalleyhandyman.com/tips. Thank you!`,
  };

  try {
    // Send emails to both the team and the client
    await sgMail.send(teamMsg);
    await sgMail.send(clientMsg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Messages sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending messages' }),
    };
  }
};

export { handler };
