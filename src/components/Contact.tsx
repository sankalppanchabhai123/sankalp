import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Send, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and build something amazing together. I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form Card */}
          <Card className="card-glass p-8 border-border/40 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:glow-primary">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" />
                Send a Message
              </h3>
              <p className="text-muted-foreground">
                Drop me an email and I'll get back to you as soon as possible!
              </p>
            </div>
            
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group"
              asChild
            >
              <a href="mailto:sankalppanchabhai5@gmail.com" className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                Email Me
              </a>
            </Button>
          </Card>

          {/* Social Links Card */}
          <Card className="card-glass p-8 border-border/40">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Connect With Me</h3>
              <p className="text-muted-foreground">
                Follow me on social media for updates and interesting content
              </p>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a href="https://www.linkedin.com/in/sankalp-panchabhai-26b359292/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-base">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Professional Network</p>
                  </div>
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a href="https://github.com/sankalppanchabhai123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-base">GitHub</p>
                    <p className="text-sm text-muted-foreground">Open Source Projects</p>
                  </div>
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a href="https://x.com/plaknas123?t=WlK4sq6jMjonmOuNtOWrqQ&s=09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-base">Twitter</p>
                    <p className="text-sm text-muted-foreground">Daily Updates & Thoughts</p>
                  </div>
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Card className="card-glass p-6 text-center border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </Card>
          <Card className="card-glass p-6 text-center border-border/40 hover:border-secondary/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-secondary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </Card>
          <Card className="card-glass p-6 text-center border-border/40 hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Students Mentored</div>
          </Card>
          <Card className="card-glass p-6 text-center border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
