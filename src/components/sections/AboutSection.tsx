import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto" />
          </div>

          <Card className="card-glow bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Junior DevOps Engineer with a strong foundation in cloud 
                  infrastructure and automation. My journey in technology began with a curiosity 
                  about how systems work together, which led me to specialize in DevOps practices.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With hands-on experience in <span className="text-primary font-semibold">AWS</span>, 
                  <span className="text-primary font-semibold"> Terraform</span>, and 
                  <span className="text-primary font-semibold"> CI/CD pipelines</span>, I focus on 
                  creating robust, scalable infrastructure solutions. I believe in the power of 
                  automation to eliminate manual errors and improve system reliability.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not working on infrastructure code, I enjoy exploring new cloud 
                  technologies, contributing to open-source projects, and sharing my knowledge 
                  with the DevOps community. I'm always eager to learn and tackle new challenges 
                  that push the boundaries of what's possible with modern infrastructure.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Deployed</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">AWS Services</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-muted-foreground">Uptime Goal</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}