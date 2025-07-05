
import { motion } from 'framer-motion';
import { ChevronDown, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const skills = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Jenkins', icon: '⚙️' },
    { name: 'Kubernetes', icon: '⚡' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Sahil Gawade
              </span>{' '}
              A DevOps Engineer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Specializing in Cloud Computing, Automation, and Infrastructure as Code. 
              Building efficient, scalable systems that bridge development and operations seamlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-lg px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-3"
              >
                <Play className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>

            {/* Skills Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-md opacity-30"
              />
              <div className="relative w-80 h-80 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full p-2">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full font-bold"
              >
                2+ Years Experience
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
