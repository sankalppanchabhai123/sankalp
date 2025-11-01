import { Card } from "@/components/ui/card";
import { Code2, Database, Layers, Terminal, Lightbulb, Puzzle } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "primary",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs, GraphQL",
      color: "secondary",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full Stack",
      description: "End-to-end application development",
      color: "accent",
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "DevOps & Tools",
      description: "Git, Docker, CI/CD, Cloud Platforms",
      color: "primary",
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Data Structures, Algorithms, Competitive Programming",
      color: "secondary",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Leadership",
      description: "Team management, Event organization, Mentoring",
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications and solving complex problems
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="card-glass p-6 border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`text-${skill.color} mb-4 group-hover:animate-pulse-glow`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
