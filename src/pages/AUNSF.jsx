
import { motion } from 'framer-motion';

const Aunsf = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const galleryImages = {
    "1.0": [
      "/events/aunsf/aunsf_1.0/img1 (1).png",
      "/events/aunsf/aunsf_1.0/img1 (2).png",
      "/events/aunsf/aunsf_1.0/img1 (3).png",
      "/events/aunsf/aunsf_1.0/img1 (4).png",
      "/events/aunsf/aunsf_1.0/img1 (5).png",
      "/events/aunsf/aunsf_1.0/img1 (6).png",
      "/events/aunsf/aunsf_1.0/img1 (7).png",
    ],
    "2.0": [
      "/events/aunsf/aunsf_2.0/img1.JPG",
      "/events/aunsf/aunsf_2.0/img2.JPG",
      "/events/aunsf/aunsf_2.0/img3.JPG",
      "/events/aunsf/aunsf_2.0/img4.JPG",
    ],
    "3.0": [
      "/events/aunsf/aunsf_3.0/img1.JPG",
      "/events/aunsf/aunsf_3.0/img2.jpg",
      "/events/aunsf/aunsf_3.0/img3.jpg",
      "/events/aunsf/aunsf_3.0/img4.jpeg",
      "/events/aunsf/aunsf_3.0/img5.jpeg",
      "/events/aunsf/aunsf_3.0/img6.jpg",
      "/events/aunsf/aunsf_3.0/img7.JPG",
    ],
  };

  return (
    <div className="min-h-screen bg-light-blue-purple">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative pt-32 pb-20 bg-dark-blue-purple text-white"
      >
        <div className="absolute inset-0 bg-[url('/pics_png/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Anurag University National Student Forum (AUNSF)</h1>
            <p className="text-light-blue-purple text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A transformative student-led initiative fostering innovation, leadership, and sustainable thinking.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* AUNSF 1.0 Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-dark-blue-purple mb-4">🌟 AUNSF 1.0 - Innovate to Transform</h2>
            <div className="prose max-w-none text-dark-blue-purple leading-relaxed">
              <p>The Anurag University National Student Forum AUNSF 1.0 was the inaugural edition of a transformative student led initiative hosted at Anurag University Hyderabad in June 2023. The forum was organized by the Anurag University IUCEE Student Chapter AUISC in collaboration with IUCEE Foundation with the vision of nurturing innovation leadership and sustainable thinking among young minds across India.</p>
              <p>AUNSF 1.0 brought together 117 students from 10 colleges representing multiple states creating a diverse and energetic platform for discussion collaboration and solution building. The forum focused on empowering students to address critical global challenges through structured ideation mentorship and teamwork.</p>
              <h3 className="text-2xl font-bold text-dark-blue-purple mt-8 mb-4">💡 Theme - Innovate to Transform</h3>
              <p>The theme of AUNSF 1.0 was Innovate to Transform. The objective was to inspire students to move beyond conventional academic learning and develop practical innovative solutions for real world challenges.</p>
              <p>The forum introduced participants to the United Nations Sustainable Development Goals and encouraged them to work on projects aligned with Goal 6 Clean Water and Sanitation, Goal 7 Affordable and Clean Energy, and Goal 13 Climate Action.</p>
              <h3 className="text-2xl font-bold text-dark-blue-purple mt-8 mb-4">📅 Event Highlights</h3>
              <p><b>Day 1:</b> The forum commenced with a formal inaugural ceremony attended by distinguished academic leaders, mentors, and sustainability experts, including Sampada Pachaury Mam, Director of the IUCEE Foundation.</p>
              <p><b>Day 2:</b> The second day was dedicated to engaging workshops and mentor-guided interactive sessions, where students refined their problem statements and developed feasible solutions.</p>
              <p><b>Day 3:</b> The final day focused on project presentations and experiential learning, with a field visit to Mission Bhagiratha and the Kondapochamma reservoir.</p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue-purple mb-6">Image Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages["1.0"].map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img src={src} alt={`AUNSF 1.0 - Image ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AUNSF 2.0 Section */}
      <section className="py-20 bg-light-blue-purple">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-dark-blue-purple mb-4">🌍 AUNSF 2.0 - Inspire Change: Innovate Globally</h2>
            <div className="prose max-w-none text-dark-blue-purple leading-relaxed">
              <p>AUNSF 2.0, held from 18th to 20th June 2024, brought together over 205 students from 20+ colleges to innovate across Finance, Product Design, and Lifestyle & Sustainability. The event was graced by Sampada Pachaury Mam, Director of the IUCEE Foundation.</p>
              <h3 className="text-2xl font-bold text-dark-blue-purple mt-8 mb-4">🎯 Theme - Inspire Change: Innovate Globally</h3>
              <p>The theme reflected the spirit of the forum - motivating students to step beyond conventional thinking and develop innovative solutions for global challenges. It emphasized creativity, collaboration and the power of youth-driven transformation.</p>
              <h3 className="text-2xl font-bold text-dark-blue-purple mt-8 mb-4">✨ Event Highlights</h3>
              <p><b>Day 1:</b> The forum kicked off with an inspiring inaugural ceremony and keynote speeches, followed by an energetic Zumba session that fostered a sense of community.</p>
              <p><b>Day 2:</b> A 5 km mini-cyclothon promoted sustainable living, followed by focused workshops where students collaborated on innovative solutions in their respective sectors.</p>
              <p><b>Day 3:</b> The final day saw interdisciplinary teams presenting their projects, showcasing their creativity and problem-solving skills to a panel of experts.</p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue-purple mb-6">Image Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {galleryImages["2.0"].map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img src={src} alt={`AUNSF 2.0 - Image ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AUNSF 3.0 Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-dark-blue-purple mb-4">🌍 AUNSF 3.0 - Designing to Solve, Building to Sustain</h2>
            <div className="prose max-w-none text-dark-blue-purple leading-relaxed">
              <p>AUNSF 3.0, held from July 11–13, 2025, brought together 280+ students from 20+ colleges to tackle challenges in AERONOX (Air), IGNOVA (Fire), and Public Administration. The theme focused on creating lasting solutions.</p>
              <h3 className="text-2xl font-bold text-dark-blue-purple mt-8 mb-4">🎯 Theme - Designing to Solve, Building to Sustain</h3>
              <p>This year’s theme encouraged students to think differently, not just to solve problems, but to create solutions that last. Participants worked across three dynamic domains: AERONOX (Air), IGNOVA (Fire), and Public Administration.</p>
              <h3 className="text-2xl font-bold text-dark-blue-purple mt-8 mb-4">📅 Event Highlights</h3>
              <p>The summit featured an inspiring inaugural ceremony, interactive mentor-led domain sessions, a 3 KM Sustainability Marathon, an energetic AEROBA session (Aerobics + Garba), and a vibrant Cultural Night.</p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue-purple mb-6">Image Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages["3.0"].map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img src={src} alt={`AUNSF 3.0 - Image ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Aunsf;
