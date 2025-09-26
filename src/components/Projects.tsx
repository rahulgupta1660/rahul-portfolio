import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import dashboardImage from "@/assets/project-dashboard.jpg";
import mobileAppImage from "@/assets/project-mobile-app.jpg";
import brandingImage from "@/assets/project-branding.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics platform with real-time data visualization, custom reporting, and interactive charts. Built with React, TypeScript, and D3.js.",
      image: dashboardImage,
      tags: ["React", "TypeScript", "D3.js", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description:
        "Modern mobile shopping experience with seamless checkout, product recommendations, and social features. React Native with optimized performance.",
      image: mobileAppImage,
      tags: ["React Native", "Redux", "Firebase", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 3,
      title: "Brand Identity System",
      description:
        "Complete brand identity and design system for a tech startup, including logo design, color palette, typography, and comprehensive guidelines.",
      image: brandingImage,
      tags: ["Figma", "Illustrator", "Brand Design", "Style Guide"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up">
            Featured Projects
          </h2>
          <p
            className="text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            A selection of my recent work across development and design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden border-border glow-card animate-fade-up ${
                project.featured ? "lg:col-span-1 xl:col-span-2" : ""
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted/50 text-xs rounded-full text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:scale-105 transition-transform"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
