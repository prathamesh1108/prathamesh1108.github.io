'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ExternalLink, Play, X, Image as ImageIcon, Video } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
   
    {
      id: 1,
      title: "Mint Studio",
      description: "A modern digital studio website showcasing creative services, portfolio, and client testimonials. Built with focus on visual appeal and user experience.",
      longDescription: "Mint Studio represents a complete digital transformation for a creative agency. The website features stunning visual presentations, smooth animations, interactive portfolio galleries, and an integrated contact system. Built with performance and SEO optimization in mind.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      features: ["Portfolio Gallery", "Service Showcase", "Client Testimonials", "Contact Forms", "Blog System", "SEO Optimized"],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
      demoVideo: "/api/placeholder/video/demo2.mp4",
      liveLink: "#",
      githubLink: "#",
      status: "Live"
    },
    {
      id: 2,
      title: "ParkingApp",
      description: "An intelligent parking management system that allows users to find, reserve, and pay for parking spots. Includes both web and mobile interfaces.",
      longDescription: "ParkingApp solves urban parking challenges by providing a comprehensive solution for both parking space owners and users. The system includes real-time availability tracking, reservation management, and analytics dashboard for parking operators.",
      techStack: ["Next.js","TypeScript","Tailwind CSS","Spring Boot", "MySQL", "REST" ],
      features: ["Real-time Availability", "Spot Reservation", "Payment Processing", "Navigation Integration", "User Dashboard", "Analytics"],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
      demoVideo: "/api/placeholder/video/demo3.mp4",
      liveLink: "#",
      githubLink: "#",
      status: "Live"
    },
    {
      id: 3,
      title: "Amulya Artistry",
      description: "A comprehensive e-commerce platform designed specifically for artisans to showcase and sell their handcrafted products. Features include product catalog, shopping cart, user authentication, and payment integration.",
      longDescription: "Amulya Artistry is a full-featured e-commerce platform built to empower local artisans by providing them with a digital marketplace. The platform includes advanced features like product filtering, wishlist functionality, secure payment processing, order tracking, and an admin dashboard for inventory management.",
      techStack: ["Next.js","TypeScript","Tailwind CSS","React", "Node.js", "SSR", "MongoDB", "Stripe API", "JWT Auth"],
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "Admin Dashboard"],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
      demoVideo: "/api/placeholder/video/demo1.mp4",
      liveLink: "#",
      githubLink: "#",
      status: "In Development"
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card 
                className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <CardContent className="p-6">
                  <div className="relative mb-4 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <SiGithub className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

       
        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </DialogTitle>
                </DialogHeader>
                
                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  if (!project) return null
                  
                  return (
                    <div className="space-y-6">
                      {/* Project Images/Video Placeholder */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Video className="w-12 h-12 text-gray-400" />
                            <span className="ml-2 text-gray-500">Demo Video Placeholder</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {[1, 2].map((i) => (
                            <div key={i} className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                              <ImageIcon className="w-8 h-8 text-gray-400" />
                              <span className="ml-2 text-gray-500">Screenshot {i}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project Details */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">About This Project</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.longDescription}
                        </p>
                      </div>
                      
                      {/* Tech Stack */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Demo
                        </Button>
                        <Button variant="outline" className="flex-1">
                           <SiGithub className="w-4 h-4 mr-2" /> 
                          View Source Code
                        </Button>
                      </div>
                    </div>
                  )
                })()}
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects