
import { motion } from 'framer-motion';
import { ChevronDown, Download, Play, Code, Cloud, Server, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const skills = [
    { name: 'AWS', icon: <Cloud className="w-5 h-5" />, color: 'from-orange-400 to-orange-600' },
    { name: 'Terraform', icon: <Server className="w-5 h-5" />, color: 'from-purple-400 to-purple-600' },
    { name: 'Docker', icon: <Code className="w-5 h-5" />, color: 'from-blue-400 to-blue-600' },
    { name: 'Jenkins', icon: <Database className="w-5 h-5" />, color: 'from-green-400 to-green-600' },
    { name: 'Kubernetes', icon: <Server className="w-5 h-5" />, color: 'from-cyan-400 to-cyan-600' },
  ];

  const floatingElements = [
    { id: 1, size: 'w-20 h-20', position: 'top-20 left-10', delay: 0 },
    { id: 2, size: 'w-32 h-32', position: 'top-40 right-20', delay: 2 },
    { id: 3, size: 'w-16 h-16', position: 'bottom-40 left-20', delay: 1 },
    { id: 4, size: 'w-24 h-24', position: 'bottom-20 right-10', delay: 3 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
            className={`absolute ${element.position} ${element.size} bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-xl`}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-sm font-medium">Available for DevOps Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Sahil Gawade
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200 mb-4">
                DevOps Engineer & Cloud Architect
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                Specializing in Cloud Computing, Infrastructure Automation, and CI/CD Pipelines. 
                Building scalable, efficient systems that seamlessly bridge development and operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-white/5 transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
              </Button>
              <Button
                onClick={() => window.open('/resume.pdf', '_blank')}
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-xl backdrop-blur-sm bg-white/5 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </motion.div>

            {/* Enhanced Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">Core Technologies</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex items-center gap-3 bg-gradient-to-r ${skill.color} p-0.5 rounded-xl`}
                  >
                    <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur-sm px-4 py-3 rounded-xl w-full">
                      <div className="text-white">{skill.icon}</div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Floating cards around profile */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 z-10"
              >
                <div className="flex items-center gap-2 text-white">
                  <Cloud className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">AWS Certified</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-4 z-10"
              >
                <div className="flex items-center gap-2 text-white">
                  <Server className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">DevOps Expert</span>
                </div>
              </motion.div>

              {/* Main profile container */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full blur-lg opacity-30 scale-110"
                />
                
                <div className="relative w-80 h-80 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
                    <div className="text-8xl relative z-10">👨‍💻</div>
                  </div>
                </div>
                
                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-xs">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
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
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 group"
        >
          <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
