import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/TypingAnimation";
import { Github, Linkedin, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const roles = [
  "Junior DevOps Engineer",
  "Cloud Enthusiast", 
  "Automation Lover",
  "Infrastructure Expert"
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-primary font-mono text-lg mb-4"
              >
                Hi, my name is
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="gradient-text">Suresh.</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-6"
              >
                I'm a{" "}
                <TypingAnimation 
                  roles={roles} 
                  className="gradient-text font-semibold" 
                />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                Passionate about automation, cloud infrastructure, and building scalable systems. 
                With hands-on experience in AWS, Terraform, and CI/CD pipelines, I focus on 
                solving problems and delivering efficient solutions.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity font-semibold"
              >
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/resume.pdf" download aria-label="Download Resume">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex space-x-6"
            >
              <a
                href="https://linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/YOUR-GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />
              <img
                src={profileImage}
                alt="Suresh - DevOps Engineer"
                width={400}
                height={400}
                loading="eager"
                className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl card-glow"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}