import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Layout from './components/layout/Layout';
import Preloader from './components/common/Preloader';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const AUNSF = lazy(() => import('./pages/AUNSF'));
const EPICS = lazy(() => import('./pages/EPICS'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const Aunsf1 = lazy(() => import('./pages/Aunsf1'));
const Aunsf2 = lazy(() => import('./pages/Aunsf2'));
const Aunsf3 = lazy(() => import('./pages/Aunsf3'));
const Aunsf4 = lazy(() => import('./pages/Aunsf4'));
const Register = lazy(() => import('./pages/Register'));

function AppContent() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show welcome modal on home page refresh
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowWelcomeModal(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aunsf-1" element={<Aunsf1 />} />
          <Route path="/aunsf-2" element={<Aunsf2 />} />
          <Route path="/aunsf-3" element={<Aunsf3 />} />
          <Route path="/aunsf-4" element={<Aunsf4 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/epics" element={<EPICS />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>

      {/* Welcome Modal (commented out) */}
      {false && (
        <AnimatePresence>
          {showWelcomeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-dark-blue-purple/80 backdrop-blur-sm"
                onClick={() => setShowWelcomeModal(false)}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-[90%] max-w-[331px] max-h-[468px] md:max-w-[496px] md:max-h-[702px] rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowWelcomeModal(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-dark-blue-purple hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <X size={24} strokeWidth={2.5} />
                </button>

                {/* Banner Image */}
                <div className="w-full h-full relative">
                  <Link
                    to="/register"
                    className="block cursor-pointer"
                    onClick={() => setShowWelcomeModal(false)}
                  >
                    <img
                      src="/poster.webp"
                      alt="Welcome to AUISC"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-dark-blue-purple/70 py-2 text-center">
                      <span className="text-white text-lg font-semibold hover:text-gray-200 transition-colors duration-300">
                        Register AUNSF 4.0
                      </span>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <AppContent />
      </Suspense>
    </Router>
  );
}

export default App;
