import React from "react";
import { FaUserGraduate, FaBook, FaSearch, FaBell } from "react-icons/fa";

export default function Dashboard() {
  const statsData = [
    {
      title: "Total Students",
      count: 1245,
      bgColor: "bg-gradient-to-r from-blue-400 to-blue-600",
      icon: <FaUserGraduate size={24} />,
    },
    {
      title: "Active Courses",
      count: 32,
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
      icon: <FaBook size={24} />,
    },
    {
      title: "New Registrations",
      count: 28,
      bgColor: "bg-gradient-to-r from-blue-400 to-blue-700",
      icon: <FaSearch size={24} />,
    },
    {
      title: "System Alerts",
      count: 5,
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-800",
      icon: <FaBell size={24} />,
    },
  ];

  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome back, Admin
        </h2>
        <p className="text-gray-600">Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-xl shadow-md p-6 text-white`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-opacity-80 text-sm">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {stat.count.toLocaleString()}
                </h3>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-medium">New student registration</p>
            <p className="text-sm text-gray-500">
              John Smith enrolled in Software Engineering
            </p>
            <p className="text-xs text-gray-400">Today, 9:45 AM</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <p className="font-medium">Course update</p>
            <p className="text-sm text-gray-500">
              Database Systems syllabus updated
            </p>
            <p className="text-xs text-gray-400">Yesterday, 3:20 PM</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <p className="font-medium">System maintenance</p>
            <p className="text-sm text-gray-500">
              Scheduled maintenance completed
            </p>
            <p className="text-xs text-gray-400">Mar 22, 2025, 11:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
