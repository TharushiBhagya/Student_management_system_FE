import { useState } from "react";
import "./login.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateLogin = () => {
    let isValid = true;
    
    // Email validation
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }
    
    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }
    
    return isValid;
  };

  const handleLogin = async () => {
    if (validateLogin()) {
      setIsLoading(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Call login API or proceed with login logic
        console.log("Login successful");
        window.location.href = "/dashboard";
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pic-bg flex justify-center items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 backdrop-blur-md bg-white/10 shadow-2xl rounded-xl flex flex-col items-center mx-4"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-white mb-8 relative"
          >
            Welcome Back
            <div className="h-1 w-24 bg-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 rounded-full"></div>
          </motion.h1>
          
          {/* Email Input */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full mb-5"
          >
            <div className="relative">
              <div className="absolute left-3 top-3 text-white">
                <FaEnvelope />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            {emailError && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-1 ml-2"
              >
                {emailError}
              </motion.p>
            )}
          </motion.div>
          
          {/* Password Input */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full mb-6"
          >
            <div className="relative">
              <div className="absolute left-3 top-3 text-white">
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white/20 pl-10 pr-4 py-3 border border-white/30 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            {passwordError && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-1 ml-2"
              >
                {passwordError}
              </motion.p>
            )}
          </motion.div>
          
          {/* Forgot Password */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full flex justify-end mb-6"
          >
            <a href="/forgot-password" className="text-blue-300 text-sm hover:text-blue-200 transition duration-300">
              Forgot Password?
            </a>
          </motion.div>

          {/* Login Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-300 flex items-center justify-center"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <FaSignInAlt className="mr-2" /> Sign In
              </>
            )}
          </motion.button>
          
          {/* Sign Up Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 text-white text-sm"
          >
            Don't have an account?{" "}
            <span
              className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer transition duration-300"
              onClick={() => (window.location.href = "/signup")}
            >
              Create Account
            </span>
          </motion.p>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}