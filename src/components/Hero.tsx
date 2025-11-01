import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Sankalp <span className="text-gradient">Panchabhai</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light tracking-wide">
            Crafting Digital Experiences | Building Tomorrow's Solutions
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8 animate-pulse-glow"></div>
          
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8">
            Third Year IT Student • Web Lead at GDGC
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              className="hover:text-primary hover:border-primary transition-all hover:glow-primary"
              asChild
            >
              <a href="https://github.com/sankalppanchabhai123" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:text-primary hover:border-primary transition-all hover:glow-primary"
              asChild
            >
              <a href="https://www.linkedin.com/in/sankalp-panchabhai-26b359292/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:text-primary hover:border-primary transition-all hover:glow-primary"
              asChild
            >
              <a href="https://x.com/plaknas123?t=WlK4sq6jMjonmOuNtOWrqQ&s=09" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:text-primary hover:border-primary transition-all hover:glow-primary"
              asChild
            >
              <a href="mailto:sankalppanchabhai5@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Work
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
