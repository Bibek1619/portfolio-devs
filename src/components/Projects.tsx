
import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media management with analytics, scheduling, and content creation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Meditation & Wellness App",
    description: "A mobile-first application for meditation, mindfulness, and wellness with guided sessions and progress tracking.",
    image: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and experience in web development.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "A visually stunning weather application with real-time forecasts, location-based weather data, and interactive maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "OpenWeather API", "Mapbox", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="project-card h-full bg-black/60 border border-blue-700/30 backdrop-blur-sm overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-80" : "opacity-50"
          }`}
        ></div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-300 border border-blue-600/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/70 text-sm mb-6">{project.description}</p>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Live Demo"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pink-900/5 mix-blend-overlay"></div>

      <div
        className={`section-container relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="section-title text-white mb-16">Featured Projects</h2>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 lg:-left-12 bg-blue-900/20 backdrop-blur-sm border-blue-700/30 text-white hover:bg-blue-800/50" />
          <CarouselNext className="right-1 lg:-right-12 bg-blue-900/20 backdrop-blur-sm border-blue-700/30 text-white hover:bg-blue-800/50" />
        </Carousel>

        <div className="flex justify-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-blue-900/20 hover:bg-blue-800/40 text-white rounded-full border border-blue-700/30 transition-all duration-300"
          >
            <span>View more on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
