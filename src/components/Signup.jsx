import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Register new account</h1>
        <p className="py-2">
          Already have an account yet?{' '}
          <Link to="/" className="underline">
            Sign in.
          </Link>{' '}
        </p>
      </div>
      <form>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email address</label>
          <input className="border border-gray-300 p-3" type="email" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input className="border border-gray-300 p-3" type="password" />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full py-4 my-2 text-white">
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Signup;
