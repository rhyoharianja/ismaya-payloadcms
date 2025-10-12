// src/components/Login/BeforeLogin.tsx
import React from 'react';

const BeforeLogin: React.FC = () =>  {
  return (
    <div className="mb-8">
      <img
        src="/your-company-logo.svg"
        alt="Your Company"
        className="w-40 mx-auto"
      />
      <h1 className="mt-6 text-3xl font-bold text-center text-gray-900">
        Welcome to the Admin Dashboard
      </h1>
      <p className="mt-2 text-sm text-center text-gray-600">
        Please enter your credentials to log in.
      </p>
    </div>
  );
};

export default BeforeLogin;
