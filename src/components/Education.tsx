'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = {
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    university: "Mumbai University",
    location: "Maharashtra, India",
    duration: "2018 - 2022",
    description: "Comprehensive computer engineering program covering software development, data structures, algorithms, database management, and system design.",
    achievements: [
      "Strong foundation in computer science fundamentals",
      "Hands-on experience with multiple programming languages",
      "Database design and management expertise",
      "Software engineering principles and methodologies",
      "System design and architecture concepts",
      "Project management and team collaboration skills"
    ],
    keySubjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies",
      "System Design"
    ]
  }

  const certifications = [
    {
      title: "Full-Stack Development",
      issuer: "TATA Strive",
      date: "2024",
      skills: ["React", "Spring Boot", "Database Design"]
    },
    {
      title: "Java Enterprise Development",
      issuer: "Trivia Software",
      date: "2023",
      skills: ["Java SE", "Hibernate", "Web Deployment"]
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Kamal Classes",
      date: "2022",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design"]
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and professional certifications that built the foundation of my technical expertise
          </p>
        </motion.div>

        {/* Main Education */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Degree Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {education.field}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-3" />
                      {education.university}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3" />
                      {education.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3" />
                      {education.location}
                    </div>
                  </div>
                </div>

                {/* Right Columns - Details */}
                <div className="lg:col-span-2">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                    {education.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Learning Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {education.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Key Subjects */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Subjects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.keySubjects.map((subject, index) => (
                          <Badge key={index} variant="secondary" className="bg-white/50 dark:bg-gray-800/50">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {cert.title.charAt(0)}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {cert.issuer}
                    </p>
                    <Badge variant="outline" className="mb-4">
                      {cert.date}
                    </Badge>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education