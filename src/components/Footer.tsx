import { Github, Linkedin, Mail, Heart } from "lucide-react";
<Github />;

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-display font-bold text-gradient mb-2">
              Rahul Gupta
            </div>
            <p className="text-muted-foreground">
              Creative Developer & Designer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by
            Rahul Gupta
            <span className="mx-2">•</span>© 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
