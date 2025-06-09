import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Clock, Users, ArrowRight, CalendarClock, ChevronDown } from 'lucide-react';
import { events } from '../data/events';

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showUpcoming, setShowUpcoming] = useState(false);

  const ImageModal = ({ image, onClose }) => {
    return (
      <AnimatePresence>
        {image && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-dark-blue-purple/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[80%] h-[80vh]"
            >
              <div className="relative h-full bg-white rounded-lg shadow-xl overflow-hidden">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-dark-blue-purple/50 text-white hover:bg-dark-blue-purple/70 transition-colors z-10"
                >
                  <X size={24} />
                </button>
                <img
                  src={image.url}
                  alt={image.description}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-blue-purple/60 to-transparent p-6">
                  <p className="text-white text-lg">{image.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  const CustomEventCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="relative w-full max-w-2xl mx-auto group">
        <div className="relative h-[300px] overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setSelectedImage(images[currentIndex])}
            >
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].description}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue-purple/70 via-dark-blue-purple/0 to-dark-blue-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-medium">{images[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-dark-blue-purple p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-dark-blue-purple p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-bright-orange scale-125' : 'bg-orange-yellow hover:bg-orange-yellow'}
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const upcomingEvents = events.filter(event => event.isUpcoming);
  const pastEvents = events.filter(event => !event.isUpcoming);

  return (
    <div className="min-h-screen bg-light-blue-purple">
      {/* Hero Section */}
      <div className="relative pt-32 pb-12 bg-gradient-to-r from-medium-blue to-dark-blue-purple ">
        <div className="absolute inset-0 bg-[url('/pics_png/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">Our Events</h1>
            <p className="text-light-blue-purple text-xl max-w-2xl mx-auto leading-relaxed">
              Discover the exciting events and activities organized by AUISC to foster innovation and learning.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 mt-16 pb-20">
        {/* Upcoming Events Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-dark-blue-purple flex items-center gap-3 mb-8">
            <CalendarClock className="text-bright-orange" size={32} />
            Upcoming Events
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="grid gap-12">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-light-blue-purple rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold text-dark-blue-purple mb-4">{event.title}</h2>
                          <div className="flex flex-wrap gap-4 text-dark-blue-purple">
                            <div className="flex items-center gap-2 bg-orange-yellow px-3 py-1.5 rounded-full">
                              <Calendar size={18} className="text-dark-blue-purple" />
                              <span className="text-sm font-medium">{event.date}</span>
                            </div>
                            {event.isUpcoming ? null : (
                              <>
                                {event.location && (
                                  <div className="flex items-center gap-2 bg-orange-yellow px-3 py-1.5 rounded-full">
                                    <MapPin size={18} className="text-dark-blue-purple" />
                                    <span className="text-sm font-medium">{event.location}</span>
                                  </div>
                                )}
                                {event.time && (
                                  <div className="flex items-center gap-2 bg-orange-yellow px-3 py-1.5 rounded-full">
                                    <Clock size={18} className="text-dark-blue-purple" />
                                    <span className="text-sm font-medium">{event.time}</span>
                                  </div>
                                )}
                                {event.participants && (
                                  <div className="flex items-center gap-2 bg-orange-yellow px-3 py-1.5 rounded-full">
                                    <Users size={18} className="text-dark-blue-purple" />
                                    <span className="text-sm font-medium">{event.participants} Participants</span>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                        
                        <div className="prose prose-lg text-dark-blue-purple">
                          <p className="leading-relaxed">{event.description}</p>
                        </div>

                        {event.registrationLink && (
                          <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-bright-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-yellow transition-colors duration-300"
                          >
                            Register Now
                            <ArrowRight size={20} />
                          </a>
                        )}
                      </div>

                      <div className="relative">
                        <div className="relative w-full max-w-2xl mx-auto">
                          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-lg">
                            <a 
                              href="https://linktr.ee/aunsf" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block w-full h-full cursor-pointer"
                            >
                              <img
                                src="/poster.webp"
                                alt="AUNSF 3.0 Event Poster"
                                className="w-full h-full object-contain"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="max-w-md mx-auto">
                <CalendarClock size={48} className="text-bright-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-blue-purple mb-2">No Upcoming Events</h3>
                <p className="text-dark-blue-purple">
                  We're currently planning our next exciting events. Stay tuned for updates!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Past Events Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-dark-blue-purple flex items-center gap-3 mb-8">
            <Calendar className="text-bright-orange" size={32} />
            Past Events
          </h2>
          <div className="grid gap-12">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-light-blue-purple rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-dark-blue-purple mb-4">{event.title}</h2>
                        <div className="flex flex-wrap gap-4 text-dark-blue-purple">
                          <div className="flex items-center gap-2 bg-orange-yellow px-3 py-1.5 rounded-full">
                            <Calendar size={18} className="text-dark-blue-purple" />
                            <span className="text-sm font-medium">{event.date}</span>
                          </div>
                          {!event.isUpcoming && event.location && (
                            <div className="flex items-center gap-2 bg-orange-yellow px-3 py-1.5 rounded-full">
                              <MapPin size={18} className="text-dark-blue-purple" />
                              <span className="text-sm font-medium">{event.location}</span>
                            </div>
                          )}
                          {!event.isUpcoming && event.time && (
                            <div className="flex items-center gap-2 bg-orange-yellow px-3 py-1.5 rounded-full">
                              <Clock size={18} className="text-dark-blue-purple" />
                              <span className="text-sm font-medium">{event.time}</span>
                            </div>
                          )}
                          {!event.isUpcoming && event.participants && (
                            <div className="flex items-center gap-2 bg-orange-yellow px-3 py-1.5 rounded-full">
                              <Users size={18} className="text-dark-blue-purple" />
                              <span className="text-sm font-medium">{event.participants} Participants</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="prose prose-lg text-dark-blue-purple">
                        <p className="leading-relaxed">{event.description}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <CustomEventCarousel 
                        images={event.images} 
                        title={event.title}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal 
        image={selectedImage} 
        onClose={(() => setSelectedImage(null))} 
      />
    </div>
  );
};

export default Events;