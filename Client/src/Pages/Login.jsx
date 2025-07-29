import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import pic from '../assets/hacker-using-laptop.json'; // Correct the path to your local JSON animation
import { useLottie } from "lottie-react";
const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const options = {
    animationData: pic,
    loop: true
  };
  const { View } = useLottie(options);


 

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then(() => {
        setIsLoading(false);
        navigate(location.state?.from?.pathname || "/");
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Login failed. Please check your credentials.");
      });
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    loginWithGoogle()
      .then(() => {
        setIsLoading(false);
        navigate(location.state?.from?.pathname || "/");
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Google login failed. Try again later.");
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="md:flex max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left side: Login form */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                name='email'
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                name='password'
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-center items-center mt-6">
            <p onClick={handleGoogleLogin} className="btn bg-red-400 text-white px-4 py-2 rounded mr-2 flex items-center gap-2">
              Sign in with <FcGoogle />
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link to="/registration" className="text-blue-500">
              Don't have an account? Create account
            </Link>
          </div>
        </div>

        {/* Right side: Lottie animation */}
        <div className="w-1/2 bg-gray-100 hidden md:flex justify-center items-center">
        {View}
        </div>
      </div>
    </div>
  );
};

export default Login;
