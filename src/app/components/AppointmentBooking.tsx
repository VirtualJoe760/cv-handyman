// components/AppointmentBooking.tsx

import React from 'react';

interface AppointmentBookingProps {
  name: string;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-3xl font-semibold text-black mb-4">Welcome {name},</h2>
      <p className="text-lg text-black mb-8">Schedule a convenient time for your handyman service appointment.</p>
      
      {/* TidyCal embed */}
      <div className="tidycal-embed" data-path="cv-handyman/handyman-appointment"></div>
      <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
    </div>
  );
};

export default AppointmentBooking;
