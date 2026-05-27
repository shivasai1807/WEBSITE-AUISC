import { motion } from "framer-motion";

const Aunsf4 = () => {
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
              (AUNSF 4.0)
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

      {/* COMING SOON SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-[36px] p-10 md:p-16 shadow-2xl border border-blue-100 text-center"
          >

            {/* Floating Icon */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="text-7xl mb-8"
            >
              🚀
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#0E3B91] mb-8"
            >
              AUNSF 4.0 is on the way!
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 leading-10 max-w-4xl mx-auto"
            >
              Stay tuned for the next edition of innovation,
              sustainability, leadership, and groundbreaking ideas.
              AUNSF 4.0 will bring together brilliant minds,
              impactful discussions, and transformative experiences
              bigger than ever before.
            </motion.p>

            {/* Feature Card */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-14 bg-gradient-to-r from-[#0E3B91] to-[#1247B8] text-white rounded-3xl p-10 shadow-2xl"
            >

              <motion.h3
                animate={{
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-3xl md:text-4xl font-black mb-5"
              >
                ✨ Something Amazing is Coming
              </motion.h3>

              <p className="text-blue-100 text-lg leading-9 max-w-3xl mx-auto">
                Get ready for exciting competitions,
                networking opportunities, innovation challenges,
                inspiring speakers, collaborative workshops,
                and unforgettable experiences at AUNSF 4.0.
              </p>

            </motion.div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Aunsf4;