import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SideBar from "../../Components/SideBar/sideBar";
import AdminCourseMgt from "../Admin/Course_Mgt/courseMgt";
import StudentManagement from "../Admin/Std_mgt/StuMgt";
import AuditLogs from "../Admin/Audit/audit-logs";
import Dashboard from "../Admin/Dashboard/dashboard";
import { FaUserGraduate, FaBook, FaSearch, FaBell, FaChartLine } from "react-icons/fa";

export default function AdminPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }));
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    
    updateDateTime();
    const timer = setInterval(updateDateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const statsData = [
    { title: "Total Students", count: 1245, bgColor: "bg-gradient-to-r from-blue-400 to-blue-600", icon: <FaUserGraduate size={24} /> },
    { title: "Active Courses", count: 32, bgColor: "bg-gradient-to-r from-blue-500 to-blue-700", icon: <FaBook size={24} /> },
    { title: "New Registrations", count: 28, bgColor: "bg-gradient-to-r from-blue-400 to-blue-700", icon: <FaSearch size={24} /> },
    { title: "System Alerts", count: 5, bgColor: "bg-gradient-to-r from-blue-600 to-blue-800", icon: <FaBell size={24} /> },
  ];

  // Check if we're on the dashboard path
  const isDashboard = location.pathname === "/" || location.pathname === "";

  return (
    <div className="w-full h-screen flex bg-gray-100">
      <SideBar />
      
      <div className="flex-1 max-h-screen overflow-y-auto">
        <div className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold text-gray-800">KDU Admin Dashboard</h1>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm text-gray-600">{currentDate}</p>
              <p className="text-sm font-medium text-gray-800">{currentTime}</p>
            </div>
            <img src="/lady.jpg" alt="Admin" className="w-10 h-10 rounded-full border-2 border-blue-500" />
          </div>
        </div>
        
        <div className="p-6">
          {/* Only show welcome section and stats on dashboard */}
          {isDashboard && (
            <>
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, Admin</h2>
                <p className="text-gray-600">Here's what's happening today.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statsData.map((stat, index) => (
                  <div key={index} className={`${stat.bgColor} rounded-xl shadow-md p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-opacity-80 text-sm">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-1">{stat.count.toLocaleString()}</h3>
                      </div>
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          
          <Routes>
            
            <Route path="/student-management" element={<StudentManagement/>} />
            <Route path="/course-management" element={<AdminCourseMgt />} />
            <Route path="/audit-logs" element={<AuditLogs />} />
            <Route path="/" element={<Dashboard />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}