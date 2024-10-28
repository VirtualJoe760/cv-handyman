import React, { useState, useEffect } from 'react';
import CustomerContact from './CustomerContact';
import CustomerService from './CustomerService';
import ContactFormSubmission from './ContactFormSubmission';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import ContactConfirmation from './ContactConfirmation';
import AppointmentBooking from './AppointmentBooking';

const Contact: React.FC = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showBooking, setShowBooking] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    selectedService: '',
    message: ''
  });

  useEffect(() => {
    const confirmationShown = localStorage.getItem('formSubmitted');
    if (confirmationShown) {
      setShowConfirmation(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreed) {
      setFormError('You must agree to the privacy policy to submit this form.');
      return;
    }

    setFormError('');

    try {
      console.log("Form Data:", formData);

      // Check for existing contact in Google Contacts
      const googleContactResponse = await fetch('/.netlify/functions/checkForContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });

      const googleContactResult = await googleContactResponse.json();
      console.log("Google Contact Result:", googleContactResult);

      if (googleContactResponse.ok && googleContactResult.exists) {
        // If contact exists, load booking component
        setShowBooking(true);
      } else {
        // If contact does not exist, proceed with adding contact and sending email
        const addContactResponse = await fetch('/.netlify/functions/addGoogleContact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (addContactResponse.ok) {
          // Proceed with sending email
          const emailResponse = await fetch('/.netlify/functions/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });

          if (emailResponse.ok) {
            setShowConfirmation(true);
            localStorage.setItem('formSubmitted', 'true');
            e.currentTarget.reset();
          } else {
            setFormError('Failed to send email. Please try again.');
          }
        } else {
          setFormError('Failed to add contact. Please try again.');
        }
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setFormError('An error occurred. Please try again.');
    }
  };

  const handleTimeout = () => {
    setShowConfirmation(false);
    localStorage.removeItem('formSubmitted');
  };

  return (
    <section id="contact" className="isolate bg-white px-6 py-12 sm:py-16 lg:px-4" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-4xl text-center">
        <h1 id="contact-heading" className="text-5xl text-black">Contact Us</h1>
      </div>

      {showBooking ? (
        <AppointmentBooking name={formData.firstName} /> // Load booking component if contact exists
      ) : showConfirmation ? (
        <ContactConfirmation onTimeout={handleTimeout} /> // Show confirmation if form submitted successfully
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-xl sm:mt-16"
          aria-describedby="contact-description"
          name="contact-form"
          method="POST"
        >
          <CustomerContact formData={formData} handleChange={handleChange} />
          <CustomerService formData={formData} handleChange={handleChange} />
          <ContactFormSubmission 
            agreed={agreed}
            setAgreed={setAgreed}
            openModal={openModal}
            formError={formError}
          />

          {isOpen && (
            <PrivacyPolicyModal 
              isOpen={isOpen} 
              closeModal={closeModal} 
              aria-labelledby="privacy-policy-title" 
              aria-describedby="privacy-policy-description"
            />
          )}

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label="Submit the contact form"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Contact;
