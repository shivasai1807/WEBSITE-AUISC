import { motion } from 'framer-motion';
import { Calendar, Users, Award, Gift } from 'lucide-react';

const AUNSF = () => {
  const chiefGuests = [
    {
      name: "Dr. Krishna Vedula",
      role: "Executive Director",
      description: "Dean Emeritus of UMass Lowell and founder of IUCEE, with 40+ years of academic and leadership experience in the U.S., now leading engineering education reform in India. Has impacted 100+ institutions through IUCEE, authored 75+ publications, and received global awards for contributions to STEM and engineering education."
    },
    {
      name: "Ms. Sampada Pachaury",
      role: "Director & PT staff",
      description: "A certified Systems Thinking and NLP practitioner, with a background in semiconductors and education reform. With leadership roles across global tech firms and academia, now drives skill-based, interdisciplinary programs that have impacted 2000+ students, aiming to transform engineering education in India."
    },
    // {
    //   name: "Dr. Michael Chen",
    //   role: "Public Policy Expert",
    //   description: "Renowned scholar in public governance and policy implementation"
    // }
  ];

  const mentors = [
    {
      name: "Prof. Emily Brown",
      role: "Aerospace Engineering",
      description: "Specializes in drone technology and aerial systems"
    },
    {
      name: "Prof. David Wilson",
      role: "Fire Safety Engineering",
      description: "Expert in fire prevention and control systems"
    },
    {
      name: "Prof. Lisa Martinez",
      role: "Public Administration",
      description: "Focuses on urban governance and policy development"
    }
  ];

  const perks = [
    "Certificate of Participation",
    "Networking Opportunities",
    "Industry Exposure",
    "Workshop Materials",
    "Lunch and Refreshments",
    "Goodie Bag"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-blue-purple to-black text-white pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-3xl -z-10" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            AUNSF 3.0
          </h1>
          <p className="text-xl md:text-2xl text-light-blue-purple font-medium">
            11th - 13th July, 2025
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Poster with hover effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <a
                href="https://linktr.ee/aunsf"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <img
                  src="/poster.webp"
                  alt="AUNSF 3.0 Poster"
                  className="w-full max-w-md rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300 relative z-10"
                />
              </a>
            </div>
          </motion.div>

          {/* Register Button with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Join the Innovation</h2>
              <p className="text-gray-300 max-w-md">
                Be part of this groundbreaking symposium and shape the future of technology
              </p>
            </div>
            <a
              href="https://linktr.ee/aunsf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Register Now
            </a>
          </motion.div>
        </div>

        {/* Description with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About the Event
          </h2>
          <div className="bg-dark-blue-purple/30 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              AUNSF 3.0 brings together three crucial domains: Air, Fire, and Public Governance. 
              This comprehensive symposium explores cutting-edge developments in aerospace technology, 
              fire safety innovations, and effective public governance systems. Join us for an 
              immersive experience featuring expert talks, hands-on workshops, and networking 
              opportunities with industry leaders.
            </p>
          </div>
        </motion.div>

        {/* Chief Guests with enhanced cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Chief Guests
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {chiefGuests.map((guest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-dark-blue-purple/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors flex flex-col md:flex-row items-center gap-4 md:gap-6"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={index === 0 ? "/krishna vedula.png" : "/sampadha.jpg"}
                    alt={guest.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-blue-400">{guest.name}</h3>
                  <p className="text-purple-400 mb-2 md:mb-4 font-medium">{guest.role}</p>
                  <p className="text-gray-300 text-sm md:text-base">{guest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Patron with enhanced card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Patron
          </h2>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-dark-blue-purple/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors max-w-2xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-8"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/Dr-Archana-Mantri.png"
                  alt="Dr. Archana Mantri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-blue-400">Dr. Archana Mantri</h3>
                <p className="text-purple-400 mb-2 md:mb-4 font-medium">Vice Chancellor</p>
                <p className="text-gray-300 text-sm md:text-base">Vice Chancellor of Anurag University, is a seasoned leader with 30+ years in academia and industry, 100+ publications, and 43 patents, known for driving innovation, research, and educational reform.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mentors with enhanced cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Mentors
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-dark-blue-purple/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                  <img
                    src={`/mentors/mentor-${index + 1}.jpg`}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">{mentor.name}</h3>
                <p className="text-blue-400 mb-4 font-medium">{mentor.role}</p>
                <p className="text-gray-300">{mentor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Dates with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Event Schedule
          </h2>
          <div className="bg-dark-blue-purple/30 backdrop-blur-sm p-10 rounded-2xl max-w-2xl mx-auto border border-blue-500/20">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <p className="text-3xl font-bold mb-4">July 11-13, 2025</p>
            <p className="text-xl text-light-blue-purple">Three Days of Innovation and Learning</p>
          </div>
        </motion.div>

        {/* Perks with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Perks
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-dark-blue-purple/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors"
              >
                <Gift className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <p className="text-lg text-center">{perk}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AUNSF; 