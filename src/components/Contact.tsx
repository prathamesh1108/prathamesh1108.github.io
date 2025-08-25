'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react'
import emailjs from 'emailjs-com'

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key_here')

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "pratham46vishwa@gmail.com",
      link: "mailto:pratham46vishwa@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8369968096",
      link: "tel:+918369968096"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Maharashtra, India",
      link: "#"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "prathamesh1108",
      link: "https://github.com/prathamesh1108"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        toast.error('Please fill in all required fields.')
        return
      }

      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Prathamesh Vishwakarma', // Your name
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      )

      toast.success('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Feel free to reach out for collaborations, job opportunities, or just to say hello!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="hover:shadow-md transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                      <CardContent className="p-4">
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="flex items-center space-x-4 group"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {info.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/prathamesh1108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 bg-white dark:bg-gray-900 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact