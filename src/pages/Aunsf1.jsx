import { motion } from "framer-motion";

const Aunsf1 = () => {
  const galleryImages = [
    "/events/aunsf/aunsf_1.0/img1 (1).png",
    "/events/aunsf/aunsf_1.0/img1 (2).png",
    "/events/aunsf/aunsf_1.0/img1 (3).png",
    "/events/aunsf/aunsf_1.0/img1 (4).png",
    "/events/aunsf/aunsf_1.0/img1 (5).png",
    "/events/aunsf/aunsf_1.0/img1 (6).png",
    "/events/aunsf/aunsf_1.0/img1 (7).png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#0E3B91] via-[#1247B8] to-[#0A2D6F] text-white"
      >

        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-300/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 text-center relative z-10">

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl md:text-3xl lg:text-4xl font-black leading-tight drop-shadow-xl"
          >
            <span className="block">
              Anurag University National Student Forum
            </span>

            <span className="block text-blue-200 mt-3">
              (AUNSF)
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-xs md:text-base text-blue-100 font-light leading-6 max-w-2xl mx-auto"
          >
            A transformative student-led initiative fostering
            innovation, leadership, collaboration, and
            sustainable thinking among future changemakers.
          </motion.p>

        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-[36px] p-8 md:p-12 shadow-2xl border border-blue-100"
          >

            {/* ABOUT */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#0E3B91] mb-8"
            >
              About AUNSF 1.0
            </motion.h2>

            <div className="space-y-6 text-gray-700 leading-9 text-lg">

              <p>
                The Anurag University National Student Forum
                (AUNSF 1.0) was the inaugural edition of a
                transformative student-led initiative hosted at
                Anurag University Hyderabad in June 2023.
              </p>

              <p>
                The forum was organized by the Anurag University
                IUCEE Student Chapter (AUISC) in collaboration
                with the IUCEE Foundation with the vision of
                nurturing innovation, leadership, and sustainable
                thinking among young minds across India.
              </p>

              <p>
                AUNSF 1.0 brought together 117 students from
                10 colleges representing multiple states,
                creating a diverse and energetic platform
                for discussion, collaboration, and solution building.
              </p>

              <p>
                The forum focused on empowering students
                to address critical global challenges through
                structured ideation, mentorship, and teamwork.
              </p>

            </div>

            {/* THEME */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.01,
              }}
              className="mt-12 bg-gradient-to-r from-[#0E3B91] to-[#1247B8] text-white rounded-3xl p-8 shadow-2xl"
            >

              <h3 className="text-3xl font-bold mb-5">
                💡 Theme - Innovate to Transform
              </h3>

              <p className="text-blue-100 leading-8 text-lg">
                The objective was to inspire students to move
                beyond conventional academic learning and develop
                practical innovative solutions for real-world challenges.
              </p>

              <p className="text-blue-100 leading-8 text-lg mt-5">
                Participants worked on projects aligned with
                UN Sustainable Development Goals including:
              </p>

              <ul className="mt-5 space-y-3 text-lg">
                <li>🌊 Goal 6 - Clean Water and Sanitation</li>
                <li>⚡ Goal 7 - Affordable and Clean Energy</li>
                <li>🌍 Goal 13 - Climate Action</li>
              </ul>

            </motion.div>

            {/* EVENT HIGHLIGHTS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-16"
            >

              <h3 className="text-4xl font-bold text-[#0E3B91] mb-10">
                📅 Event Highlights
              </h3>

              <div className="grid md:grid-cols-3 gap-8">

                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-2xl font-bold text-[#0E3B91] mb-4">
                    Day 1
                  </h4>

                  <p className="text-gray-700 leading-8">
                    The forum commenced with a formal inaugural
                    ceremony attended by distinguished academic
                    leaders, mentors, and sustainability experts.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-2xl font-bold text-[#0E3B91] mb-4">
                    Day 2
                  </h4>

                  <p className="text-gray-700 leading-8">
                    The second day focused on workshops and
                    mentor-guided interactive sessions where
                    students refined problem statements.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-2xl font-bold text-[#0E3B91] mb-4">
                    Day 3
                  </h4>

                  <p className="text-gray-700 leading-8">
               The final day focused on project presentations and experiential learning,
                with a field visit to Mission Bhagiratha and the Kondapochamma reservoir
                  </p>
                </motion.div>

              </div>
            </motion.div>

          </motion.div>

          {/* GALLERY */}
          <div className="mt-24">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center text-[#0E3B91] mb-14"
            >
              📸 Event Gallery
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -10,
                  }}
                  className="rounded-3xl overflow-hidden shadow-xl bg-blue-50 group cursor-pointer"
                >

                  <div className="overflow-hidden">

                    <motion.img
                      src={src}
                      alt={`AUNSF 1.0 ${index + 1}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-64 object-cover"
                    />

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Aunsf1;