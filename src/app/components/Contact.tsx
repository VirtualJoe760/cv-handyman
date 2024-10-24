'use client';

import React, { useState } from 'react';
import CustomerContact from './CustomerContact';
import CustomerService from './CustomerService';
import ContactFormSubmission from './ContactFormSubmission';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const Contact: React.FC = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      setFormError('You must agree to the privacy policy to submit this form.');
      return;
    }
    setFormError('');
    // Netlify will handle the form submission, so no need for extra API calls here
    console.log('Form submitted', formData);
  };

  return (
    <section id="contact" className="isolate bg-white px-6 py-12 sm:py-16 lg:px-4" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-4xl text-center">
        <h1 id="contact-heading" className="text-5xl text-black">Contact Us</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 max-w-xl sm:mt-16"
        aria-describedby="contact-description"
        action="/#contact"
        name="contact" // Name for the Netlify form
        method="POST" // Method required by Netlify
        data-netlify="true" // Netlify form attribute
      >
        {/* Hidden input required by Netlify */}
        <input type="hidden" name="form-name" value="contact" />

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
    </section>
  );
};

export default Contact;
