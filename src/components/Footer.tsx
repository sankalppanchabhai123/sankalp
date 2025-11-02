import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12 px-6 bg-card/30">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Thank you for Visiting!</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>
        
        <p className="text-muted-foreground flex items-center justify-center gap-2 mb-2 text-lg">
          Designed with <Heart className="w-5 h-5 text-destructive fill-destructive animate-pulse" /> by{" "}
          <a 
            href="https://www.linkedin.com/in/sankalp-panchabhai-26b359292/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-primary hover:text-secondary transition-colors duration-300 story-link"
          >
            Sankalp Panchabhai
          </a>
        </p>
        
        <p className="text-sm text-muted-foreground/80">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
