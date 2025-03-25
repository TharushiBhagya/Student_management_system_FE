import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { motion } from "framer-motion";
import {

  FaBook,
 
  FaUserGraduate,
  
} from "react-icons/fa";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const features = [
    {
      icon: <FaUserGraduate className="text-5xl text-[#0a2248]" />,
      title: "Student Information System",
      description:
        "Access comprehensive student profiles and personal details in one secure location.",
    },
    {
      icon: <FaBook className="text-5xl text-[#0a2248]" />,
      title: "Course Management",
      description:
        "Browse available courses, view detailed syllabi, and track enrollment status.",
    },
  ];

  const stats = [
    {
      value: "12,000+",
      label: "Students",
      icon: <FaUserGraduate className="text-4xl text-white mb-4" />,
    },
    {
      value: "500+",
      label: "Courses",
      icon: <FaBook className="text-4xl text-white mb-4" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onLoginClick={handleLogin} />
      <button
        className="absolute top-5 right-5 bg-[#0a2248] text-white shadow-lg px-5 py-2 rounded-full hover:bg-[#1a3a6c] transition duration-300 font-semibold z-10"
        onClick={handleLogin}
      >
        Login
      </button>

      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        >
          <source src="/univi.mp4" type="video/mp4" />
          <source src="/univi.webm" type="video/webm" />
          <source src="/univi.ogg" type="video/ogg" />
        </video>
      </div>

      {/* Stats Section */}
      <section className="bg-[#0a2248] py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-16 md:gap-24 text-center max-w-2xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 flex flex-col items-center"
                >
                  {stat.icon}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive system is designed to streamline academic
              management and enhance the educational experience.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center h-full"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About KDU Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  transition: { 
                    duration: 0.8,
                    ease: "easeOut"
                  } 
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-xl"
              >
                <img
                  src="/uni.jpg"
                  alt="KDU Campus"
                  className="w-full h-auto transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=KDU+Campus";
                  }}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About KDU
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                General Sir John Kotelawala Defence University stands at the
                forefront of academic excellence, providing world-class
                education and cutting-edge research opportunities. Our mission
                is to cultivate innovative minds that will shape the future of
                Sri Lanka.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                With state-of-the-art facilities and dedicated faculty across
                nine faculties, we ensure our students receive the highest
                quality education in both military and civilian disciplines.
              </p>
              <button
                className="bg-[#0a2248] text-white px-6 py-3 rounded-lg hover:bg-[#1a3a6c] transition duration-300 font-medium"
                onClick={() => window.open("https://kdu.ac.lk", "_blank")}
              >
                Explore University
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0a2248] to-[#1a3a6c] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Access Your Student Information?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Log in to the KDU Student Management System to view your courses
            and manage your academic journey.
          </p>
          <button
            className="bg-white text-[#0a2248] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
            onClick={handleLogin}
          >
            Login Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}