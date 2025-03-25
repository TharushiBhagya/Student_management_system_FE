import React, { useState } from "react";
import { FaBook, FaTimes, FaEdit, FaUserTie, FaClock, FaStar, FaSearch } from "react-icons/fa";

export default function UpdateCourseForm({ onClose, onSubmit }) {
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [credits, setCredits] = useState("");
  const [lectureHours, setLectureHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ courseId, courseName, lecturer, credits, lectureHours });
    onClose();
  };

  return (
    <div className="p-6 max-w-2xl w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-2 rounded-full">
            <FaEdit className="text-2xl text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Update Course</h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Course ID (Required)" 
            value={courseId} 
            onChange={(e) => setCourseId(e.target.value)} 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
            required 
          />
          <div className="text-xs text-gray-500 mt-1 ml-2">
            Enter the ID of the course you want to update
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Update Information</h3>
          <p className="text-sm text-gray-500 mb-4">Fill only the fields you want to update</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBook className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="New Course Name" 
            value={courseName} 
            onChange={(e) => setCourseName(e.target.value)} 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUserTie className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="New Lecturer" 
            value={lecturer} 
            onChange={(e) => setLecturer(e.target.value)} 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaStar className="text-gray-400" />
            </div>
            <input 
              type="number" 
              placeholder="New Credits" 
              value={credits} 
              onChange={(e) => setCredits(e.target.value)} 
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaClock className="text-gray-400" />
            </div>
            <input 
              type="number" 
              placeholder="New Lecture Hours" 
              value={lectureHours} 
              onChange={(e) => setLectureHours(e.target.value)} 
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
            />
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 pt-4">
          <button 
            type="button" 
            onClick={onClose} 
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-colors font-medium flex items-center gap-2"
          >
            <FaEdit className="text-indigo-200" />
            Update Course
          </button>
        </div>
      </form>
    </div>
  );
}