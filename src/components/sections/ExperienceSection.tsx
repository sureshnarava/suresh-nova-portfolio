import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Systems Associate",
    company: "Infosys",
    duration: "2022 - Present",
    description: "Specialized in IT Service Management (ITSM) and application support, managing hardware asset lifecycle with ServiceNow. Implemented automation solutions using SCCM and Microsoft Intune for device management. Gained extensive experience with Azure cloud services and infrastructure management.",
    technologies: ["ServiceNow", "SCCM", "Microsoft Intune", "Azure", "ITSM", "PowerShell"],
  },
  {
    title: "Operations Team Lead",
    company: "TCS (Tata Consultancy Services)",
    duration: "2020 - 2022",
    description: "Led operational logistics for large-scale warehouse management systems. Managed cold store operations and implemented voice picking technologies to improve efficiency. Developed team leadership skills while ensuring operational excellence and meeting performance targets.",
    technologies: ["Warehouse Management", "Voice Picking", "Team Leadership", "Process Optimization"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
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
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto" />
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-glow bg-gradient-card border-border/50 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background" />
                  
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold gradient-text mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.duration}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30 hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}