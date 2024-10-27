'use client';

import React, { useState, useEffect } from 'react';
import CustomerContact from './CustomerContact';
import CustomerService from './CustomerService';
import ContactFormSubmission from './ContactFormSubmission';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import ContactConfirmation from './ContactConfirmation';

const Contact: React.FC = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
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

  // Check local storage for form submission status to persist confirmation
  useEffect(() => {
    const confirmationShown = localStorage.getItem('formSubmitted');
    if (confirmationShown) {
      setShowConfirmation(true);
    }
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Validate privacy policy agreement
    if (!agreed) {
      setFormError('You must agree to the privacy policy to submit this form.');
      return;
    }

    // Clear form error
    setFormError('');

    try {
      // Send form data to the Netlify serverless function for SendGrid
      const response = await fetch('/.netlify/functions/sendgrid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowConfirmation(true); // Show confirmation component on success
        localStorage.setItem('formSubmitted', 'true'); // Save confirmation status to localStorage
        e.currentTarget.reset(); // Clear form after submission
      } else {
        setFormError("Submission failed. Please try again.");
      }
    } catch (error) {
      setFormError("An error occurred. Please try again.");
    }
  };

  const handleTimeout = () => {
    setShowConfirmation(false);
    localStorage.removeItem('formSubmitted'); // Remove flag from localStorage after timeout
  };

  return (
    <section id="contact" className="isolate bg-white px-6 py-12 sm:py-16 lg:px-4" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-4xl text-center">
        <h1 id="contact-heading" className="text-5xl text-black">Contact Us</h1>
      </div>

      {/* {showConfirmation ? (
        <ContactConfirmation onTimeout={handleTimeout} /> // Render confirmation on success
      ) : ( */}
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
          
          {/* Modal for Privacy Policy */}
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
      {/* )} */}
    </section>
  );
};

export default Contact;
