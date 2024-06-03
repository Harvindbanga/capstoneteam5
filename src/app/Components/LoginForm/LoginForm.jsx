import React from 'react';
import Image from 'next/image';

const LoginForm = () => {
  return (
    <div className="flex">
      <div className="flex-1"></div>
    <div>
        <Image width={500} height={500} src="/logo.png" alt="Logo" />
      </div>
    <div className="flex flex-col rounded-md items-center justify-center bg-gray-300 py-10">
      <h1 className="text-3xl mb-6">Login</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full mx-auto">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="text-left mb-4">
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>
        <button className="w-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md shadow-md hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
