import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = ({signupSubmit}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
      userName,
      password,
      email,
    };

    signupSubmit(userDetails);
  };

  return (
    <div className="bg-purple-100 flex items-center justify-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">
          Sign Up
        </h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {/* <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div> */}
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/" className="text-purple-700 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
