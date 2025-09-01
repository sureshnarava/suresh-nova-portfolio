import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cloud, Server, Shield, Code, Database, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "text-tech-blue",
    skills: [
      { name: "AWS (EC2, S3, VPC, IAM)", level: 90 },
      { name: "Azure Services", level: 85 },
      { name: "Infrastructure as Code", level: 88 },
    ],
  },
  {
    title: "DevOps & Automation",
    icon: Settings,
    color: "text-tech-green",
    skills: [
      { name: "Terraform", level: 85 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "GitHub Actions", level: 75 },
    ],
  },
  {
    title: "Containerization",
    icon: Server,
    color: "text-tech-purple",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 70 },
      { name: "Container Orchestration", level: 68 },
    ],
  },
  {
    title: "Scripting & Development",
    icon: Code,
    color: "text-tech-orange",
    skills: [
      { name: "Linux & Bash", level: 80 },
      { name: "PowerShell", level: 78 },
      { name: "Python Automation", level: 72 },
    ],
  },
  {
    title: "Monitoring & Security",
    icon: Shield,
    color: "text-primary",
    skills: [
      { name: "System Monitoring", level: 70 },
      { name: "Security Best Practices", level: 68 },
      { name: "Incident Response", level: 65 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "text-accent",
    skills: [
      { name: "Database Administration", level: 65 },
      { name: "Backup & Recovery", level: 70 },
      { name: "Performance Tuning", level: 60 },
    ],
  },
];

const tools = [
  "AWS", "Azure", "Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions",
  "ServiceNow", "SCCM", "Intune", "Linux", "PowerShell", "Python", "Git",
  "Ansible", "Prometheus", "Grafana", "Nginx", "Apache", "MySQL", "PostgreSQL"
];

interface AnimatedProgressProps {
  value: number;
  delay: number;
}

function AnimatedProgress({ value, delay }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return <Progress value={progress} className="h-2" />;
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use 
              to build reliable, scalable infrastructure solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-glow bg-gradient-card border-border/50 h-full">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3">
                        <IconComponent className={`w-6 h-6 ${category.color}`} />
                        <span className="text-lg">{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <AnimatedProgress 
                            value={skill.level} 
                            delay={(index * 100) + (skillIndex * 50)}
                          />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}