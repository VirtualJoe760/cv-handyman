import React from 'react';
import { allServices } from '@/constants/allServices';

interface CustomerServiceProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const CustomerService: React.FC<CustomerServiceProps> = ({ formData, handleChange }) => {
  return (
    <div className="sm:col-span-2">
      <label htmlFor="services" className="block text-sm font-semibold leading-6 text-gray-900">Select Service (Optional)</label>
      <div className="mt-2.5">
        <select
          id="services"
          name="selectedService"
          value={formData.selectedService}
          onChange={handleChange}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Choose a service...</option>
          {allServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.service} - {service.price}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 mt-6">Message</label>
      <div className="mt-2.5">
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default CustomerService;
