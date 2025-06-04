import { motion } from 'framer-motion';
// import iuceeImage from '../assets/iucee.jpg';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            AUISC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            The Anurag University IUCEE Student Chapter (AUISC) is dedicated to
            promoting engineering education and fostering innovation among students.
          </motion.p>
        </div>
      </section>

      {/* IUCEE Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">About IUCEE</h2>
            <p className="text-center text-gray-600 mb-8">
              Learn more at the official website: <a href="https://iucee.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">iucee.org</a>
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-gray-600 mb-6">
                  Indo Universal Collaboration for Engineering Education (IUCEE) was conceptualized by over 150 leaders of engineering education and businesses from US and India in 2007. The name was modified in 2016 from Indo US Collaboration for Engineering Education to reflect the more global nature of the collaborations. IUCEE is one of the founder members of IFEES (International Federation for Engineering Education Societies), which was the primary facilitator for the growth and development of IUCEE.
                </p>
                <p className="text-gray-600 mb-6">
                  The IUCEE process is under way during the past ten years. Financial contributions from distinguished patrons helped initiate the program. International experts from the US travel to India to discuss global best practices in teaching and research in their field with Indian faculty at Faculty Leadership Institutes. During the past ten years, 180 workshops were conducted. Significant positive outcomes from these workshops have been demonstrated. Networks for collaborations have resulted. Faculty from over 100 Indian colleges and 200 international faculty members from over 50 international institutions around the world, are connected in a wide variety of research and teaching collaborations.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/iucee.jpg" 
                  alt="IUCEE Image" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Vision:</h3>
                <p className="text-gray-700">The vision of Indo Universal Collaboration for Engineering Education (IUCEE) is to improve the quality and global relevance of engineering education in India</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Mission:</h3>
                <p className="text-gray-700">The mission is to build an ecosystem for transforming engineering education in India with the assistance of engineering education experts and industry from around the world</p>
              </div>
            </div>
            {/* Add images for Dr. Krishna Vedula and Ms. Sampada Pachaury here if available */}
            {/* <div className="flex justify-center gap-8 mt-8">
              <div>
                <img src="/path/to/image1.jpg" alt="Dr. Krishna Vedula" className="w-32 h-32 rounded-full mx-auto mb-2"/>
                <p className="text-center text-gray-800 font-semibold">DR.KRISHNA VEDULA</p>
                <p className="text-center text-gray-600 text-sm">Executive Director</p>
              </div>
              <div>
                <img src="/path/to/image2.jpg" alt="Ms. Sampada Pachaury" className="w-32 h-32 rounded-full mx-auto mb-2"/>
                <p className="text-center text-gray-800 font-semibold">MS.SAMPADA PACHAURY</p>
                <p className="text-center text-gray-600 text-sm">Director</p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* AUISC Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">About AUISC</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-full">
                <p className="text-gray-600 mb-8">
                  Anurag University IUCEE Student Chapter (AUISC) serves as a hub for collaboration, knowledge exchange, and skill development among engineering students. Our chapter organizes events, workshops, conferences and shares innovative ideas. In 2023, AUISC has hosted two national level events where different students chapters collaborated. AUISC plays a part in encouraging the next generation of engineers and developing a culture of continuous learning. AUISC actively supports skill development and to apply theoretical knowledge to real-world challenges. AUISC will equipt everybody with leadership, teamwork, and communication. All members should bring ideas and brainstorm together, for the best outcomes.
                </p>
              </div>
            </div>
             {/* History Timeline */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">History</h3>
              <div className="relative">
                {/* Timeline line with animation */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200"
                />
                {/* Timeline items */}
                <div className="space-y-12">
                  {/* 2021 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex flex-col md:flex-row items-center md:items-stretch md:justify-start"
                  >
                    <div className="w-full md:w-1/2 md:pr-12 mb-4 md:mb-0">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold text-blue-600">2021</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">Establishment</h4>
                        <p className="text-gray-600">
                          Establishment of AUISC with a vision to promote engineering education
                          and innovation among students.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  </motion.div>

                  {/* 2022 */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative flex flex-col md:flex-row items-center md:items-stretch md:justify-end"
                  >
                    <div className="w-full md:w-1/2 md:pl-12 mb-4 md:mb-0">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold text-blue-600">2022</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">AUNSF 1.0</h4>
                        <p className="text-gray-600">
                          Successfully organized AUNSF 1.0, bringing together students from
                          various institutions for knowledge sharing and networking.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  </motion.div>

                  {/* 2023 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative flex flex-col md:flex-row items-center md:items-stretch md:justify-start"
                  >
                    <div className="w-full md:w-1/2 md:pr-12 mb-4 md:mb-0">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold text-blue-600">2023</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">AUNSF 2.0</h4>
                        <p className="text-gray-600">
                          Expanded our reach with AUNSF 2.0, introducing new initiatives
                          and programs for student development.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  </motion.div>

                  {/* 2024 */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="relative flex flex-col md:flex-row items-center md:items-stretch md:justify-end"
                  >
                    <div className="w-full md:w-1/2 md:pl-12 mb-4 md:mb-0">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold text-blue-600">2024</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">AUNSF 3.0</h4>
                        <p className="text-gray-600">
                          Preparing for AUNSF 3.0, aiming to create an even more impactful
                          platform for engineering students.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anurag University Section */}
      <section className="py-16">
         <div className="container mx-auto px-4">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">About Anurag University</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-gray-600 mb-4">
                  Anurag University, nestled in the vibrant city of Hyderabad, is a distinguished educational institution renowned for its commitment to academic excellence and holistic development. With a rich heritage spanning over decades, the university stands as a beacon of knowledge and innovation, providing a transformative educational experience to students from diverse backgrounds. Anurag University prides itself on its state-of-the-art infrastructure, fostering an atmosphere conducive to learning, research, and personal growth.The esteemed faculty members, known for their expertise and dedication, empower students to explore their potential and emerge as leaders in their respective fields. Through a comprehensive range of undergraduate and postgraduate programs, Anurag University equips its graduates with the skills and knowledge required to thrive in today's rapidly evolving professional landscape. With a steadfast commitment to nurturing talent and fostering a culture of inclusivity, Anurag University continues to make significant contributions to the realms of education, research, and societal development.
                </p>
                <p className="text-center text-blue-600 font-semibold text-lg">-Inspiring Tomorrow</p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/AU.png" 
                  alt="Anurag University Image" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 