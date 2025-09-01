import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Download, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Aylesbury, UK",
    href: "https://maps.google.com/?q=Aylesbury,UK",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 1234 567890",
    href: "tel:+441234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/YOUR-GITHUB",
    username: "@your-github",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOUR-LINKEDIN",
    username: "Connect with me",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm currently open to new opportunities in DevOps and cloud infrastructure. 
                  If you're looking for someone passionate about automation, scalability, 
                  and modern infrastructure practices, let's talk!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="card-glow bg-gradient-card border-border/50">
                        <CardContent className="p-4">
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group"
                          >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">{info.label}</div>
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {info.value}
                              </div>
                            </div>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    
                    return (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1 justify-start gap-3 border-border/50 hover:border-primary/50 hover:bg-primary/10"
                          asChild
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                          >
                            <IconComponent className="w-5 h-5" />
                            <div className="text-left">
                              <div className="font-medium">{social.label}</div>
                              <div className="text-xs text-muted-foreground">
                                {social.username}
                              </div>
                            </div>
                          </a>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  asChild
                >
                  <a href="/resume.pdf" download aria-label="Download Resume">
                    <Download className="w-5 h-5 mr-3" />
                    Download My Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}