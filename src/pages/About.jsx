import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Lightbulb, Globe, Award, BookOpen } from 'lucide-react';
// import iuceeImage from '../assets/iucee.jpg';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  const cardHover = {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3 }
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-dark-blue-purple text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/pics_png/pattern.png')] opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About AUISC
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-light-blue-purple leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering the next generation of engineering leaders through innovation, collaboration and excellence.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* IUCEE Section */}
      <section className="py-20 bg-light-blue-purple">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-dark-blue-purple">About IUCEE</h2>
                <p className="text-dark-blue-purple mb-6 leading-relaxed">
                  Indo Universal Collaboration for Engineering Education (IUCEE) was conceptualized by over 150 leaders of engineering education and businesses from US and India in 2007. The name was modified in 2016 from Indo US Collaboration for Engineering Education to reflect the more global nature of the collaborations.
                </p>
                <p className="text-dark-blue-purple mb-8 leading-relaxed">
                  IUCEE is one of the founder members of IFEES (International Federation for Engineering Education Societies), which was the primary facilitator for the growth and development of IUCEE.
                </p>
                <a 
                  href="https://iucee.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-bright-orange hover:text-orange-yellow transition-colors font-semibold"
                >
                  Visit Official Website
                  <ArrowRight size={20} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/iucee (2).png" 
                    alt="IUCEE Image" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-bright-orange/10 p-3 rounded-lg">
                      <Users className="text-bright-orange" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Active Members</p>
                      <p className="text-xl font-bold text-dark-blue-purple">30+ Colleges</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Vision & Mission Cards */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mt-16"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-bright-orange/10 p-3 rounded-lg">
                    <Lightbulb className="text-bright-orange" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue-purple">Vision</h3>
                </div>
                <p className="text-dark-blue-purple leading-relaxed">
                  To improve the quality and global relevance of engineering education in India through international collaboration and innovation.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-bright-orange/10 p-3 rounded-lg">
                    <Globe className="text-bright-orange" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue-purple">Mission</h3>
                </div>
                <p className="text-dark-blue-purple leading-relaxed">
                  To build an ecosystem for transforming engineering education in India with the assistance of engineering education experts and industry from around the world.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AUISC Section */}
      <section className="py-20 bg-light-blue-purple">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-dark-blue-purple mb-4"
              >
                About AUISC
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-dark-blue-purple max-w-3xl mx-auto"
              >
                Anurag University IUCEE Student Chapter (AUISC) serves as a hub for collaboration, knowledge exchange and skill development among engineering students.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Award className="text-bright-orange" size={24} />,
                  title: "National Events",
                  description: "Hosted three national level events with participation from different student chapters."
                },
                {
                  icon: <BookOpen className="text-bright-orange" size={24} />,
                  title: "Skill Development",
                  description: "Active support for skill development and practical application of theoretical knowledge."
                },
                {
                  icon: <Users className="text-bright-orange" size={24} />,
                  title: "Leadership",
                  description: "Equipping members with leadership, teamwork and communication skills."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={cardHover}
                  className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <motion.div 
                    className="bg-bright-orange/10 p-3 rounded-lg w-fit mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-dark-blue-purple mb-3">{feature.title}</h3>
                  <p className="text-dark-blue-purple leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-16 text-dark-blue-purple">Our History</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-medium-blue"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    year: "2021",
                    title: "Establishment",
                    description: "Establishment of AUISC with a vision to promote engineering education and innovation among students."
                  },
                  {
                    year: "2023",
                    title: "AUNSF 1.0",
                    description: "Successfully organized AUNSF 1.0, bringing together students from various institutions for knowledge sharing and networking."
                  },
                  {
                    year: "2024",
                    title: "AUNSF 2.0",
                    description: "Expanded our reach with AUNSF 2.0, introducing new initiatives and programs for student development."
                  },
                  {
                    year: "2025",
                    title: "AUNSF 3.0",
                    description: "Preparing for AUNSF 3.0, aiming to create an even more impactful platform for engineering students."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={cardHover}
                    className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
                      <motion.div 
                        className="bg-light-blue-purple rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div 
                          className="flex items-center gap-4 mb-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div 
                            className="bg-bright-orange/10 p-3 rounded-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-bright-orange font-bold">{item.year}</span>
                          </motion.div>
                          <h3 className="text-xl font-bold text-dark-blue-purple">{item.title}</h3>
                        </motion.div>
                        <p className="text-dark-blue-purple leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bright-orange rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anurag University Section */}
      <section className="py-20 bg-light-blue-purple">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/AU.png" 
                    alt="Anurag University" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-bright-orange/10 p-3 rounded-lg">
                      <Award className="text-bright-orange" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Established</p>
                      <p className="text-xl font-bold text-dark-blue-purple">Decades of Excellence</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-dark-blue-purple">About Anurag University</h2>
                <motion.p 
                  className="text-dark-blue-purple mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Anurag University, nestled in the vibrant city of Hyderabad, is a distinguished educational institution renowned for its commitment to academic excellence and holistic development. With a rich heritage spanning over decades, the university stands as a beacon of knowledge and innovation.
                </motion.p>
                <motion.p 
                  className="text-dark-blue-purple mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Through a comprehensive range of undergraduate and postgraduate programs, Anurag University equips its graduates with the skills and knowledge required to thrive in today's rapidly evolving professional landscape.
                </motion.p>
                <motion.div 
                  className="flex items-center gap-2 text-bright-orange font-semibold cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="https://www.anurag.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-orange-yellow transition-colors"
                  >
                    <span>Inspiring Tomorrow</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 