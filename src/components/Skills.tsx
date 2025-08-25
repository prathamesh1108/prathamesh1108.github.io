'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind", "Material UI"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Node.js", "Express.js", "Java", "RESTful APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "Hibernate"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Tech",
      skills: ["Git", "GitHub", "Docker", "Linux", "Apache Tomcat"],
      color: "from-orange-500 to-red-500"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} text-white rounded-lg mb-4`}>
                    <span className="font-bold text-lg">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Proficiency Bars */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "React/Next.js", level: 90 },
              { skill: "JavaScript/TypeScript", level: 85 },
              { skill: "Spring Boot", level: 80 },
              { skill: "Node.js/Express", level: 75 },
              { skill: "Database (MySQL/MongoDB)", level: 80 },
              { skill: "Git/GitHub", level: 85 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.skill}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills