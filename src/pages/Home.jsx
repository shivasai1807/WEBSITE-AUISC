import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import AUISC_Logo from '../assets/AUISC_Logo.png'; // adjust the path if needed
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.parallax-logo', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, parallaxRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"
        >
          {/* <div className="parallax-logo absolute inset-0 flex items-center justify-center">
            <img
              src={AUISC_Logo}
              alt="AUISC Logo"
              className="w-64 h-64 object-contain opacity-20"
            />
          </div> */}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Welcome to AUISC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Anurag University IUCEE Student Chapter
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <a
              href="/events"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Events
              <ArrowRight className="ml-2" size={20} />
            </a> */}
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
>
                   Explore Events
                    <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AUNSF 3.0 Banner */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4">AUNSF 3.0</h2>
            <p className="text-xl mb-8">
              Join us for the third edition of Anurag University National Student
              Forum. Experience innovation, creativity, and excellence.
            </p>
            {/* <a
              href="/events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              "Sub_Domian_Link"
              <ArrowRight className="ml-2" size={20} />
            </a> */}
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
>
                   Explore Event
                    <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  'Fostering creativity and innovative thinking among students',
              },
              {
                title: 'Learning',
                description:
                  'Providing opportunities for hands-on learning and skill development',
              },
              {
                title: 'Community',
                description:
                  'Building a strong network of future engineering leaders',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 