import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
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
  "/events/aunsf_2/img2.JPG",
];

const faqs = [
  {
    q: "What is AUISC?",
    a: "AUISC stands for Anurag University IUCEE Student Chapter, a club dedicated to fostering innovation, learning and leadership among students.",
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
    a: "You can check out the Gallery section above to explore highlights from our previous events!",
  },
  {
    q: "How to join our club?",
    a: "Join our club by filling out the application form when it's released! The form is open only once a year and only second-year students are eligible to apply. Stay connected with us on our social media platforms for updates.",
  },
];

const Home = () => {
  const parallaxRef = useRef(null);
  // const [timeLeft, setTimeLeft] = useState(getTimeLeft(new Date("2025-07-11T00:00:00")));
  const [openFaqs, setOpenFaqs] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const textToAnimate = useMemo(() => "Welcome to AUISC".split(""), []);
  const controls = useAnimation(); // Initialize useAnimation

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Step 1: Type out the text (staggered reveal)
        await controls.start("visible");

        // Step 2: Keep it visible for a moment
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Increased visible duration to 3 seconds

        // Step 3: Vanish the text (staggered hide)
        await controls.start("hidden"); // Use hidden variant to vanish

        // Step 4: Short delay before repeating
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Increased delay before next typing to 1.5 seconds
      }
    };
    sequence(); // Start the animation sequence
  }, [controls]); // Depend on controls

  // Variants for the container (h1)
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.08, // Slightly increased stagger for smoother appearance
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.04, // Slightly increased stagger for smoother disappearance
        staggerDirection: -1, // Disappear from right to left
      },
    },
  };

  // Variants for individual characters
  const charVariants = {
    hidden: { opacity: 0, y: 10, transition: { duration: 0.08, ease: "easeOut" } }, // Adjusted duration for hidden
    visible: { opacity: 1, y: 0, transition: { duration: 0.08, ease: "easeOut" } }, // Adjusted duration for visible
  };

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

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(getTimeLeft(new Date("2025-07-11T00:00:00")));
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

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
    <div className="w-full overflow-hidden min-h-screen bg-light-blue-purple">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-b from-medium-blue/20 to-dark-blue-purple/30 backdrop-blur-sm"
        >
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-dark-blue-purple mb-6 flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {textToAnimate.map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-dark-blue-purple mb-8"
          >
            Anurag University IUCEE Student Chapter
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
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
                className="p-6 bg-light-blue-purple rounded-lg shadow-lg text-dark-blue-purple"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-dark-blue-purple">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Modern Collage Style */}
      <section className="py-12 bg-light-blue-purple">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8 text-dark-blue-purple"
          >
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(img)}
              >
                <motion.img
                  src={img}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-dark-blue-purple/80 via-dark-blue-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <motion.span 
                      className="text-white text-lg font-semibold block"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      View Image
                    </motion.span>
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500"
                  whileHover={{ rotate: 90 }}
                >
                  <ArrowRight className="text-dark-blue-purple" size={20} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-blue-purple/90 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                src={lightboxImg} 
                alt="Full size image" 
                className="max-w-full max-h-[90vh] object-contain"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-dark-blue-purple/50 rounded-full p-3 hover:bg-dark-blue-purple/70 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-dark-blue-purple">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-light-blue-purple rounded-lg shadow p-6 cursor-pointer" onClick={() => toggleFaq(idx)}>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-dark-blue-purple">{faq.q}</h3>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: openFaqs.includes(idx) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-bright-orange" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openFaqs.includes(idx) && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-dark-blue-purple overflow-hidden"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
