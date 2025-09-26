import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in React, Node.js, and modern web technologies with a focus on performance and scalability."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning interfaces that enhance user experience and drive engagement."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Passionate about building fast, efficient applications that deliver exceptional user experiences."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills with experience leading cross-functional teams to deliver successful projects."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Passionate about creating digital experiences that make a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">
                Creative Problem Solver
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development and design, I specialize in 
                transforming complex ideas into elegant, user-friendly solutions. My approach 
                combines technical expertise with creative vision to deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great design and solid engineering go hand in hand. Whether it's 
                building a responsive web application, crafting a brand identity, or optimizing 
                user experiences, I bring passion and precision to every project.
              </p>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-full h-80 bg-card-gradient rounded-2xl border border-border glow-card">
                  <div className="p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Code className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Code is poetry written for machines to understand and humans to maintain."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={item.title} className="p-6 card-gradient border-border glow-card animate-fade-up" 
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;