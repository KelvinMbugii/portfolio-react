import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Smart-Farm Application',
      description: 'A full-stack SmartFarm Application that helps connect farmers with Agricultural Officers, provide a real time market update and weather updates',
      image: 'https://media.istockphoto.com/id/2222107046/photo/farmer-uses-a-tablet-to-monitor-smart-farm-technology-including-productivity-quality-drones.jpg?s=612x612&w=0&k=20&c=jWK17Fv8-LNTafMwY3yv1Au7WPF8S6PVyZOMskoOzGc=',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Socket.io', 'TailwindCss'],
      liveUrl: 'https://smart-farm-app.vercel.app/',
      githubUrl: 'https://github.com/KelvinMbugii/SmartFarm-APP',
      featured: true,
    },

    {
      id: 2,
      title: 'Agri-Clinic Hub',
      description: 'A responsive Agri-Clinic Hub application that connects farmers with agricultural experts, enabling real-time consultation, crop disease diagnosis,and smart farm management. The platform also sends automated SMS and WhatsApp notifications for advisory updates, and reminders',
      image: 'https://media.istockphoto.com/id/1463452333/photo/smart-farming-holding-young-plant-smart-farming-and-precision-agriculture-4-0-agriculture.jpg?s=612x612&w=0&k=20&c=0ZDWbEGUdURDlF7yZx6gM2EKiGPRbumuKnIG7vsrTTQ=',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Socket.io', 'TailwindCss', 'REST API'],
      liveUrl: 'https://agri-clinic-hub-roan.vercel.app/',
      githubUrl: 'https://github.com/KelvinMbugii/Agri-Clinic-Hub.git',
      featured: true,
    },
   
    {
      id: 2,
      title: 'Medi-care App',
      description: 'A responsive Medi-Care Application that helps patients book their appointments with doctors, helps send reminder notifacions to both doctors and patients using sms and short whatsapp messages',
      image: 'https://media.istockphoto.com/id/1355028593/photo/medicine-doctor-and-healthcare.jpg?s=612x612&w=0&k=20&c=E425WYFjbRAoD2rdhZ5Sb2fNKUfSZIc3gcjDKNkn_xg=',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Socket.io', 'TailwindCss'],
      liveUrl: 'https://medicare-theta-dusky.vercel.app/',
      githubUrl: 'https://github.com/KelvinMbugii/Medicare',
      featured: true,
    },
    // {
    //   id: 3,
    //   title: 'Task Management App',
    //   description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced filtering. Includes drag-and-drop functionality, deadline tracking, and progress visualization.',
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'Firebase', 'Material-UI', 'Redux', 'WebSocket'],
    //   liveUrl: 'https://example-taskmanager.com',
    //   githubUrl: 'https://github.com/username/task-manager',
    //   featured: false,
    // },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'An educational platform with course management, student progress tracking, interactive quizzes, and video streaming capabilities. Includes instructor dashboard and student portal.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS S3', 'WebRTC'],
      liveUrl: 'https://example-lms.com',
      githubUrl: 'https://github.com/username/learning-management',
      featured: false,
    },
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

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of my recent work, featuring full-stack applications,
              responsive designs, and innovative solutions to real-world problems.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-3 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        asChild
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              More Projects
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-5 flex flex-col h-full">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">
                        {project.description.length > 120 
                          ? `${project.description.substring(0, 120)}...` 
                          : project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-slate-100 text-slate-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-slate-100 text-slate-600"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-auto">
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white text-xs"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 text-xs"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <p className="text-lg text-slate-600 mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;