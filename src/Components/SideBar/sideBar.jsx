import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import {
  FaUserGraduate,
  FaBook,
  FaClipboardList,
  FaHome,
  FaBars,
  FaChevronRight,
} from "react-icons/fa";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the user's preference from localStorage on component mount
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Update the theme when the dark mode state changes
  useEffect(() => {
    // Update localStorage
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update the document's class to apply dark mode styles
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Handle logout
  const handleLogout = () => {
    // Clear any auth tokens from localStorage
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/login');
    // You might want to call any auth context methods here if you have them
  };

  // Check if a route is active
  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome size={20} />,
      path: "/admin",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Student Management",
      icon: <FaUserGraduate size={20} />,
      path: "/admin/student-management",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Course Management",
      icon: <FaBook size={20} />,
      path: "/admin/course-management",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Audit Logs",
      icon: <FaClipboardList size={20} />,
      path: "/admin/audit-logs",
      color: "from-blue-400 to-blue-600",
    },
  ];

  // Dynamic classes based on dark/light mode
  const sidebarBgClass = isDarkMode ? "bg-[#023047]" : "bg-white";
  const textColorClass = isDarkMode ? "text-white" : "text-gray-800";
  const headerBgClass = isDarkMode ? "bg-[#023047]" : "bg-gray-100";
  const separatorClass = isDarkMode ? "border-[#219ebc]" : "border-gray-200";
  const itemHoverClass = isDarkMode ? "hover:bg-[#0D4B66]" : "hover:bg-gray-100";
  const iconColorClass = isDarkMode ? "text-[#219ebc]" : "text-blue-500";

  return (
    <div
      className={`h-screen ${
        isCollapsed ? "w-20" : "w-64"
      } ${sidebarBgClass} ${textColorClass} flex flex-col transition-all duration-300 shadow-xl`}
    >
      {/* Logo and toggle button */}
      <div className="flex flex-col w-full">
        <div className={`${headerBgClass} py-4 px-4 flex items-center justify-between border-b ${separatorClass}`}>
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-10" />
              <span className="font-bold text-lg">KDU Admin</span>
            </div>
          )}
          {isCollapsed && <div className="h-10 w-full"></div>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`p-2 ${isDarkMode ? "bg-[#219ebc] hover:bg-[#1C85A0]" : "bg-blue-100 hover:bg-blue-200"} rounded-full transition-all`}
          >
            <FaBars className={isDarkMode ? "text-white" : "text-blue-500"} />
          </button>
        </div>
        <div className="bg-[#219ebc] h-1 w-full"></div>
        <div className="bg-[#ffb703] h-1 w-full"></div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-6 px-3">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                  ${
                    isActive(item.path)
                      ? `bg-gradient-to-r ${item.color} text-white`
                      : `${itemHoverClass} ${isDarkMode ? "text-gray-300" : "text-gray-600"} hover:text-${isDarkMode ? "white" : "gray-800"}`
                  }
                `}
              >
                <div
                  className={`${isActive(item.path) ? "" : iconColorClass}`}
                >
                  {item.icon}
                </div>
                {!isCollapsed && <span className="flex-1">{item.title}</span>}
                {!isCollapsed && isActive(item.path) && (
                  <FaChevronRight size={14} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dark/Light Mode Toggle Button */}
      <div className="px-4 mt-auto">
        <button 
          onClick={toggleDarkMode}
          className={`w-full flex items-center gap-3 ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-blue-100 hover:bg-blue-200"} p-3 rounded-lg transition-all mb-2`}
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          {!isCollapsed && <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>}
        </button>
      </div>

      {/* User profile section */}
      {!isCollapsed && (
        <div className={`p-4 border-t ${separatorClass} mb-2`}>
          <div className="flex items-center gap-3">
            <img
              src="/lady.jpg"
              alt="User"
              className={`w-10 h-10 rounded-full border-2 ${isDarkMode ? "border-[#219ebc]" : "border-blue-300"}`}
            />
            <div>
              <h4 className="font-medium text-sm">Admin User</h4>
              <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Administrator</p>
            </div>
          </div>
        </div>
      )}

      {/* Logout Button */}
      <div className="p-4 mb-2">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 bg-red-500 hover:bg-red-600 p-3 rounded-lg transition-all text-white"
        >
          <FiLogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}