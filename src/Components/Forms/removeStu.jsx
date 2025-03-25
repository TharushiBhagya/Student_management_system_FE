import React, { useState } from "react";
import {
  FaTrashAlt,
  FaUser,
  FaGraduationCap,
  FaIdCard,
  FaTimes,
  FaSearch,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaBook,
  FaCalendarCheck
} from "react-icons/fa";

export default function RemoveStudentForm({ onClose, onRemove }) {
  const [studentID, setStudentID] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState("");
  
  const handleSearch = () => {
    // Mock student database (replace with actual API call)
    const mockDatabase = {
      "S123": { 
        firstName: "John", 
        lastName: "Doe", 
        degree: "Software Engineering",
        address: "456 Campus Drive, University Town",
        email: "john.doe@university.edu",
        phone: "555-123-4567",
        birthday: "1998-03-15",
        admissionDate: "2021-09-01",
        courses: "Advanced Programming, Database Systems, Web Development"
      },
      "S456": { 
        firstName: "Jane", 
        lastName: "Smith", 
        degree: "Cyber Security",
        address: "789 College Blvd, University City",
        email: "jane.smith@university.edu",
        phone: "555-987-6543",
        birthday: "1999-07-22",
        admissionDate: "2022-01-15",
        courses: "Network Security, Cryptography, Ethical Hacking"
      },
    };
    
    if (mockDatabase[studentID]) {
      setStudentDetails(mockDatabase[studentID]);
      setError("");
    } else {
      setStudentDetails(null);
      setError("Student ID not found");
    }
  };
  
  const handleRemove = () => {
    onRemove(studentID);
    onClose();
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
        <div className="inline-flex justify-center items-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
          <FaTrashAlt className="text-2xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Remove Student</h2>
        <p className="text-gray-500 mt-2">Find and remove a student from the system</p>
      </div>
      
      <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-6">
        <h3 className="text-lg font-medium text-red-800 mb-3">Find Student to Remove</h3>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <FaIdCard />
            </div>
            <input
              type="text"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              placeholder="Enter Student ID"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <FaSearch />
            <span>Find</span>
          </button>
        </div>
      </div>
      
      {error && (
        <div className="p-4 mb-6 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-600">
          <FaExclamationTriangle />
          <span>{error}</span>
        </div>
      )}
      
      {studentDetails && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaUser />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Full Name</div>
                  <div className="font-medium">{studentDetails.firstName} {studentDetails.lastName}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaIdCard />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Student ID</div>
                  <div className="font-medium">{studentID}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Address</div>
                  <div className="font-medium">{studentDetails.address}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">{studentDetails.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">{studentDetails.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaCalendarAlt />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Date of Birth</div>
                  <div className="font-medium">{studentDetails.birthday}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaCalendarCheck />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Admission Date</div>
                  <div className="font-medium">{studentDetails.admissionDate}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaGraduationCap />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Degree Program</div>
                  <div className="font-medium">{studentDetails.degree}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:col-span-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <FaBook />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Enrolled Courses</div>
                  <div className="font-medium">{studentDetails.courses}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="flex items-center gap-3 text-red-600 mb-2">
              <FaExclamationTriangle />
              <div className="font-semibold">Warning</div>
            </div>
            <p className="text-red-600">
              Are you sure you want to remove this student? This action cannot be undone and all 
              associated data will be permanently deleted from the system.
            </p>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleRemove}
              className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaTrashAlt />
              <span>Confirm Removal</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}