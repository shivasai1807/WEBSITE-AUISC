import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageNav from "../components/aunsf4/PageNav";
import SectionWrapper from "../components/aunsf4/SectionWrapper";
import SectionHeading from "../components/aunsf4/SectionHeading";
import PersonCard from "../components/aunsf4/PersonCard";
import PersonGrid from "../components/aunsf4/PersonGrid";
import ItineraryTimeline from "../components/aunsf4/ItineraryTimeline";
import DomainCard from "../components/aunsf4/DomainCard";

import {
  pageNavLinks,
  eventInfo,
  itinerary,
  domains,
  chiefGuests,
  facultyCoordinators,
  advisoryMembers,
  projectManagers,
  leads,
} from "../data/aunsf4Data";

const Aunsf4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 sm:pt-28 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-br from-[#0E3B91] via-[#1247B8] to-[#0A2D6F] text-white"
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
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-tight drop-shadow-xl max-w-4xl mx-auto tracking-tight"
          >
            <span className="block">
              Anurag University National Student Forum
            </span>

            <span className="block text-blue-200 mt-2 sm:mt-3">
              (AUNSF 4.0)
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-blue-100 font-light leading-relaxed max-w-2xl mx-auto px-2"
          >
            {eventInfo.tagline}
          </motion.p>

        </div>
      </motion.div>

      {/* SECTION NAVIGATION */}
      <PageNav links={pageNavLinks} />

      {/* ITINERARY */}
      <SectionWrapper id="itinerary" ariaLabelledBy="itinerary-heading">
        <SectionHeading
          id="itinerary-heading"
          subtitle="A day-by-day agenda of everything happening across the three-day forum."
        >
          Event Itinerary
        </SectionHeading>
        <ItineraryTimeline days={itinerary} />
      </SectionWrapper>

      {/* DOMAINS */}
      <SectionWrapper id="domains" ariaLabelledBy="domains-heading" alt>
        <SectionHeading
          id="domains-heading"
          subtitle="Three domains for participants to explore, guided by dedicated mentors."
        >
          Domains
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {domains.map((domain, index) => (
            <DomainCard key={domain.id} domain={domain} index={index} />
          ))}
        </div>
      </SectionWrapper>

      {/* CHIEF GUESTS */}
      <SectionWrapper id="chief-guests" ariaLabelledBy="chief-guests-heading">
        <SectionHeading
          id="chief-guests-heading"
          subtitle="Honouring the leaders gracing AUNSF 4.0 with their presence."
        >
          Chief Guests
        </SectionHeading>
        <PersonGrid people={chiefGuests} variant="guest" columns={3} />
      </SectionWrapper>

      {/* FACULTY COORDINATORS & ADVISORY MEMBERS */}
      <SectionWrapper id="faculty-advisory" ariaLabelledBy="faculty-advisory-heading" alt>
        <SectionHeading
          id="faculty-advisory-heading"
          subtitle="The faculty guidance and student advisory driving AUNSF 4.0 forward."
        >
          Faculty Coordinators &amp; Advisory Members
        </SectionHeading>

        <div className="mb-10 sm:mb-14">
          <h3 className="text-base sm:text-lg font-bold text-[#0E3B91] mb-5 sm:mb-6 text-center">Faculty Coordinator</h3>
          <div className="max-w-[220px] mx-auto">
            {facultyCoordinators.map((person, index) => (
              <PersonCard key={person.id} person={person} variant="faculty" index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#0E3B91] mb-5 sm:mb-6 text-center">Advisory Members</h3>
          <PersonGrid people={advisoryMembers} variant="advisory" columns={4} />
        </div>
      </SectionWrapper>

      {/* PROJECT MANAGERS */}
      <SectionWrapper id="project-managers" ariaLabelledBy="project-managers-heading">
        <SectionHeading id="project-managers-heading" subtitle="Steering AUNSF 4.0's planning and execution end to end.">
          Project Managers
        </SectionHeading>
        <PersonGrid people={projectManagers} variant="pm" columns={2} />
      </SectionWrapper>

      {/* LEADS */}
      <SectionWrapper id="leads" ariaLabelledBy="leads-heading" alt>
        <SectionHeading id="leads-heading" subtitle="The team leads powering every vertical of AUNSF 4.0.">
          Leads
        </SectionHeading>
        <PersonGrid people={leads} variant="lead" columns={4} />
      </SectionWrapper>

      {/* REGISTER CTA SECTION */}
      <section className="py-14 sm:py-24">
        <div className="container mx-auto px-3 sm:px-4 max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 md:p-16 shadow-2xl border border-blue-100 text-center relative overflow-hidden"
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
              className="text-5xl sm:text-7xl mb-6 sm:mb-8"
            >
              🚀
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0E3B91] mb-5 sm:mb-8 tracking-tight"
            >
              READY  SET  GO!!
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              Join the next edition of innovation, sustainability, leadership
              and groundbreaking ideas. AUNSF 4.0 brings together brilliant
              minds, impactful discussions and transformative experiences
              bigger than ever before.
            </motion.p>

            {/* Register AUNSF 4.0 CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-10 flex justify-center"
            >
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#FF5722] to-[#FFB74D] text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Register AUNSF 4.0
              </Link>
            </motion.div>

            {/* Feature Card */}
            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-10 sm:mt-14 bg-gradient-to-r from-[#0E3B91] to-[#1247B8] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl"
            >

              <motion.h3
                animate={{
                  opacity: [1, 0.85, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-5 tracking-tight"
              >
                Its Happening - AUNSF 4.0
              </motion.h3>

              <p className="text-blue-100 text-sm sm:text-lg leading-relaxed sm:leading-9 max-w-3xl mx-auto">
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
