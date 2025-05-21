import { motion } from 'framer-motion';
import AchievementCard from '../components/AchievementCard';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Our Achievements</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Celebrating our proudest moments and milestones in innovation, sustainability, and leadership.
          </p>
        </motion.div>

        {/* Card Grid - Responsive */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div> */}

        {/* Timeline Section - Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 sm:mt-20"
        >
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line - only show on md+ screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {/* Timeline items */}
            <div className="space-y-8 sm:space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center md:items-stretch ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-xl sm:text-2xl mr-2">{achievement.icon}</span>
                        <span className="text-xs sm:text-sm font-semibold text-blue-600">
                          {achievement.date}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{achievement.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot - only show on md+ screens */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements; 