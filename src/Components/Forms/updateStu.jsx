import React, { useState } from "react";
import {
  FaUserEdit,
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaIdCard,
  FaGraduationCap,
  FaBook,
  FaSave,
  FaTimes,
  FaSearch,
  FaEnvelope,
  FaPhone,
  FaCalendarCheck
} from "react-icons/fa";

export default function UpdateStudentForm({ onClose, onSubmit }) {
  const [isSearching, setIsSearching] = useState(true);
  const [studentDetails, setStudentDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    birthday: "",
    studentID: "",
    degreeProgram: "",
    courses: "",
    email: "",
    phone: "",
    admissionDate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({
      ...studentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(studentDetails.studentID);
    onClose();
  };
  
  const handleFindStudent = () => {
    // Simulate finding a student
    setStudentDetails({
      firstName: "Jane",
      lastName: "Doe",
      address: "123 University Ave",
      birthday: "2000-05-15",
      studentID: "STU" + studentDetails.studentID,
      degreeProgram: "Computer Science",
      courses: "Math 101, Programming 202, Data Structures 301",
      email: "jane.doe@university.edu",
      phone: "555-123-4567",
      admissionDate: "2023-09-01"
    });
    setIsSearching(false);
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
        <div className="inline-flex justify-center items-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
          <FaUserEdit className="text-2xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Update Student Information</h2>
        <p className="text-gray-500 mt-2">Modify existing student details</p>
      </div>
      
      {isSearching ? (
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
          <h3 className="text-lg font-medium text-blue-800 mb-3">Find Student</h3>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <FaIdCard />
              </div>
              <input
                type="text"
                name="studentID"
                value={studentDetails.studentID}
                onChange={handleInputChange}
                placeholder="Enter Student ID"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleFindStudent}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <FaSearch />
              <span>Find</span>
            </button>
          </div>
        </div>
      ) : (
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
                value={studentDetails.firstName}
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
                value={studentDetails.lastName}
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
              value={studentDetails.address}
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
              value={studentDetails.email}
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
              value={studentDetails.phone}
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
                value={studentDetails.birthday}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
                <FaIdCard className="text-gray-500" />
                Student ID
              </label>
              <input
                type="text"
                name="studentID"
                value={studentDetails.studentID}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                placeholder="Student ID"
                readOnly
              />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
              <FaCalendarCheck className="text-gray-500" />
              Admission Date
            </label>
            <input
              type="date"
              name="admissionDate"
              value={studentDetails.admissionDate}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-1">
              <FaGraduationCap className="text-gray-500" />
              Degree Program
            </label>
            <input
              type="text"
              name="degreeProgram"
              value={studentDetails.degreeProgram}
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
              value={studentDetails.courses}
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
              className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaSave />
              <span>Update Student</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}