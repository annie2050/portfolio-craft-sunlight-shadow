
import { useState } from "react";
import { Code, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Healthcare AI Diagnostic Tool",
      description: "A machine learning system that assists medical professionals in diagnosing diseases from medical imaging data.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["ML", "Python", "TensorFlow", "Healthcare"],
      category: "ml",
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment processing, inventory management, and user authentication.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Home Automation System",
      description: "An IoT platform for controlling and monitoring smart home devices with voice commands and mobile app.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["IoT", "React Native", "Node.js", "AWS"],
      category: "other",
      github: "#",
      demo: "#"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "An interactive dashboard that visualizes financial data and provides insights for investment decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["React", "D3.js", "TypeScript", "Express"],
      category: "web",
      github: "#",
      demo: "#"
    },
    {
      title: "Natural Language Processing API",
      description: "A REST API service for text analysis, sentiment classification, and entity recognition.",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["Python", "Flask", "NLP", "Docker"],
      category: "ml",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management Application",
      description: "A collaborative project management tool with real-time updates and task tracking.",
      image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      category: "web",
      github: "#",
      demo: "#"
    }
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {[
            { id: "all", label: "All Projects" },
            { id: "web", label: "Web Development" },
            { id: "ml", label: "Machine Learning" },
            { id: "other", label: "Other Projects" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all animate-scale-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects link */}
        <div className="text-center mt-12 animate-fade-in">
          <a
            href="https://github.com/annieshkhawat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            View more projects on GitHub
            <Code className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
