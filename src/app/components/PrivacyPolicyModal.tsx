'use client';

import { todayDate } from '@/utils/todayDate'; // Correct import for todayDate

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Only render the modal if isOpen is true

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-labelledby="privacy-policy-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6" role="document">
        <h2 id="privacy-policy-title" className="text-xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h2>
        <div className="overflow-y-auto max-h-96" aria-live="polite">
          <p><strong>Effective Date:</strong> {todayDate()}</p>
          <p className="mt-4">
            At Coachella Valley Handyman (corporate name: Hughes Home Services), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and store the personal information you provide to us. By using our services and providing us with your information, you consent to the terms outlined below.
          </p>

          <h3 className="mt-4 font-semibold">1. Information We Collect</h3>
          <p>We may collect the following personal information from you:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Address (for the purposes of providing in-home handyman services)</li>
            <li>Credit Card Information (processed securely via Square)</li>
            <li>Any additional information you voluntarily provide through our contact forms, phone calls, or service requests.</li>
          </ul>

          {/* Other sections go here */}

          <h3 className="mt-4 font-semibold">8. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy or the use of your personal information, please contact us at:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Phone: +1 (760) 797-5434</li>
            <li>Email: <a href="mailto:developer.hugheshs@gmail.com" className="text-blue-500 hover:underline">developer.hugheshs@gmail.com</a></li>
            <li>Managing Officer: Hughes Underdahl</li>
          </ul>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={closeModal}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
            aria-label="Close privacy policy"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
