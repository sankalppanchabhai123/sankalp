import { Card } from "@/components/ui/card";
import { Award, CheckCircle2 } from "lucide-react";

const Achievements = () => {
  const achievements = [
    "Web Lead at Google Developer Groups on Campus (GDGC)",
    "Built multiple fullstack web applications using React, Node.js, and modern technologies",
    "Active problem solver on competitive programming platforms",
    "Organized and conducted technical workshops for 100+ students",
    "Contributed to open-source projects on GitHub",
    "Mentored junior developers in web development and programming",
    "Designed and developed responsive, user-friendly web interfaces",
    "Implemented RESTful APIs and database management systems",
    "Led team projects using Agile methodologies",
    "Completed multiple online certifications in web technologies",
    "Participated in hackathons and coding competitions",
    "Strong foundation in Data Structures and Algorithms",
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4 animate-pulse-glow">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <Card className="card-glass p-8 md:p-12 border-border/40">
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                <p className="text-foreground/90 leading-relaxed flex-1 group-hover:text-primary transition-colors duration-300">
                  {achievement}
                </p>
                <CheckCircle2 className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
