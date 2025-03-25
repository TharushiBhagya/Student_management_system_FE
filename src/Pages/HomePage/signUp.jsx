import React, { useState } from "react";
import "./signUp.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt, FaWhatsapp, FaUserPlus } from "react-icons/fa";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    whatsapp: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    whatsapp: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!formData.whatsapp) {
      newErrors.whatsapp = "WhatsApp number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Please enter a valid number";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      setIsLoading(true);
      try {
        await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/signup", formData);
        alert("Sign-up successful! Please log in.");
        window.location.href = "/login";
      } catch (err) {
        console.error(err);
        if (err.response && err.response.data && err.response.data.message) {
          alert(`Error: ${err.response.data.message}`);
        } else {
          alert("An error occurred during sign-up. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pic-back flex justify-center items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg p-8 backdrop-blur-md bg-white/10 shadow-2xl rounded-xl flex flex-col items-center mx-4"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-white mb-8 relative"
          >
            Create an Account
            <div className="h-1 w-32 bg-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 rounded-full"></div>
          </motion.h1>

          <div className="w-full space-y-4">
            {/* First Name and Last Name */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex gap-4 flex-col sm:flex-row"
            >
              <div className="w-full sm:w-1/2 relative">
                <div className="absolute left-3 top-3 text-white">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  value={formData.firstName}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
                {errors.firstName && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-1 ml-2"
                  >
                    {errors.firstName}
                  </motion.p>
                )}
              </div>

              <div className="w-full sm:w-1/2 relative">
                <div className="absolute left-3 top-3 text-white">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  value={formData.lastName}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
                {errors.lastName && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-1 ml-2"
                  >
                    {errors.lastName}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute left-3 top-3 text-white">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={formData.email}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-1 ml-2"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Password and Confirm Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-4 flex-col sm:flex-row"
            >
              <div className="w-full sm:w-1/2 relative">
                <div className="absolute left-3 top-3 text-white">
                  <FaLock />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  value={formData.password}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-1 ml-2"
                  >
                    {errors.password}
                  </motion.p>
                )}
              </div>

              <div className="w-full sm:w-1/2 relative">
                <div className="absolute left-3 top-3 text-white">
                  <FaLock />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
                {errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-1 ml-2"
                  >
                    {errors.confirmPassword}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute left-3 top-3 text-white">
                <FaWhatsapp />
              </div>
              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp Number"
                className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={formData.whatsapp}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              {errors.whatsapp && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-1 ml-2"
                >
                  {errors.whatsapp}
                </motion.p>
              )}
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute left-3 top-3 text-white">
                <FaPhoneAlt />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={formData.phone}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-1 ml-2"
                >
                  {errors.phone}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Sign Up Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-300 mt-6 flex items-center justify-center"
            onClick={handleSignup}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <FaUserPlus className="mr-2" /> Create Account
              </>
            )}
          </motion.button>

          {/* Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-center text-white mt-6"
          >
            <p className="mb-2">Already have an account?</p>
            <button
              className="text-blue-400 hover:text-blue-300 font-medium transition duration-300"
              onClick={() => (window.location.href = "/login")}
            >
              Sign In
            </button>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}