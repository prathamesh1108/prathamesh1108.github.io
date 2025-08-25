'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Building2 } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "TATA Strive",
      role: "Apprenticeship",
      duration: "2023 - 2024",
      location: "Maharashtra, India",
      description: "Comprehensive training program focusing on full-stack development technologies and professional skills.",
      achievements: [
        "Learned Core Java programming fundamentals and advanced concepts",
        "Mastered SQL database design and query optimization",
        "Built applications using Spring Boot framework",
        "Developed frontend interfaces with JavaScript and React",
        "Gained proficiency in Git/GitHub for version control",
        "Enhanced communication and teamwork skills through collaborative projects"
      ],
      technologies: ["Java", "Spring Boot", "SQL", "JavaScript", "React", "Git/GitHub"],
      type: "Apprenticeship"
    },
    {
      title: "Trivia Software",
      role: "Software Development Intern",
      duration: "2022 - 2023",
      location: "Maharashtra, India",
      description: "Hands-on internship experience working on enterprise Java applications and web development projects.",
      achievements: [
        "Developed desktop applications using Java SE 14",
        "Created intuitive user interfaces with Java Swing framework",
        "Implemented data persistence using Hibernate ORM",
        "Deployed and maintained web applications on Apache Tomcat server",
        "Collaborated with senior developers on production-level projects",
        "Gained experience in software development lifecycle"
      ],
      technologies: ["Java SE 14", "Swing GUI", "Hibernate", "Apache Tomcat"],
      type: "Internship"
    },
    {
      title: "Kamal Classes",
      role: "Development Apprentice",
      duration: "2021 - 2022",
      location: "Maharashtra, India",
      description: "Focused apprenticeship program concentrating on web and desktop application development.",
      achievements: [
        "Gained foundational knowledge in web development technologies",
        "Developed desktop applications using various frameworks",
        "Learned software architecture and design patterns",
        "Participated in code reviews and quality assurance processes",
        "Built responsive web interfaces",
        "Worked on both individual and team-based projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Desktop Development", "Web Development"],
      type: "Apprenticeship"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through various training programs and internships that shaped my development skills
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white dark:bg-gray-900">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                          {experience.title.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <Badge variant={experience.type === 'Internship' ? 'default' : 'secondary'} className="mt-1">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Building2 className="w-4 h-4 mr-2" />
                          {experience.role}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {experience.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="bg-gray-50 dark:bg-gray-800">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Career Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.duration}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience