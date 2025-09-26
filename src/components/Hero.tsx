import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(195_80%_45%/0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(195_60%_35%/0.08),transparent_50%)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Creative Developer & <span className="text-gradient">Designer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I craft beautiful digital experiences that merge creativity with
            cutting-edge technology. Specializing in modern web applications and
            innovative user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="glow-primary hover:scale-105 transition-all duration-200"
              onClick={handleScrollToProjects}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-200"
              onClick={handleScrollToContact}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/rahulgupta1660"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulg6/"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact.rahul1910@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
