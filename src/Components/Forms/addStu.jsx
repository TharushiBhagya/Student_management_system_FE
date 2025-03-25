import React, { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaBook,
  FaSave,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaCalendarCheck
} from "react-icons/fa";

export default function StudentForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    birthday: "",
    degreeProgram: "",
    courses: "",
    email: "",
    phone: "",
    admissionDate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentNumber = `STU${Date.now()}`; // Generate unique student number using timestamp
    onSubmit(studentNumber); // Pass the generated student number to parent
    onClose(); // Close the modal after form submission
  };

  return (
    <div className="p-8 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
        aria-label="Close"
      >
        <FaTimes />
      </button>
      
      <div className="mb-8 text-center">
        <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
          <FaUser className="text-2xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Add New Student</h2>
        <p className="text-gray-500 mt-2">Enter the student's information below</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
              <FaUser className="text-gray-500" />
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter first name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
              <FaUser className="text-gray-500" />
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter last name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-500" />
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter full address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
            <FaEnvelope className="text-gray-500" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
            <FaPhone className="text-gray-500" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
              <FaCalendarAlt className="text-gray-500" />
              Date of Birth
            </label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
              <FaCalendarCheck className="text-gray-500" />
              Admission Date
            </label>
            <input
              type="date"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
            <FaGraduationCap className="text-gray-500" />
            Degree Program
          </label>
          <input
            type="text"
            name="degreeProgram"
            value={formData.degreeProgram}
            onChange={handleInputChange}
            placeholder="Enter degree program"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
            <FaBook className="text-gray-500" />
            Enrolled Courses
          </label>
          <input
            type="text"
            name="courses"
            value={formData.courses}
            onChange={handleInputChange}
            placeholder="Enter courses (separated by commas)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <FaSave />
            <span>Save Student</span>
          </button>
        </div>
      </form>
    </div>
  );
}