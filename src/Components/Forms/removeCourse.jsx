import React, { useState } from "react";
import { FaTrash, FaTimes, FaExclamationTriangle, FaSearch } from "react-icons/fa";

export default function RemoveCourseForm({ onClose, onSubmit }) {
  const [courseId, setCourseId] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmRemoval = () => {
    onSubmit(courseId);
    onClose();
  };

  const cancelRemoval = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="p-6 max-w-2xl w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-full">
            <FaTrash className="text-2xl text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Remove Course</h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>
      </div>
      
      {!showConfirmation ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaExclamationTriangle className="text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Warning: This action cannot be undone. The course will be permanently removed from the system.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Enter Course ID" 
              value={courseId} 
              onChange={(e) => setCourseId(e.target.value)} 
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" 
              required 
            />
            <div className="text-xs text-gray-500 mt-1 ml-2">
              Please enter the unique ID of the course you want to remove
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
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-colors font-medium flex items-center gap-2"
            >
              <FaTrash className="text-purple-200" />
              Remove Course
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white rounded-lg">
          <div className="bg-red-50 p-6 rounded-t-lg border-b border-red-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaExclamationTriangle className="text-3xl text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Confirm Course Removal</h3>
            <p className="text-center text-gray-600">
              Are you sure you want to remove the course with ID: <span className="font-semibold">{courseId}</span>?
            </p>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6 text-sm">
              This action cannot be undone. The course will be permanently removed from the system.
            </p>
            
            <div className="flex justify-end space-x-4">
              <button 
                onClick={cancelRemoval} 
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={confirmRemoval} 
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-colors font-medium flex items-center gap-2"
              >
                <FaTrash className="text-red-200" />
                Confirm Removal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}