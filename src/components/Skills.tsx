const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React & Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "UI/UX Design", level: 90 },
        { name: "Prototyping", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} 
                   className="animate-fade-up" 
                   style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}>
                <h3 className="text-xl font-display font-semibold mb-6 text-gradient">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${0.5 + categoryIndex * 0.1 + skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;