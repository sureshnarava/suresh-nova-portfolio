import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const projects = [
  {
    title: "AWS Infrastructure with Terraform",
    description: "Automated AWS infrastructure deployment using Terraform with comprehensive monitoring and alerting. Features auto-scaling EC2 instances, RDS database, and CloudWatch integration.",
    image: project1Image,
    technologies: ["Terraform", "AWS", "CloudWatch", "EC2", "RDS", "VPC"],
    githubUrl: "https://github.com/your-username/aws-terraform-infrastructure",
    demoUrl: "https://your-demo-url.com",
    featured: true,
  },
  {
    title: "CI/CD Pipeline with GitHub Actions",
    description: "Complete CI/CD pipeline implementation for microservices architecture using GitHub Actions, Docker, and automated testing with deployment to multiple environments.",
    image: project2Image,
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Jest", "SonarQube"],
    githubUrl: "https://github.com/your-username/cicd-microservices",
    demoUrl: "https://your-demo-url.com",
    featured: true,
  },
  {
    title: "Kubernetes Monitoring Stack",
    description: "Production-ready Kubernetes cluster with comprehensive monitoring using Prometheus, Grafana, and AlertManager. Includes custom dashboards and alerting rules.",
    image: project3Image,
    technologies: ["Kubernetes", "Prometheus", "Grafana", "AlertManager", "Helm"],
    githubUrl: "https://github.com/your-username/k8s-monitoring-stack",
    demoUrl: "https://your-demo-url.com",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my DevOps expertise 
              and passion for building scalable infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="card-glow bg-gradient-card border-border/50 overflow-hidden group h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      loading="lazy"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/90 backdrop-blur-sm"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/90 backdrop-blur-sm"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardHeader>
                    <CardTitle className="gradient-text flex items-center justify-between">
                      <span>{project.title}</span>
                      {project.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/20 hover:border-primary hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}