import React, { useState, createContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loading, setLoading] = useState(false);

  const createNewUser = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, photo }),  // Add name and photo
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();
      const decodedUser = parseJwt(data.token);
      setUser(decodedUser);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(decodedUser));
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();
      const decodedUser = parseJwt(data.token);
      setUser(decodedUser);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(decodedUser));
      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out");
  };

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const ProfileUpdate = async (userId, name, photo) => {
  try {
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, photo }),
    });

    if (!res.ok) throw new Error("Failed to update profile");

    return await res.json();
  } catch (error) {
    throw error;
  }
};


  const authInfo = {
    user,
    setUser,
    createNewUser,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
