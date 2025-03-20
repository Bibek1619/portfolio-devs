
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const titleElement = titleRef.current;
    const imageElement = imageRef.current;
    
    if (titleElement && imageElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("opacity-0");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(titleElement);
      observer.observe(imageElement);
      
      return () => {
        observer.unobserve(titleElement);
        observer.unobserve(imageElement);
      };
    }
  }, []);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const headerOffset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Text animation variants
  const roleTextVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const titleLetters = "Full-Stack Developer & Designer".split("");
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-darkGray to-pink-dark opacity-70 z-0"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl mix-blend-overlay animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl mix-blend-overlay animate-pulse delay-1000"></div>
      
      {/* Mesh grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="mesh-grid"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-6 py-24 md:py-32 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div 
              variants={itemVariants}
              className="inline-block"
            >
              <div className="inline-block px-4 py-2 rounded-full mb-4 bg-white/10 backdrop-blur-md border border-white/20 glow-sm">
                <div className="overflow-hidden">
                  <div className="flex justify-center lg:justify-start">
                    {titleLetters.map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          delay: 0.5 + index * 0.03, 
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                        className="text-sm md:text-base text-white/90 font-medium"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              ref={titleRef}
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white opacity-0 transform transition-all duration-1000 delay-500"
            >
              Hi, I'm <span className="modern-gradient-text glow">Rahul Sharma</span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="mt-6"
            >
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed text-shadow">
                A Full-Stack Web Developer and Designer from Nepal.
                I build beautiful, functional, and user-friendly web experiences.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={scrollToProjects} 
                className="btn-modern-primary group"
                aria-label="View my work"
              >
                <span className="z-10 relative">View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 z-10 relative" />
              </button>
              
              <button 
                onClick={scrollToContact} 
                className="btn-modern-secondary group"
                aria-label="Contact me"
              >
                <span className="z-10 relative">Contact Me</span>
              </button>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div 
            ref={imageRef}
            variants={itemVariants}
            className="w-full lg:w-1/2 flex justify-center opacity-0 transform transition-all duration-1000 delay-700"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-pink-500 opacity-20 animate-pulse blur-xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-pink-500 p-1 rotate-12 animate-float">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-md hero-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt="Rahul Sharma" 
                    className="w-full h-full object-cover modern-shadow"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-blue-400/80 blur-sm animate-float-delayed"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-pink-400/80 blur-sm animate-float-delayed-more"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-10 w-10 text-white opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
