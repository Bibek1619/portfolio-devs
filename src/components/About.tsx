
import { useEffect, useRef } from 'react';
import { Code2, User, MapPin, Briefcase, Heart, Coffee, Download } from 'lucide-react';

const About = () => {
  const codeBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-typing');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (codeBlockRef.current) {
      observer.observe(codeBlockRef.current);
    }

    return () => {
      if (codeBlockRef.current) {
        observer.unobserve(codeBlockRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="bg-darkGray py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent opacity-70"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-white mb-16">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-12">
          {/* Profile Photo - Reduced size for smaller screens */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-[280px]">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                  alt="Rahul Sharma"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* CV Download Button */}
            <div className="mt-4 md:mt-6 flex justify-center">
              <a 
                href="#" 
                className="btn-modern-primary flex items-center justify-center group text-sm md:text-base py-3 px-6 md:px-8"
                download
              >
                <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 z-10 relative" />
                <span className="z-10 relative">Download My CV</span>
              </a>
            </div>
          </div>
          
          {/* Code Block - Reduced size for all screens */}
          <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
            <div className="max-w-3xl mx-auto glass-panel p-3 md:p-5 lg:p-6 text-white/90">
              <div className="flex items-center mb-2 md:mb-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs opacity-70">about-me.js</div>
              </div>
              
              <div ref={codeBlockRef} className="font-mono text-xs md:text-sm leading-relaxed overflow-auto max-h-[280px] md:max-h-[320px] lg:max-h-[350px] pr-2">
                <div className="flex flex-col space-y-1">
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">01</span>
                    <span className="text-blue-400">const</span>
                    <span className="text-white mx-2">aboutMe</span>
                    <span className="text-pink-400">=</span>
                    <span className="text-white mx-2">{"{"}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">02</span>
                    <span className="pl-4 md:pl-6 text-pink-400">name</span>
                    <span className="text-white">:</span>
                    <span className="text-green-400 ml-2">"Rahul Sharma"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">03</span>
                    <span className="pl-4 md:pl-6 text-pink-400">role</span>
                    <span className="text-white">:</span>
                    <span className="text-green-400 ml-2">"Full-Stack Web Developer & Designer"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">04</span>
                    <span className="pl-4 md:pl-6 text-pink-400">location</span>
                    <span className="text-white">:</span>
                    <span className="text-green-400 ml-2">"Nepal"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">05</span>
                    <span className="pl-4 md:pl-6 text-pink-400">skills</span>
                    <span className="text-white">: [</span>
                    <span className="text-green-400 ml-2">"React"</span>
                    <span className="text-white">,</span>
                    <span className="text-green-400 ml-2">"Node.js"</span>
                    <span className="text-white">,</span>
                    <span className="text-green-400 ml-2">"UI/UX Design"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">06</span>
                    <span className="pl-8 md:pl-10 text-green-400">"MongoDB"</span>
                    <span className="text-white">,</span>
                    <span className="text-green-400 ml-2">"Figma"</span>
                    <span className="text-white">],</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">07</span>
                    <span className="pl-4 md:pl-6 text-pink-400">passion</span>
                    <span className="text-white">:</span>
                    <span className="text-green-400 ml-2">"Building scalable, user-friendly web applications."</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">08</span>
                    <span className="pl-4 md:pl-6 text-pink-400">hobbies</span>
                    <span className="text-white">: [</span>
                    <span className="text-green-400 ml-2">"Coding"</span>
                    <span className="text-white">,</span>
                    <span className="text-green-400 ml-2">"Designing"</span>
                    <span className="text-white">,</span>
                    <span className="text-green-400 ml-2">"Traveling"</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">09</span>
                    <span className="pl-8 md:pl-10 text-green-400">"Photography"</span>
                    <span className="text-white">],</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-gray-500 mr-2 md:mr-4 w-5 md:w-7 text-right">10</span>
                    <span className="text-white">{"}"}</span>
                    <span className="text-pink-400">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="glass-panel p-4 md:p-6 flex flex-col items-center text-center text-white transition-all duration-300 hover:scale-105">
            <User className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Who I Am</h3>
            <p className="text-white/70 text-sm md:text-base">A passionate developer who loves creating beautiful interfaces and powerful web applications.</p>
          </div>
          
          <div className="glass-panel p-4 md:p-6 flex flex-col items-center text-center text-white transition-all duration-300 hover:scale-105">
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-pink-400 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Where I'm From</h3>
            <p className="text-white/70 text-sm md:text-base">Based in Nepal, working with clients worldwide to bring their digital visions to life.</p>
          </div>
          
          <div className="glass-panel p-4 md:p-6 flex flex-col items-center text-center text-white transition-all duration-300 hover:scale-105">
            <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">What I Do</h3>
            <p className="text-white/70 text-sm md:text-base">I design and develop responsive, fast and user-friendly web applications.</p>
          </div>
          
          <div className="glass-panel p-4 md:p-6 flex flex-col items-center text-center text-white transition-all duration-300 hover:scale-105">
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-400 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Why I Do It</h3>
            <p className="text-white/70 text-sm md:text-base">I'm passionate about creating digital experiences that make people's lives better.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
