
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize the particles engine
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Check if device is mobile and set state
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get particle count based on device type
  const getParticleCount = () => {
    return isMobile ? 30 : 80;
  };

  return (
    <div className={`particle-container transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: {
              value: "#1F1F1F",
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: getParticleCount(),
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#4A90E2", "#6EB5FF", "#D32F2F", "#FF6B6B", "#00FFFF"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.4,
                },
              },
              push: {
                particles_nb: 3,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
