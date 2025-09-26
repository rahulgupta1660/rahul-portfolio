import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "alex@example.com",
      link: "mailto:alex@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "San Francisco, CA",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-display font-semibold mb-8 text-gradient">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="p-6 card-gradient border-border glow-card">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{item.content}</span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-muted-foreground leading-relaxed">
                  Available for freelance projects and full-time opportunities. 
                  Let's discuss how we can bring your vision to life.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Card className="p-8 card-gradient border-border glow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full glow-primary hover:scale-105 transition-all duration-200"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;