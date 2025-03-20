
import { useRef, useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Milestone {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Best Web Developer Award",
    description: "Won the Best Web Developer Award for creating an innovative e-commerce platform",
    image: "https://images.unsplash.com/photo-1544147247-d0a1bf93f58a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "May 2023"
  },
  {
    id: 2,
    title: "Cloud Certification",
    description: "Achieved AWS Certified Solutions Architect certification",
    image: "https://images.unsplash.com/photo-1573496546038-82f9c39f6365?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "October 2022"
  },
  {
    id: 3,
    title: "Tech Conference Speaker",
    description: "Presented a talk on React performance optimization at DevFest Nepal",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "March 2022"
  },
  {
    id: 4,
    title: "Open Source Contribution",
    description: "Became a key contributor to a popular React UI framework",
    image: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "January 2022"
  },
  {
    id: 5,
    title: "University Graduation",
    description: "Graduated with honors in Computer Science",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "July 2021"
  }
];

const MilestoneMoments = () => {
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
      id="milestones"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>

      <div
        className={`section-container relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="section-title text-white mb-16">Milestone Moments</h2>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {milestones.map((milestone) => (
              <CarouselItem key={milestone.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-black/50 border border-blue-700/30 backdrop-blur-sm overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                      <p className="text-sm font-medium text-blue-300">{milestone.date}</p>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/70 text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 lg:-left-12 bg-blue-900/20 backdrop-blur-sm border-blue-700/30 text-white hover:bg-blue-800/50" />
          <CarouselNext className="right-1 lg:-right-12 bg-blue-900/20 backdrop-blur-sm border-blue-700/30 text-white hover:bg-blue-800/50" />
        </Carousel>
      </div>
    </section>
  );
};

export default MilestoneMoments;
