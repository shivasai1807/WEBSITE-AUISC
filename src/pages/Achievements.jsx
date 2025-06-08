import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Users, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <Trophy className="text-bright-orange" size={24} />,
      date: "2024",
      title: "National Recognition",
      description: "AUISC received national recognition for outstanding contribution to engineering education and innovation at the IUCEE Annual Conference."
    },
    {
      id: 2,
      icon: <Award className="text-bright-orange" size={24} />,
      date: "2023",
      title: "Best Student Chapter Award",
      description: "Recognized as the Best Student Chapter for organizing impactful events and workshops that benefited over 1000+ students across the country."
    },
    {
      id: 3,
      icon: <Star className="text-bright-orange" size={24} />,
      date: "2023",
      title: "Innovation Excellence",
      description: "Our team won the Innovation Excellence Award for developing sustainable solutions in the Smart India Hackathon."
    },
    {
      id: 4,
      icon: <Target className="text-bright-orange" size={24} />,
      date: "2022",
      title: "Research Publication",
      description: "Published research papers in international conferences on sustainable engineering practices and innovative teaching methodologies."
    },
    {
      id: 5,
      icon: <Users className="text-bright-orange" size={24} />,
      date: "2022",
      title: "Community Impact",
      description: "Successfully organized AUNSF 2.0, bringing together 500+ students from 50+ colleges for knowledge sharing and networking."
    },
    {
      id: 6,
      icon: <Lightbulb className="text-bright-orange" size={24} />,
      date: "2021",
      title: "Chapter Establishment",
      description: "Successfully established AUISC with a vision to promote engineering education and innovation among students."
    }
  ];

  return (
    <div className="min-h-screen bg-light-blue-purple">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-dark-blue-purple">
        <div className="absolute inset-0 bg-[url('/pics_png/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Our Achievements</h1>
            <p className="text-light-blue-purple text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Celebrating our milestones and successes in engineering education, innovation, and leadership.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-medium-blue"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-bright-orange/10 p-3 rounded-lg">
                          {achievement.icon}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-dark-blue-purple/70">{achievement.date}</span>
                          <h3 className="text-xl font-bold text-dark-blue-purple">{achievement.title}</h3>
                        </div>
                      </div>
                      <p className="text-dark-blue-purple leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bright-orange rounded-full"></div>
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