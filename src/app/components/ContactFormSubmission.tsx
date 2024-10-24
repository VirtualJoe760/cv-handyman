import React from 'react';
import { Field, Label, Switch } from '@headlessui/react';

interface ContactFormSubmissionProps {
  agreed: boolean;
  setAgreed: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  formError: string;
}

const ContactFormSubmission: React.FC<ContactFormSubmissionProps> = ({ agreed, setAgreed, openModal, formError }) => {
  return (
    <>
      {/* Privacy Policy Switch */}
      <Field className="flex gap-x-4 sm:col-span-2 pt-2">
        <div className="flex h-6 items-center">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
            aria-checked={agreed} // Accessible state for screen readers
            aria-label="Agree to privacy policy" // Descriptive aria label
          >
            <span className="sr-only">Agree to privacy policy</span> {/* For screen readers */}
            <span
              aria-hidden="true"
              className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
            />
          </Switch>
        </div>
        <Label className="text-sm leading-6 text-gray-600">
          By selecting this, you agree to our{' '}
          <button
            type="button"
            onClick={openModal} // This button only opens the modal now
            className="font-semibold text-indigo-600 hover:underline"
            aria-label="Read our privacy policy"
          >
            privacy policy
          </button>.
        </Label>
      </Field>

      {/* Error Message */}
      {formError && (
        <div className="sm:col-span-2 text-red-600 text-sm" aria-live="assertive">
          {formError}
        </div>
      )}
    </>
  );
};

export default ContactFormSubmission;
