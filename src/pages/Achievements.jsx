import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Users, Lightbulb } from 'lucide-react';

const Achievements = () => {
  // const achievements = [
  //   {
  //     id: 1,
  //     icon: <Trophy className="text-bright-orange" size={24} />,
  //     date: "2024",
  //     title: "National Recognition",
  //     description: "AUISC received national recognition for outstanding contribution to engineering education and innovation at the IUCEE Annual Conference."
  //   },
  //   {
  //     id: 2,
  //     icon: <Award className="text-bright-orange" size={24} />,
  //     date: "2023",
  //     title: "Best Student Chapter Award",
  //     description: "Recognized as the Best Student Chapter for organizing impactful events and workshops that benefited over 1000+ students across the country."
  //   },
  //   {
  //     id: 3,
  //     icon: <Star className="text-bright-orange" size={24} />,
  //     date: "2023",
  //     title: "Innovation Excellence",
  //     description: "Our team won the Innovation Excellence Award for developing sustainable solutions in the Smart India Hackathon."
  //   },
  //   {
  //     id: 4,
  //     icon: <Target className="text-bright-orange" size={24} />,
  //     date: "2022",
  //     title: "Research Publication",
  //     description: "Published research papers in international conferences on sustainable engineering practices and innovative teaching methodologies."
  //   },
  //   {
  //     id: 5,
  //     icon: <Users className="text-bright-orange" size={24} />,
  //     date: "2022",
  //     title: "Community Impact",
  //     description: "Successfully organized AUNSF 2.0, bringing together 500+ students from 50+ colleges for knowledge sharing and networking."
  //   },
  //   {
  //     id: 6,
  //     icon: <Lightbulb className="text-bright-orange" size={24} />,
  //     date: "2021",
  //     title: "Chapter Establishment",
  //     description: "Successfully established AUISC with a vision to promote engineering education and innovation among students."
  //   }
  // ];
  const achievements = [
    {
      id: 1,
      icon: <Trophy className="text-bright-orange" size={24} />,
      date: "2024",
      title: "Interdisciplinary Bootcamp - Winners",
      description:
        "P. Deekshitha Reddy and K. Rekha were awarded winners for their original and impactful solution in transforming educational practices, showcasing strong problem-solving skills with a focus on inclusivity.",
      image: "/achievements/bootcamp_winners_1.jpg"
    },
    {
      id: 2,
      icon: <Award className="text-bright-orange" size={24} />,
      date: "2024",
      title: "Design Thinking Bootcamp - Runner-up",
      description:
        "B. Raaga Samanvita, Abhay Ramagiri, and Pranav Kothapalli secured runner-up for their innovative gap-finding approach to climate change, highlighting creativity and a deep understanding of environmental issues.",
      image: "/achievements/bootcamp_runnerup_1.jpg"
    },
    {
      id: 3,
      icon: <Star className="text-bright-orange" size={24} />,
      date: "2024",
      title: "Interdisciplinary Bootcamp - Runner-up",
      description:
        "D. Thanughna and Ayesha Shaik were recognized as runner-up for addressing critical healthcare issues through collaborative innovation, blending analytical thinking with domain expertise.",
      image: "/achievements/bootcamp_runnerup_2.jpg"
    },
    {
      id: 4,
      icon: <Users className="text-bright-orange" size={24} />,
      date: "2023",
      title: "Clash of Minds - National Debate Winners",
      description:
        "B. Raaga Samanvitha, Aishwarya Alechella, Sonal Gramopadhye, S. F. Cecilia, Pranav Kothapalli, and K. Nihal Kumar were felicitated at IASF 2024 for their exceptional performance in all three rounds of the national-level debate competition.",
      image: "/achievements/debate_winners.jpg"
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

      {/* Awards Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Awards & Recognition
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual Award */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-bright-orange/10 p-4 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bright-orange">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium text-dark-blue-purple/70">2023-24</span>
                  <h3 className="text-xl font-bold text-dark-blue-purple">Outstanding Student Leader</h3>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-bright-orange">P VENKATA NARSIMHA RAO</h4>
                <p className="text-dark-blue-purple leading-relaxed">
                  Recognized for exceptional leadership, initiative, and impactful contributions to student-led activities throughout the year.
                </p>
              </div>
            </motion.div>

            {/* Chapter Award 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-bright-orange/10 p-4 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bright-orange">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                    <path d="M4 22h16"/>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium text-dark-blue-purple/70">2024</span>
                  <h3 className="text-xl font-bold text-dark-blue-purple">Best Promising Chapter</h3>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-bright-orange">IASF 2024</h4>
                <p className="text-dark-blue-purple leading-relaxed">
                  Awarded at KLE Tech, Hubbali for the chapter's dedication, growing impact, and active student involvement.
                </p>
              </div>
            </motion.div>

            {/* Chapter Award 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-bright-orange/10 p-4 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bright-orange">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium text-dark-blue-purple/70">2025</span>
                  <h3 className="text-xl font-bold text-dark-blue-purple">Best Student Chapter</h3>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-bright-orange">IASF 2025</h4>
                <p className="text-dark-blue-purple leading-relaxed">
                  Received at VNR VJIET for outstanding contributions, leadership, and consistent excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            IASF 2024 Achievements
          </h2>
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
                  {/* Content (Text and Icon) */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-4 md:mb-0 order-2 md:order-1`}>
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
                  
                  {/* Image */}
                  <div className={`w-48 h-48 md:w-1/2 md:h-auto overflow-hidden flex-shrink-0 order-1 md:order-2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mb-4 md:mb-0`}>
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>

                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bright-orange rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Individual Achievements Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Individual Achievements
          </h2>
          
          <div className="space-y-12">
            {[
              {
                name: "PRANAV KOTHAPALLI",
                // role: "Technical Member",
                image: "/achievements/pranav.jpg",
                achievements: [
                  "Special Mention in Product Design category at AUNSF 2.0",
                  "Best Perspective in Paper 2 perspective at HITAM INNOFIESTA 2024",
                  "Participated in AUNSF 2.0 and HITAM INNOFIESTA 2024"
                ]
              },
              {
                name: "POLICE SREEJA",
                // role: "Technical Member",
                image: "/achievements/sreeja.jpg",
                achievements: [
                  "Completed 8-week 'Entrepreneur's Mindset' course from IUCEE",
                  "Special Mention in Product Design category at AUNSF 2.0",
                  "Best Perspective in Paper 2 - Perspective at HITAM INNOFIESTA 2024",
                  "Best Team Collaboration in InnovateX at HITAM INNOFIESTA 2024"
                ]
              },
              {
                name: "SUMAD",
                // role: "Technical Member",
                image: "/achievements/sumad.jpg",
                achievements: [
                  "Completed 8-week 'Design Thinking' course from IUCEE",
                  "Best Team Collaboration in InnovateX at HITAM INNOFIESTA 2024"
                ]
              },
              {
                name: "BODA ANJI REDDY",
                // role: "Technical Member",
                image: "/achievements/anji.jpg",
                achievements: [
                  "Best Perspective in Paper 2 Perspective at HITAM INNOFIESTA 2024",
                  "Best Team Collaboration in InnovateX at HITAM INNOFIESTA 2024"
                ]
              },
              {
                name: "G. GRESHMI RATNA",
                // role: "Technical Member", 
                image: "/achievements/greshmi.jpg",
                achievements: [
                  "Best Perspective in Paper 2 Perspective at HITAM INNOFIESTA 2024"
                ]
              },
              {
                name: "VAMSHI KRISHNA TADIVALASA",
                // role: "Technical Member",
                image: "/achievements/vamshi.jpg",
                achievements: [
                  "Best Perspective in Paper 2 Perspective at HITAM INNOFIESTA 2024"
                ]
              }
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center gap-8"
              >
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue-purple mb-2">{person.name}</h3>
                  <p className="text-bright-orange font-medium mb-4">{person.role}</p>
                  <ul className="space-y-2">
                    {person.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-bright-orange mt-1">•</span>
                        <span className="text-dark-blue-purple">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Image */}
                <div className="w-48 h-48 overflow-hidden flex-shrink-0 rounded-lg shadow-md">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements; 