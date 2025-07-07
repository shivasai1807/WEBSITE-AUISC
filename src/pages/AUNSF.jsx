import { motion } from 'framer-motion';
import { Calendar, Users, Award, Gift } from 'lucide-react';

const AUNSF = () => {
  const chiefGuests = [
    {
      name: "Dr. Krishna Vedula",
      role: "Executive Director, IUCEE",
      description: "Dean Emeritus of UMass Lowell and founder of IUCEE, with 40+ years of academic and leadership experience in the U.S., now leading engineering education reform in India. Has impacted 100+ institutions through IUCEE, authored 75+ publications, and received global awards for contributions to STEM and engineering education."
    },
    {
      name: "Ms. Sampada Pachaury",
      role: "Independent Engineering Education Coach",
      description: "Ms. Sampada Pachaury is a Certified Systems Thinking and NLP Practitioner with global experience in academics and technology. She has mentored over 2,000 students through interdisciplinary, skill-based programs.An expert in semiconductors and education reform, focusing on transforming engineering education in India."
    },
    // {
    //   name: "Dr. Michael Chen",
    //   role: "Public Policy Expert",
    //   description: "Renowned scholar in public governance and policy implementation"
    // }
  ];

  const mentors = [
    {
      name: "Ms. Ritika Chawla",
      role: "Ignova",
      description: "Ms. Ritika Chawla is a seasoned L&D professional with 14+ years of experience in curriculum design and teacher training. As VP at LEAD Group, she leads school-based learning programs. With a Master's from Azim Premji University, she focuses on climate education, is trained in Climate Fresk and 2 tonnes workshops and follows a Zero Waste lifestyle.",
      image: "/rithika.webp"
    },
    {
      name: "Ms. Sampada Pachaury",
      role: "Aeronox",
      description: "Ms. Sampada Pachaury is a certified Systems Thinking and NLP practitioner with experience in education and technology. She has trained over 2,000 students in practical, skill-based learning. With expertise in semiconductors and learning systems, she's passionate about reshaping engineering education in India by promoting hands-on learning, creativity, and real-world problem-solving in classrooms.",
      image: "/sampadha.jpg"
    },
    {
      name: "Mr. Saurabh Tantia",
      role: "Public Administration",
      description: "Mr. Saurabh Tantia is a defence lawyer at the Jharkhand High Court, practicing in criminal, civil and corporate matters. He actively supports environmental and social causes through legal strategies. For the past three years, he has worked on environmental compliance, partnering with NGOs and local bodies to promote sustainable development and governance.",
      image: "/saurabh.webp"
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
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
        </motion.div>

        {/* Description with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Chief Guests
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {chiefGuests.map((guest, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-dark-blue-purple/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 flex flex-col items-center relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />
                
                {/* Top section with image and designation */}
                <div className="flex flex-col items-center mb-6 relative z-10">
                  {/* Image container with enhanced styling */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={index === 0 ? "/krishna vedula.png" : "/sampadha.jpg"}
                      alt={guest.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 text-center">
                    {guest.name}
                  </h3>
                  <p className="text-purple-400 text-lg font-medium group-hover:text-purple-300 transition-colors duration-300 text-center">
                    {guest.role}
                  </p>
                </div>

                {/* Bottom section with description */}
                <div className="relative z-10 w-full">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6" />
                  <p className="text-gray-300 text-base md:text-lg group-hover:text-gray-200 transition-colors duration-300 text-center leading-relaxed">
                    {guest.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-blue-500/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:bg-purple-500/10 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Patron with enhanced card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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

        {/* Mentors Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mx-auto px-2 md:px-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                className="group bg-dark-blue-purple/30 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 flex flex-col items-center relative overflow-hidden w-full min-w-0 max-w-full"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />
                {/* Top section with image and designation */}
                <div className="flex flex-col items-center mb-6 relative z-10">
                  {/* Image container with enhanced styling */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={mentor.image || "/AUISC_Logo.png"}
                      alt={mentor.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Name and Role */}
                  <h3 className="text-2xl md:text-2xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 text-center">
                    {mentor.name}
                  </h3>
                  <p className="text-purple-400 text-lg font-medium group-hover:text-purple-300 transition-colors duration-300 text-center">
                    {mentor.role}
                  </p>
                </div>
                {/* Bottom section with description */}
                <div className="relative z-10 w-full">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6" />
                  <p className="text-gray-300 text-base md:text-lg group-hover:text-gray-200 transition-colors duration-300 text-center leading-relaxed">
                    {mentor.description}
                  </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-blue-500/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:bg-purple-500/10 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dates with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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

        {/* Itinerary Section (styled like PNG) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-wide uppercase">Event Itinerary</h2>
          <div className="max-w-2xl mx-auto flex flex-col gap-8">
            {/* Day 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="md:flex md:items-start md:gap-8 text-left"
            >
              <h3 className="text-3xl font-extrabold mb-4 text-blue-400 tracking-wide md:mb-0 md:min-w-[120px]">DAY 1</h3>
              <div>
                <p className="font-bold mb-1 text-blue-300">OPENING CEREMONY</p>
                <ul className="list-disc ml-6 mb-2 text-white">
                  <li>Mentoring Session</li>
                  <li>Team Building Activities</li>
                  <li>Aerobics</li>
                </ul>
                <p className="font-bold mt-2 text-blue-300">DAY 1 CONCLUDES</p>
              </div>
            </motion.div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-400 h-3 w-40 rounded-l-lg" />
              <div className="flex-1 h-1 bg-blue-200" />
            </div>
            {/* Day 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="md:flex md:items-start md:gap-8 text-left"
            >
              <h3 className="text-3xl font-extrabold mb-4 text-blue-400 tracking-wide md:mb-0 md:min-w-[120px]">DAY 2</h3>
              <div>
                <ul className="list-disc ml-6 mb-2 text-white">
                  <li>Group Discussion</li>
                  <li>Brainstorming Sessions</li>
                  <li>Cultural Events</li>
                </ul>
                <p className="font-bold mt-2 text-blue-300">DAY 2 CONCLUDES</p>
              </div>
            </motion.div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-400 h-3 w-40 rounded-l-lg" />
              <div className="flex-1 h-1 bg-blue-200" />
            </div>
            {/* Day 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="md:flex md:items-start md:gap-8 text-left"
            >
              <h3 className="text-3xl font-extrabold mb-4 text-blue-400 tracking-wide md:mb-0 md:min-w-[120px]">DAY 3</h3>
              <div>
                <ul className="list-disc ml-6 mb-2 text-white">
                  <li>Surprise Activity</li>
                  <li>Photoshoot</li>
                  <li>Presentation</li>
                  <li>Award Ceremony</li>
                </ul>
                <p className="font-bold mt-2 text-blue-300">CLOSING CEREMONY</p>
              </div>
            </motion.div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-400 h-3 w-40 rounded-l-lg" />
              <div className="flex-1 h-1 bg-blue-200" />
            </div>
          </div>
        </motion.div>

        {/* Perks with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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

        {/* Team Behind 3.0 Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Team Behind 3.0
          </h2>

          {/* Advisory Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Advisory
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto justify-items-center">
              {[
                { name: "Aishwarya", team: "Project Managers", image: "/team_pics/aishwarya.webp", linkedin: "https://www.linkedin.com/in/aishwaryaalechalla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { name: "Eshwar", team: "Project Managers", image: "/team_pics/eshwar.webp", linkedin: "https://www.linkedin.com/in/karne-eshwar-35a29026a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
                { name: "Sonal", team: "Content Team", image: "/team_pics/sonal.webp", linkedin: "https://www.linkedin.com/in/sonal-gramopadhye-122094320/" },
                { name: "Vigneshwar", team: "Organizing Team", image: "/team_pics/vignesh.webp", linkedin: "https://www.linkedin.com/in/vigneshwar-e-96964b213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { name: "Amrutha", team: "Technical Team", image: "/team_pics/amrutha.webp", linkedin: "https://www.linkedin.com/in/amrutha-sri-pinapaka-a23b32229" },
                // { name: "Vaishnavi", team: "Technical Team", image: "/team_pics/vaishnavi.webp", linkedin: "https://www.linkedin.com/in/vaishnavi-tella-b07b30287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
                { name: "Poornima", team: "Designing Team", image: "/team_pics/poornima.webp", linkedin: "https://www.linkedin.com/in/guda-poornima-5a7495252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { name: "Abhay Ramagiri", team: "Creative Team", image: "/team_pics/abhay.webp", linkedin: "https://www.linkedin.com/in/abhay-ramagiri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { name: "Raaga Samanvita", team: "Sponsorship Team", image: "/team_pics/raaga.webp", linkedin: "https://www.linkedin.com/in/burra-raaga-samanvita" },
                { name: "Ankitha", team: "Marketing Team", image: "/team_pics/ankitha.webp", linkedin: "https://www.linkedin.com/in/ankitha-manupati-6688bb250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { name: "Bindu", team: "Marketing Team", image: "/team_pics/bindu.webp" },
                { name: "Srujan", team: "Media Team", image: "/team_pics/srujan.webp", linkedin: "https://www.linkedin.com/in/malluri-srujan " },
                { name: "Kaif Shaik", team: "Logistics Team", image: "/team_pics/kaif.webp", linkedin: "https://www.linkedin.com/in/kaif-shaik-185b90268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                // { name: "Srujan", team: "Registrations Team", image: "/team_pics/srujan.webp", linkedin: "https://www.linkedin.com/in/malluri-srujan " },
                { name: "Jerusha", team: "Registrations Team", image: "/team_pics/jerusha.webp" },
                { name: "Sandhya", team: "Hospitality Team", image: "/team_pics/sandhya.webp" },
                { name: "Shyamala", team: "Hospitality Team", image: "/team_pics/shyamala.webp", linkedin: "https://www.linkedin.com/in/katikitala-shyamala-4bbb30265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { name: "Poornima", team: "Crafts Team", image: "/team_pics/poornima.webp", linkedin: "https://www.linkedin.com/in/guda-poornima-5a7495252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { name: "Eshika", team: "Culturals Team", image: "/team_pics/eshika.webp", linkedin: "https://www.linkedin.com/in/sunaga-eshika-kakuturu-0b7ba4237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYeZMaXJ3RfutS3G3e16New%3D%3D" },
                { name: "Akshitha", team: "Culturals Team", image: "/team_pics/akshitha.webp", linkedin: "https://www.linkedin.com/in/tirmal-akshitha-7b6954264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
              ].map((advisor, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-blue-500/20">
                    <img
                      src={advisor.image || "/AUISC_Logo.png"}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                      onError={e => { e.target.onerror = null; e.target.src = "/AUISC_Logo.png"; }}
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-purple-400 text-center">{advisor.name}</h4>
                  <p className="text-blue-400 mb-2 text-center">{advisor.team}</p>
                  {advisor.linkedin && (
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Project Managers */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Project Managers</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto justify-items-center">
                <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-blue-500/20">
                    <img
                      src="/team_pics/thanughana.webp"
                      alt="Thanughna"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-purple-400 text-center">Thanughna</h4>
                  <p className="text-blue-400 mb-2 text-center">Project Manager</p>
                  <div className="flex items-center justify-center space-x-2">
                    <a
                      href="https://www.linkedin.com/in/thanughna-dhatrika-076699257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-blue-500/20">
                    <img
                      src="/team_pics/pavan.webp"
                      alt="Pavan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-purple-400 text-center">Pavan</h4>
                  <p className="text-blue-400 mb-2 text-center">Project Manager</p>
                  <div className="flex items-center justify-center space-x-2">
                    <a
                      href="https://www.linkedin.com/in/pavan1207/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Leads */}
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Team Leads</h3>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto justify-items-center">
            {[
              { "name": "Cecilia", "team": "Content Team", "linkedin": "https://www.linkedin.com/in/sfcecilia/", "image": "/team_pics/cecilia.webp" },
              { "name": "Abhiram", "team": "Organizing Team", "linkedin": "https://www.linkedin.com/in/abhiram-banka-aa542b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "image": "/team_pics/abhiram.webp" },
              { "name": "Agrati Sheela", "team": "Organizing Team", "linkedin": "https://www.linkedin.com/in/agrati-sheela-01b874253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "image": "/team_pics/agrathi.webp" },
              { "name": "Shiva Sai", "team": "Technical Team", "linkedin": "https://www.linkedin.com/in/shiva-sai-balbari/", "image": "/team_pics/shiva.webp" },
              { "name": "Kavya Sri", "team": "Designing Team", "linkedin": "https://www.linkedin.com/in/kavya-sri-1b8868300/", "image": "/team_pics/kavya_sri.webp" },
              { "name": "Sumad", "team": "Creative Team", "linkedin": "https://in.linkedin.com/in/sumad-reddy", "image": "/team_pics/sumad.webp" },
              { "name": "Vaishnavi", "team": "Creative Team", "linkedin": "https://www.linkedin.com/in/vaishnavi-tella-b07b30287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "image": "/team_pics/vaishnavi.webp" },
              { "name": "Jahnavi Dora", "team": "Sponsorship Team", "linkedin": "https://www.linkedin.com/in/jahnavi-dora-481b31287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "image": "/team_pics/jahnavi.webp" },
              { "name": "Rekha", "team": "Sponsorship Team", "linkedin": "https://www.linkedin.com/in/rekha-korubothu-3a85b9288", "image": "/team_pics/rekha.webp" },
              { "name": "Ayesha", "team": "Marketing Team", "linkedin": "https://www.linkedin.com/in/ayesha-shaik-685327287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "image": "/team_pics/ayesha.webp" },
              { "name": "Pranav", "team": "Marketing Team", "linkedin": "https://www.linkedin.com/in/pranavkothapalli", "image": "/team_pics/pranav.webp" },
              { "name": "Anji Reddy", "team": "Marketing Team", "linkedin": "https://www.linkedin.com/in/anjireddyboda", "image": "/team_pics/anji.webp" },

              { "name": "Ram Swaroop", "team": "Media Team", "linkedin": "https://www.linkedin.com/in/ramswaroop-dara-77a74b258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "image": "/team_pics/ram.webp" },
              {"name": "Akhil", "team": "Media Team", "linkedin": "https://www.linkedin.com/in/akhil-davula-b5109a24a/", "image": "/team_pics/akhil.webp" },
              { "name": "Sri Charan", "team": "Logistics Team", "linkedin": "https://www.linkedin.com/in/sricharan-divila-9627a534b/", "image": "/team_pics/sri_charan.webp" },
              { "name": "Pranathi", "team": "Logistics Team", "linkedin": "http://www.linkedin.com/in/pranathi-goli-006669287", "image": "/team_pics/pranathi.webp" },
              { "name": "Deekshitha", "team": "Registrations Team", "linkedin": "https://www.linkedin.com/in/deekshitha-r-bb3366278", "image": "/team_pics/deekshitha.webp" },
              { "name": "Siri Chandana", "team": "Registrations Team", "linkedin": "https://www.linkedin.com/in/sirireddy26", "image": "/team_pics/siriChandana.webp" },
              { "name": "Sukruth", "team": "Hospitality Team", "linkedin": "https://www.linkedin.com/in/baikan-sukruth-b4059a327/", "image": "/team_pics/sukruth.webp" },
              { "name": "Sreeja", "team": "Hospitality Team", "linkedin": "https://www.linkedin.com/in/police-sreeja-102396287/", "image": "/team_pics/sreeja_p.webp" },
              { "name": "Vyshali", "team": "Crafts Team", "linkedin": "", "image": "/team_pics/vyshali.webp" },
              { "name": "Umasri", "team": "Culturals Team", "linkedin": "https://www.linkedin.com/in/umasri-kataboina-9a863b2a4/", "image": "/team_pics/uma.webp" }
            ].map((lead, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-blue-500/20">
                  <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2 text-purple-400 text-center">{lead.name}</h4>
                <p className="text-blue-400 mb-2 text-center">{lead.team}</p>
                <div className="flex items-center justify-center space-x-2">
                  <a
                    href={lead.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AUNSF; 