import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import AUISC_Logo from "../assets/AUISC_Logo.png"; // adjust the path if needed
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

// Countdown utility
function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  "/pics_png/GALLERY1.webp",
  "/pics_png/GALLERY2.webp",
  "/pics_png/GALLERY5.webp",
  "/pics_png/GALLERY6.webp",
  "/pics_png/GALLERY8.webp",
  
];

const faqs = [
  {
    q: "What is AUISC?",
    a: "AUISC stands for Anurag University IUCEE Student Chapter, a club dedicated to fostering innovation, learning, and leadership among students.",
  },
  {
    q: "How can I join AUISC events?",
    a: "You can register for our events through the 'Register Now' button or by following our social media for updates.",
  },
  {
    q: "Who can participate in AUNSF 3.0?",
    a: "AUNSF 3.0 is open to students from all colleges who are passionate about innovation and technology.",
  },
  {
    q: "Where can I see photos from past events?",
    a: "Check out our gallery section above for highlights from our previous events!",
  },
];

const Home = () => {
  const parallaxRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(new Date("2025-07-11T00:00:00")));
  const [openFaqs, setOpenFaqs] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallax-logo", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, parallaxRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date("2025-07-11T00:00:00")));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Gallery layout: first image large, rest in grid
  const mainImage = galleryImages[0];
  const sideImages = galleryImages.slice(1, 5);
  const bottomImages = galleryImages.slice(5);

  // Lightbox open handler
  const openLightbox = (img) => {
    setLightboxImg(img);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImg(null);
  };

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => 
      prev.includes(idx) 
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <div className="w-full overflow-hidden min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-white/30 backdrop-blur-sm"
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

      {/* AUNSF 3.0 Banner with Centered Title, Countdown, and Register Button */}
      <section className="py-10 bg-blue-600 text-white flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center">AUNSF 3.0</h2>
          <span className="text-base font-semibold mt-2 mb-6 text-center w-full" style={{color:'#fff', letterSpacing:'2px'}}>Begins in</span>
          <div className="flex flex-col md:flex-row w-full max-w-3xl items-center justify-between gap-6 md:gap-8">
            {/* Countdown */}
            <div className="flex-1 flex flex-col items-center md:items-start w-full">
              <div className="flex gap-2 md:gap-3">
                <div className="bg-black rounded-xl flex flex-col items-center justify-center px-3 py-2 min-w-[48px]">
                  <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days}</span>
                  <span className="uppercase text-white text-xs mt-1 tracking-widest">Days</span>
                </div>
                <div className="bg-black rounded-xl flex flex-col items-center justify-center px-3 py-2 min-w-[48px]">
                  <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours}</span>
                  <span className="uppercase text-white text-xs mt-1 tracking-widest">Hours</span>
                </div>
                <div className="bg-black rounded-xl flex flex-col items-center justify-center px-3 py-2 min-w-[48px]">
                  <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes}</span>
                  <span className="uppercase text-white text-xs mt-1 tracking-widest">Minutes</span>
                </div>
                <div className="bg-black rounded-xl flex flex-col items-center justify-center px-3 py-2 min-w-[48px]">
                  <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds}</span>
                  <span className="uppercase text-white text-xs mt-1 tracking-widest">Seconds</span>
                </div>
              </div>
            </div>
            {/* Register Now Button */}
            <div className="flex-1 flex justify-center md:justify-end w-full mt-6 md:mt-0">
              <a
                href="#register"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow text-base"
              >
                Register Now
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Fostering creativity and innovative thinking among students",
              },
              {
                title: "Learning",
                description:
                  "Providing opportunities for hands-on learning and skill development",
              },
              {
                title: "Community",
                description:
                  "Building a strong network of future engineering leaders",
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

      {/* Gallery Section - Modern Collage Style */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main image */}
            <div className="md:row-span-2 md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(mainImage)}>
              <img
                src={mainImage}
                alt="Gallery Main"
                className="w-full h-80 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition">View Image</span>
              </div>
            </div>
            {/* Side images */}
            <div className="flex flex-col gap-4">
              {sideImages.map((src, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg h-36 cursor-pointer" onClick={() => openLightbox(src)}>
                  <img
                    src={src}
                    alt={`Gallery ${idx + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                    <span className="text-white text-base font-semibold opacity-0 group-hover:opacity-100 transition">View Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom images grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {bottomImages.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-lg group h-32 cursor-pointer" onClick={() => openLightbox(src)}>
                <img
                  src={src}
                  alt={`Gallery ${idx + 6}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                  <span className="text-white text-base font-semibold opacity-0 group-hover:opacity-100 transition">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeLightbox}>
            <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200 z-10"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <X size={28} className="text-black" />
              </button>
              <img
                src={lightboxImg}
                alt="Gallery Large"
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg bg-white"
              />
            </div>
          </div>
        )}
      </section>

      {/* FAQ Section - Accordion Style */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            {/* Title Section - Left side on desktop */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/3 mb-8 md:mb-0"
            >
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 md:sticky md:top-24">
                Frequently Asked Questions
              </h2>
            </motion.div>

            {/* Questions Section - Right side on desktop */}
            <div className="md:w-2/3 space-y-3">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaqs.includes(idx)}
                  >
                    <span className="text-base md:text-lg text-gray-800">{faq.q}</span>
                    <ChevronDown 
                      className={`ml-2 transition-transform duration-300 ${openFaqs.includes(idx) ? 'rotate-180' : ''}`} 
                      size={24} 
                      color="#4B5563" 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqs.includes(idx) && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="px-4 pb-4 text-gray-600 text-sm md:text-base">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
