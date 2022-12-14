import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return !error ? (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
        <p className="py-2">
          Dont't have an account yet?{' '}
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-3"
            type="password"
          />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full py-4 my-2 text-white">
          Sign in
        </button>
      </form>
    </div>
  ) : (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
        <p className="py-2">
          Dont't have an account yet?{' '}
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
        <span className="text-red-400">Wrong login or password, try again</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-3"
            type="password"
          />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full py-4 my-2 text-white">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Signin;
