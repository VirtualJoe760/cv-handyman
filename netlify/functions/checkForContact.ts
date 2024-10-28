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
interface ContactResult {
  resourceName: string;
  names?: Array<{ givenName?: string; familyName?: string }>;
  emailAddresses?: Array<{ value?: string }>;
}

interface SearchContactsResponse {
  results?: ContactResult[];
}

// Handler function for the Netlify function
export const handler: Handler = async (event) => {
  try {
    const formData = JSON.parse(event.body || '{}');
    const { email } = formData;

    // Search for existing contact with the given email
    const existingContact = (await peopleService.people.searchContacts({
      query: email,
      readMask: 'names,emailAddresses',
    })) as { data: SearchContactsResponse };

    const contactExists = existingContact.data.results && existingContact.data.results.length > 0;

    // Return the result indicating whether the contact exists
    return {
      statusCode: 200,
      body: JSON.stringify({ exists: contactExists }),
    };
  } catch (error) {
    console.error('Error checking Google Contacts:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to check for contact.' }),
    };
  }
};
