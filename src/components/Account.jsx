import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4 ">
      <h1 className="text-2xl font-bold py-4 text-center">
        Hello, {user && user.email}! Welcome to your profile
      </h1>
      <div className="bg-blue-500 p-4 h-64 text-white flex flex-col justify-between">
        <ul className="h-[50%] flex flex-col justify-between">
          <li className="cursor-pointer">Photos</li>
          <li className="cursor-pointer">Videos</li>
          <li className="cursor-pointer">Music</li>
        </ul>
        <h3 className="self-end cursor-pointer">Other private stuff</h3>
      </div>
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Log out
      </button>
    </div>
  );
};

export default Account;
