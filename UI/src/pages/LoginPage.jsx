import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'


const LoginPage = ({loginSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const submitForm = (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };

    const res = loginSubmit(loginDetails)
    toast.success('Successfully logged in')
    return navigate('/home');
    
  };

  return (
    <div className="bg-purple-100 flex items-center justify-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
          Login
        </h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Login
            </button>
            <Link to="#" className="text-purple-700 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-purple-700 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
