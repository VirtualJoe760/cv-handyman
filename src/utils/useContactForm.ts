// src/utils/useContactForm.ts

import { useState } from 'react';
import { formatPhoneNumber } from './phoneUtils';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phoneNumber: '',
    selectedService: '',
    message: '',
  });

  const [agreed, setAgreed] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));

    if (name === 'phoneNumber') {
      setFormData(prevData => ({
        ...prevData,
        phoneNumber: formatPhoneNumber(value)
      }));
    }
  };

  const validateForm = () => {
    if (!agreed) {
      setFormError('You must agree to the privacy policy to submit this form.');
      return false;
    }
    setFormError('');
    return true;
  };

  return {
    formData,
    agreed,
    setAgreed,
    formError,
    handleChange,
    validateForm,
  };
};
