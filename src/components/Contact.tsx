
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'gawade.sahil@outlook.com',
      href: 'mailto:gawade.sahil@outlook.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 91466 41138',
      href: 'tel:+919146641138',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sahil-gawade7',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/Sahildyno',
      color: 'from-gray-600 to-gray-400',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      href: 'https://x.com/SahilGawad16867',
      color: 'from-black-600 to-black-400',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/_sahilgawade_/',
      color: 'from-Red-600 to-Red-400',
    },

  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_izbpwco',
      'template_hpte7ls',
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      'NH1o-w9QKVoTE6MHV'
    )
    .then(() => {
      setIsSubmitting(false);
      toast({
        title: "✅ Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setIsSubmitting(false);
      toast({
        title: "❌ Error",
        description: "Something went wrong. Please try again later.",
      });
      console.error("EmailJS error:", error);
    });
  };

  return (
    <div className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to optimize your infrastructure? Let's discuss your project and build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${link.color} text-white hover:shadow-lg transition-all duration-300`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Why Work With Me?</h4>
              <div className="space-y-3">
                {[
                  'Expertise in modern DevOps practices',
                  'AWS certified solutions',
                  'Fast response and communication',
                  'Commitment to quality and best practices',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
