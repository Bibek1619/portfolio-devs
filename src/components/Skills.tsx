
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Monitor, 
  Server, 
  Palette, 
  Wrench,
  Code, 
  FileCode, 
  Database, 
  Cloud,
  Smartphone, 
  GitBranch, 
  Figma, 
  Image,
  Layers,
  Settings,
  Github,
  Terminal
} from "lucide-react";

interface SkillItemProps {
  name: string;
  percentage: number;
  delay: number;
  icon: React.ReactNode;
}

const SkillItem = ({ name, percentage, delay, icon }: SkillItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="flex justify-center items-center w-8 h-8 mr-3 bg-blue-500/20 rounded-full">
            {icon}
          </div>
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-white/70">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="skill-bar"
          style={{
            width: isVisible ? `${percentage}%` : "0%",
            opacity: isVisible ? 1 : 0,
            transitionDelay: `${delay}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("frontend");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-darkGray to-black relative"
    >
      <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>

      <div ref={skillsRef} className="section-container relative z-10">
        <h2 className="section-title text-white mb-16">My Skills</h2>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent mb-8">
              <TabsTrigger
                value="frontend"
                className={`flex items-center justify-center gap-2 py-3 rounded-lg border ${
                  activeTab === "frontend"
                    ? "border-blue-400 bg-blue-900/20 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Frontend</span>
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className={`flex items-center justify-center gap-2 py-3 rounded-lg border ${
                  activeTab === "backend"
                    ? "border-blue-400 bg-blue-900/20 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
                }`}
              >
                <Server className="w-4 h-4" />
                <span>Backend</span>
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className={`flex items-center justify-center gap-2 py-3 rounded-lg border ${
                  activeTab === "design"
                    ? "border-blue-400 bg-blue-900/20 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
                }`}
              >
                <Palette className="w-4 h-4" />
                <span>Design</span>
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className={`flex items-center justify-center gap-2 py-3 rounded-lg border ${
                  activeTab === "tools"
                    ? "border-blue-400 bg-blue-900/20 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Tools</span>
              </TabsTrigger>
            </TabsList>

            <div className="glass-panel p-8 md:p-10">
              <TabsContent value="frontend" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <SkillItem name="React.js" percentage={90} delay={100} icon={<Code className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="Next.js" percentage={85} delay={200} icon={<FileCode className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="JavaScript" percentage={95} delay={300} icon={<Code className="w-4 h-4 text-yellow-400" />} />
                  <SkillItem name="TypeScript" percentage={88} delay={400} icon={<FileCode className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="HTML5 & CSS3" percentage={95} delay={500} icon={<Layers className="w-4 h-4 text-orange-400" />} />
                  <SkillItem name="Tailwind CSS" percentage={92} delay={600} icon={<Palette className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="Framer Motion" percentage={80} delay={700} icon={<Smartphone className="w-4 h-4 text-pink-400" />} />
                  <SkillItem name="Redux" percentage={85} delay={800} icon={<Layers className="w-4 h-4 text-purple-400" />} />
                </div>
              </TabsContent>

              <TabsContent value="backend" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <SkillItem name="Node.js" percentage={88} delay={100} icon={<Server className="w-4 h-4 text-green-400" />} />
                  <SkillItem name="Express.js" percentage={90} delay={200} icon={<FileCode className="w-4 h-4 text-white" />} />
                  <SkillItem name="MongoDB" percentage={85} delay={300} icon={<Database className="w-4 h-4 text-green-400" />} />
                  <SkillItem name="Firebase" percentage={82} delay={400} icon={<Cloud className="w-4 h-4 text-yellow-400" />} />
                  <SkillItem name="GraphQL" percentage={75} delay={500} icon={<FileCode className="w-4 h-4 text-pink-400" />} />
                  <SkillItem name="REST API" percentage={92} delay={600} icon={<Server className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="SQL" percentage={78} delay={700} icon={<Database className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="AWS" percentage={70} delay={800} icon={<Cloud className="w-4 h-4 text-orange-400" />} />
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <SkillItem name="UI/UX Design" percentage={85} delay={100} icon={<Palette className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="Figma" percentage={90} delay={200} icon={<Figma className="w-4 h-4 text-purple-400" />} />
                  <SkillItem name="Adobe XD" percentage={82} delay={300} icon={<Image className="w-4 h-4 text-pink-400" />} />
                  <SkillItem name="Adobe Photoshop" percentage={78} delay={400} icon={<Image className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="Wireframing" percentage={88} delay={500} icon={<Layers className="w-4 h-4 text-gray-400" />} />
                  <SkillItem name="Prototyping" percentage={85} delay={600} icon={<Smartphone className="w-4 h-4 text-green-400" />} />
                  <SkillItem name="Design Systems" percentage={80} delay={700} icon={<Layers className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="Responsive Design" percentage={95} delay={800} icon={<Monitor className="w-4 h-4 text-pink-400" />} />
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <SkillItem name="Git & GitHub" percentage={92} delay={100} icon={<Github className="w-4 h-4 text-white" />} />
                  <SkillItem name="VS Code" percentage={95} delay={200} icon={<Code className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="Docker" percentage={75} delay={300} icon={<Settings className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="CI/CD" percentage={80} delay={400} icon={<GitBranch className="w-4 h-4 text-green-400" />} />
                  <SkillItem name="Jira" percentage={85} delay={500} icon={<Terminal className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="Jest" percentage={78} delay={600} icon={<Terminal className="w-4 h-4 text-red-400" />} />
                  <SkillItem name="Webpack" percentage={72} delay={700} icon={<FileCode className="w-4 h-4 text-blue-400" />} />
                  <SkillItem name="NPM/Yarn" percentage={90} delay={800} icon={<Settings className="w-4 h-4 text-red-400" />} />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
