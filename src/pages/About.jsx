import { motion } from 'framer-motion';

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
            About AUISC
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

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
              <p className="text-gray-600">
                To empower engineering students with knowledge, skills, and opportunities
                that enable them to become innovative leaders in their respective fields.
                We strive to create a collaborative environment that promotes learning,
                research, and professional development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
              <p className="text-gray-600">
                To be a leading student chapter that nurtures engineering excellence
                and innovation. We aim to create a community of forward-thinking
                engineers who will shape the future of technology and contribute
                to society's development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Our History</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">2021</h3>
                <p className="text-gray-600">
                  Establishment of AUISC with a vision to promote engineering education
                  and innovation among students.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">2022</h3>
                <p className="text-gray-600">
                  Successfully organized AUNSF 1.0, bringing together students from
                  various institutions for knowledge sharing and networking.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">2023</h3>
                <p className="text-gray-600">
                  Expanded our reach with AUNSF 2.0, introducing new initiatives
                  and programs for student development.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">2024</h3>
                <p className="text-gray-600">
                  Preparing for AUNSF 3.0, aiming to create an even more impactful
                  platform for engineering students.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 