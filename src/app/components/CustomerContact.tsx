import React from 'react';
import { STATES } from '@/constants/states';

interface CustomerContactProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const CustomerContact: React.FC<CustomerContactProps> = ({ formData, handleChange }) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
          First Name
        </label>
        <div className="mt-2.5">
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            aria-label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
          Last Name
        </label>
        <div className="mt-2.5">
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            aria-label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Email */}
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2.5">
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-label="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="sm:col-span-2">
        <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
          Phone Number
        </label>
        <div className="relative mt-2.5">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            aria-label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="(xxx) xxx-xxxx"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Address */}
      <div className="sm:col-span-2">
        <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
          Address
        </label>
        <div className="mt-2.5">
          <input
            id="address"
            name="address"
            type="text"
            required
            aria-label="Address"
            value={formData.address}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* City, State, ZIP */}
      <div className="sm:col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-semibold leading-6 text-gray-900">
            City
          </label>
          <div className="mt-2.5">
            <input
              id="city"
              name="city"
              type="text"
              required
              aria-label="City"
              value={formData.city}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-semibold leading-6 text-gray-900">
            State
          </label>
          <div className="mt-2.5">
            <select
              id="state"
              name="state"
              required
              aria-label="State"
              value={formData.state}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {STATES.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ZIP Code */}
        <div>
          <label htmlFor="zip" className="block text-sm font-semibold leading-6 text-gray-900">
            ZIP Code
          </label>
          <div className="mt-2.5">
            <input
              id="zip"
              name="zip"
              type="text"
              required
              aria-label="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerContact;
