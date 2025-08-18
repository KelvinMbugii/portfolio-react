import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React.js', level: 95, icon: '⚛️' },
    { name: 'Node.js', level: 88, icon: '🟢' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'Next.js', level: 92, icon: '▲' },
    { name: 'Tailwind CSS', level: 95, icon: '💨' },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
    'Express.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB',
     'Git', 'CI/CD'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
              that I use to build exceptional digital experiences.
            </p>
          </motion.div>

          {/* Main Skills with Progress Bars */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {skill.name}
                      </h3>
                      <span className="ml-auto text-sm font-medium text-slate-600">
                        {skill.level}%
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    >
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Tags */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Technologies I Work With
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;