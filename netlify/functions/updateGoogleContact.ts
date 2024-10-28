// updateGoogleContact.ts

import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Define types
interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
}

// Function to update an existing contact
export async function updateGoogleContact(oauth2Client: OAuth2Client, resourceName: string, contactData: ContactData): Promise<void> {
  const peopleService = google.people({ version: 'v1', auth: oauth2Client });

  try {
    await peopleService.people.updateContact({
      resourceName,
      updatePersonFields: 'names,emailAddresses,phoneNumbers,addresses',
      requestBody: {
        names: [{ givenName: contactData.firstName, familyName: contactData.lastName }],
        emailAddresses: [{ value: contactData.email }],
        phoneNumbers: contactData.phoneNumber ? [{ value: contactData.phoneNumber }] : undefined,
        addresses: contactData.address ? [{ streetAddress: contactData.address, country: 'USA' }] : undefined,
      },
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    throw new Error("Failed to update contact");
  }
}
