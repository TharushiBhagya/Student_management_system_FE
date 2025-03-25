import React, { useState } from "react";
import { FaBook, FaTimes, FaPlus, FaUserTie, FaClock, FaStar } from "react-icons/fa";

export default function AddCourseForm({ onClose, onSubmit }) {
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
          <div className="bg-blue-100 p-2 rounded-full">
            <FaBook className="text-2xl text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Add New Course</h2>
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
            <FaBook className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Course ID" 
            value={courseId} 
            onChange={(e) => setCourseId(e.target.value)} 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            required 
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBook className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Course Name" 
            value={courseName} 
            onChange={(e) => setCourseName(e.target.value)} 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            required 
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUserTie className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Lecturer" 
            value={lecturer} 
            onChange={(e) => setLecturer(e.target.value)} 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            required 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaStar className="text-gray-400" />
            </div>
            <input 
              type="number" 
              placeholder="Credits" 
              value={credits} 
              onChange={(e) => setCredits(e.target.value)} 
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              required 
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaClock className="text-gray-400" />
            </div>
            <input 
              type="number" 
              placeholder="Lecture Hours" 
              value={lectureHours} 
              onChange={(e) => setLectureHours(e.target.value)} 
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              required 
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
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors font-medium flex items-center gap-2"
          >
            <FaPlus className="text-blue-200" />
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
}