import React, { useState, useEffect } from "react";
import { 
  FaHistory, 
  FaFilter, 
  FaUserCog, 
  FaCalendarAlt, 
  FaSearch, 
  FaDownload, 
  FaEye, 
  FaSort,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

export default function AuditLogs() {
  // Sample audit log data - in a real app, this would come from an API
  const sampleLogs = [
    { id: 1, user: "admin@example.com", action: "Added new course", target: "CS101", timestamp: "2025-03-22T14:30:00", ip: "192.168.1.1" },
    { id: 2, user: "instructor@example.com", action: "Updated course details", target: "MATH202", timestamp: "2025-03-22T13:15:00", ip: "192.168.1.2" },
    { id: 3, user: "admin@example.com", action: "Removed student", target: "John Doe", timestamp: "2025-03-21T16:45:00", ip: "192.168.1.1" },
    { id: 4, user: "support@example.com", action: "Password reset", target: "student@example.com", timestamp: "2025-03-21T10:20:00", ip: "192.168.1.3" },
    { id: 5, user: "instructor@example.com", action: "Graded assignments", target: "PHYS101", timestamp: "2025-03-20T09:30:00", ip: "192.168.1.2" },
    { id: 6, user: "admin@example.com", action: "System backup", target: "Database", timestamp: "2025-03-19T22:00:00", ip: "192.168.1.1" },
    { id: 7, user: "admin@example.com", action: "Added new course", target: "BIO301", timestamp: "2025-03-19T14:30:00", ip: "192.168.1.1" },
    { id: 8, user: "support@example.com", action: "User account locked", target: "student2@example.com", timestamp: "2025-03-18T11:15:00", ip: "192.168.1.3" },
  ];

  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    user: "",
    action: "",
    dateFrom: "",
    dateTo: ""
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("timestamp");
  const [sortDirection, setSortDirection] = useState("desc");
  const logsPerPage = 5;

  useEffect(() => {
    // This would be an API call in a real application
    setLogs(sampleLogs);
    setFilteredLogs(sampleLogs);
  }, []);

  useEffect(() => {
    let result = logs;
    
    // Apply search term
    if (searchTerm) {
      result = result.filter(log => 
        log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.target.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply filters
    if (filters.user) {
      result = result.filter(log => log.user.toLowerCase().includes(filters.user.toLowerCase()));
    }
    
    if (filters.action) {
      result = result.filter(log => log.action.toLowerCase().includes(filters.action.toLowerCase()));
    }
    
    if (filters.dateFrom) {
      const fromDate = new Date(filters.dateFrom);
      result = result.filter(log => new Date(log.timestamp) >= fromDate);
    }
    
    if (filters.dateTo) {
      const toDate = new Date(filters.dateTo);
      toDate.setHours(23, 59, 59);
      result = result.filter(log => new Date(log.timestamp) <= toDate);
    }
    
    // Apply sorting
    result = [...result].sort((a, b) => {
      if (sortField === "timestamp") {
        return sortDirection === "asc" 
          ? new Date(a.timestamp) - new Date(b.timestamp)
          : new Date(b.timestamp) - new Date(a.timestamp);
      } else {
        return sortDirection === "asc"
          ? a[sortField].localeCompare(b[sortField])
          : b[sortField].localeCompare(a[sortField]);
      }
    });
    
    setFilteredLogs(result);
    setCurrentPage(1);
  }, [logs, searchTerm, filters, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      user: "",
      action: "",
      dateFrom: "",
      dateTo: ""
    });
    setSearchTerm("");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // Pagination logic
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);
  const totalPages = Math.ceil(filteredLogs.length / logsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const downloadLogs = () => {
    // In a real app, this would generate a CSV or PDF
    alert("Downloading logs...");
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <FaHistory className="text-4xl text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Audit Logs</h1>
      </div>
      
      {/* Search and filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search logs..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
          />
        </div>
        
        <button
          onClick={toggleFilter}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium"
        >
          <FaFilter />
          <span>Filters</span>
        </button>
        
        <button
          onClick={downloadLogs}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
        >
          <FaDownload />
          <span>Export</span>
        </button>
      </div>
      
      {/* Filter panel */}
      {isFilterOpen && (
        <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Filter Logs</h2>
            <button 
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear all filters
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUserCog className="text-gray-400" />
              </div>
              <input 
                type="text" 
                name="user"
                placeholder="Filter by user" 
                value={filters.user}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaHistory className="text-gray-400" />
              </div>
              <input 
                type="text" 
                name="action"
                placeholder="Filter by action" 
                value={filters.action}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input 
                type="date" 
                name="dateFrom"
                placeholder="From date" 
                value={filters.dateFrom}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              />
              <div className="text-xs text-gray-500 mt-1 ml-2">From date</div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input 
                type="date" 
                name="dateTo"
                placeholder="To date" 
                value={filters.dateTo}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              />
              <div className="text-xs text-gray-500 mt-1 ml-2">To date</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Logs table */}
      <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("timestamp")}
                >
                  <div className="flex items-center">
                    <span>Timestamp</span>
                    <FaSort className="ml-1 text-gray-400" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("user")}
                >
                  <div className="flex items-center">
                    <span>User</span>
                    <FaSort className="ml-1 text-gray-400" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("action")}
                >
                  <div className="flex items-center">
                    <span>Action</span>
                    <FaSort className="ml-1 text-gray-400" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("target")}
                >
                  <div className="flex items-center">
                    <span>Target</span>
                    <FaSort className="ml-1 text-gray-400" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  IP Address
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentLogs.length > 0 ? (
                currentLogs.map(log => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(log.timestamp)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {log.user}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.action}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.target}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.ip}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 flex items-center justify-end gap-1">
                        <FaEye />
                        <span>Details</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    No logs found matching your search criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {indexOfFirstLog + 1} to {Math.min(indexOfLastLog, filteredLogs.length)} of {filteredLogs.length} entries
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`
              flex items-center justify-center p-2 rounded-lg
              ${currentPage === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            <FaChevronLeft />
          </button>
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            // Show pages around current page
            let pageToShow;
            if (totalPages <= 5) {
              pageToShow = i + 1;
            } else if (currentPage <= 3) {
              pageToShow = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageToShow = totalPages - 4 + i;
            } else {
              pageToShow = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageToShow}
                onClick={() => handlePageChange(pageToShow)}
                className={`
                  w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium
                  ${currentPage === pageToShow
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {pageToShow}
              </button>
            );
          })}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`
              flex items-center justify-center p-2 rounded-lg
              ${currentPage === totalPages 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}