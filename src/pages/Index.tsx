
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import MilestoneMoments from "@/components/MilestoneMoments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/utils/animations";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Lazy load ParticleBackground to improve initial load performance
const LazyParticleBackground = lazy(() => import("@/components/ParticleBackground"));

// Add meteor effect component
const Meteors = ({ number = 20 }: { number?: number }) => {
  const meteors = [...Array(number)].map((_, idx) => ({
    id: idx,
    size: Math.floor(Math.random() * 30) + 10, // 10-40px
    top: Math.floor(Math.random() * 100), // 0-100%
    left: Math.floor(Math.random() * 100), // 0-100%
    duration: Math.floor(Math.random() * 5) + 5, // 5-10s
    delay: Math.floor(Math.random() * 10) // 0-10s
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {meteors.map(meteor => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[100px] h-[1px] bg-gradient-to-r from-blue-400 to-transparent"></span>
        </span>
      ))}
    </div>
  );
};

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Enable smooth scrolling
  useSmoothScroll();
  
  useEffect(() => {
    // Show welcome toast with a more modern design
    setTimeout(() => {
      toast({
        title: "✨ Welcome to my portfolio!",
        description: "Feel free to explore my work and get in touch if you have any questions.",
        className: "bg-gradient-to-r from-blue-900/90 to-indigo-900/90 border border-blue-500/30 backdrop-blur-md text-white",
      });
    }, 2000);
    
    // Preload images to prevent flashing
    const preloadImages = [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
    ];
    
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Particle Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-black z-0"></div>}>
        <LazyParticleBackground />
      </Suspense>
      
      {/* Meteor effect */}
      <Meteors number={isMobile ? 10 : 20} />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <MilestoneMoments />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
