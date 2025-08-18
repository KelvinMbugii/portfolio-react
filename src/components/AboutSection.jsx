import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';
import portfolioImage from '../assets/PortfolioImage.jpg';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Bacherol of Science Information Technology',
      company: 'Kirinyaga University',
      period: '2021 - 2026',
      description: 'Bachelor of Science Information Technology with focus on software engineering and algorithms.',
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: 'Software-Engineering',
      company: 'Power Learn Project',
      period: 'present',
      description: 'Undertook a Software Engineering course focused on full-stack development with MERN Stack',
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: 'Full-Stack Developer',
      company: 'Nelion-Designs',
      period: 'present',
      description: 'Built and maintained multiple client projects, specializing in modern JavaScript frameworks.',
      icon: <Briefcase className="h-6 w-6" />,
    },
    
  ];

  const achievements = [
    { icon: <Award className="h-8 w-8" />, title: '10+ Projects', description: 'Successfully delivered' },
    { icon: <Heart className="h-8 w-8" />, title: '100% Satisfaction', description: 'Client happiness rate' },
    { icon: <Briefcase className="h-8 w-8" />, title: '1+ Years', description: 'Professional experience' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer experienced in
              creating digital solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image and Description */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <motion.div
                  className="w-full max-w-md mx-auto bg-gradient-to-br from-cyan-500 to-orange-500 rounded-2xl p-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src= {portfolioImage}
                    alt="Kelvin M"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a strong foundation in both front-end and back-end technologies,
                I specialize in creating seamless, user-friendly applications that
                solve real-world problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in software development has been driven by curiosity and
                a passion for continuous learning. I thrive on challenges and enjoy
                collaborating with teams to bring innovative ideas to life.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-cyan-400 mb-2 flex justify-center">
                      {achievement.icon}
                    </div>
                    <div className="text-white font-bold text-lg">
                      {achievement.title}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {achievement.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Experience & Education
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-cyan-400 mt-1">{exp.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-xl font-semibold text-white">
                              {exp.title}
                            </h4>
                            <span className="text-orange-400 font-medium">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-cyan-300 font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-gray-300">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;