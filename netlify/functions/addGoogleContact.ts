import { google } from 'googleapis';
import { Handler } from '@netlify/functions';
import dotenv from 'dotenv';

dotenv.config();

// Initialize OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_OAUTH_CLIENT_ID,
  process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  `${process.env.BASE_URL}/.netlify/functions/googleContactCallback`
);

// Set credentials using refresh token
oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

// Initialize the People API service
const peopleService = google.people({ version: 'v1', auth: oauth2Client });

// Define types for the Google Contact
interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
}

// Handler function for adding a new contact
export const handler: Handler = async (event) => {
  try {
    const formData = JSON.parse(event.body || '{}') as ContactData;

    await peopleService.people.createContact({
      requestBody: {
        names: [{ givenName: formData.firstName, familyName: formData.lastName }],
        emailAddresses: [{ value: formData.email }],
        phoneNumbers: formData.phoneNumber ? [{ value: formData.phoneNumber }] : undefined,
        addresses: formData.address ? [{ streetAddress: formData.address, country: 'USA' }] : undefined,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Contact created successfully!' }),
    };
  } catch (error) {
    console.error('Error adding contact:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to add contact' }),
    };
  }
};
