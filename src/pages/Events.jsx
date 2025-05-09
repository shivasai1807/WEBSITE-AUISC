import { motion } from 'framer-motion';
import EventCarousel from '../components/EventCarousel';
import { events } from '../data/events';

const Events = () => {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Our Events
        </motion.h1>
        
        <div className="space-y-20">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
              
              <EventCarousel images={event.images} title={event.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events; 