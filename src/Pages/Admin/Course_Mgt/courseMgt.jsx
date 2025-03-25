import React, { useState } from "react";
import { 
  FaBook, 
  FaEdit, 
  FaTrash, 
  FaCheck,
  FaTimes,
  FaGraduationCap,
  FaBell,
  FaArrowRight
} from "react-icons/fa";
import AddCourseForm from "../../../Components/Forms/addCourse";
import UpdateCourseForm from "../../../Components/Forms/updateCourse";
import RemoveCourseForm from "../../../Components/Forms/removeCourse";

export default function AdminCourseMgt() {
  const [isModalOpen, setIsModalOpen] = useState({ add: false, update: false, remove: false });
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleOpenModal = (type) => setIsModalOpen({ ...isModalOpen, [type]: true });
  const handleCloseModal = (type) => setIsModalOpen({ ...isModalOpen, [type]: false });
  
  const handleCourseAction = (message, type = "success") => {
    setSuccessMessage(message);
    setMessageType(type);
    setIsSuccessMessageOpen(true);
    
    // Auto-hide the message after 5 seconds
    setTimeout(() => {
      setIsSuccessMessageOpen(false);
    }, 5000);
  };
  
  // Close notification on click
  const handleCloseNotification = () => {
    setIsSuccessMessageOpen(false);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <FaGraduationCap className="text-4xl text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Course Management</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => handleOpenModal("add")}
          className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <div className="flex items-center">
            <div className="bg-blue-400 bg-opacity-30 p-2 rounded-full mr-4">
              <FaBook className="text-2xl" />
            </div>
            <span className="font-medium text-lg">Add New Course</span>
          </div>
          <FaArrowRight className="text-blue-200" />
        </button>
        
        <button
          onClick={() => handleOpenModal("update")}
          className="flex items-center justify-between bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-5 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <div className="flex items-center">
            <div className="bg-indigo-400 bg-opacity-30 p-2 rounded-full mr-4">
              <FaEdit className="text-2xl" />
            </div>
            <span className="font-medium text-lg">Update Course</span>
          </div>
          <FaArrowRight className="text-indigo-200" />
        </button>
        
        <button
          onClick={() => handleOpenModal("remove")}
          className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-purple-600 text-white p-5 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <div className="flex items-center">
            <div className="bg-purple-400 bg-opacity-30 p-2 rounded-full mr-4">
              <FaTrash className="text-2xl" />
            </div>
            <span className="font-medium text-lg">Remove Course</span>
          </div>
          <FaArrowRight className="text-purple-200" />
        </button>
      </div>
      
      {/* Success/Error message */}
      {isSuccessMessageOpen && (
        <div className={`p-4 ${
          messageType === "success" 
            ? "bg-green-100 text-green-800 border-green-400" 
            : "bg-red-100 text-red-800 border-red-400"
        } border-l-4 rounded-lg shadow-md mb-6 animate-fadeIn`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`${
                messageType === "success" 
                  ? "bg-green-200" 
                  : "bg-red-200"
              } p-2 rounded-full mr-3`}>
                {messageType === "success" ? 
                  <FaCheck className="text-green-600" /> : 
                  <FaTimes className="text-red-600" />
                }
              </div>
              <div className="flex items-center">
                <FaBell className="mr-2 text-gray-500" />
                <span className="font-medium">{successMessage}</span>
              </div>
            </div>
            <button 
              onClick={handleCloseNotification}
              className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      
      {/* Modals */}
      {isModalOpen.add && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-blue-100">
            <AddCourseForm 
              onClose={() => handleCloseModal("add")} 
              onSubmit={() => handleCourseAction("Course added successfully!")} 
            />
          </div>
        </div>
      )}
      
      {isModalOpen.update && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-indigo-100">
            <UpdateCourseForm 
              onClose={() => handleCloseModal("update")} 
              onSubmit={() => handleCourseAction("Course updated successfully!")} 
            />
          </div>
        </div>
      )}
      
      {isModalOpen.remove && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-purple-100">
            <RemoveCourseForm 
              onClose={() => handleCloseModal("remove")} 
              onSubmit={() => handleCourseAction("Course removed successfully!")} 
            />
          </div>
        </div>
      )}
    </div>
  );
}