import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import animationData from "../assets/choose-your-colors.json";
import { useLottie } from "lottie-react";

const Registration = () => {
  const navigate = useNavigate();
  const { loginWithGoogle } = useContext(AuthContext); // Only keep what you're using
  const options = {
    animationData: animationData,
    loop: true,
  };
  const { View } = useLottie(options);

  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, photo, email, password } = formData;

    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      setPasswordError(validationErrors.join(" "));
      return; 
    }

    setPasswordError(""); 

    try {
  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, photo }),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.error || "Registration failed");

  // Navigate to homepage after successful registration
  navigate("/", { replace: true });
} catch (error) {
  setError(error.message);
}

  };

  const validatePassword = (password) => {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const lengthRegex = /.{6,}/;

    
    const errors = [];
    if (!upperCaseRegex.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!lowerCaseRegex.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
    if (!lengthRegex.test(password)) {
      errors.push("Password must be at least 6 characters long.");
    }

    return errors; 
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="md:flex max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2 bg-gray-100 hidden md:flex justify-center items-center">
          {View}
        </div>

        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          {error && (
            <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
          )}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-primary">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Photo URL</label>
              <input
                type="url"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center items-center mt-6">
            <p
              onClick={handleGoogleLogin}
              className="btn bg-red-400 text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
            >
              SignUp with <FcGoogle />
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-blue-500 hover:underline">
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;