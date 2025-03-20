
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

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
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-darkGray to-pink-dark opacity-70 z-0"></div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div 
              className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="inline-block px-3 py-1 rounded-full mb-4 bg-white/10 backdrop-blur-md border border-white/20">
                <p className="text-sm text-white/80 font-medium">Full-Stack Developer & Designer</p>
              </div>
            </div>
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white opacity-0 transform transition-all duration-1000 delay-500"
            >
              Hi, I'm <span className="gradient-text">Rahul Sharma</span>
            </h1>
            
            <div 
              className={`mt-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                A Full-Stack Web Developer and Designer from Nepal.
                I build beautiful, functional, and user-friendly web experiences.
              </p>
            </div>
            
            <div 
              className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <button onClick={scrollToProjects} className="btn-primary group">
                View My Work 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button onClick={scrollToContact} className="btn-secondary">
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            ref={imageRef}
            className="w-full lg:w-1/2 flex justify-center opacity-0 transform transition-all duration-1000 delay-700"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-primary p-1">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-white/30">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt="Rahul Sharma" 
                    className="w-full h-full object-cover cool-shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-white opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
