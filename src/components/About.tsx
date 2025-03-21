
import { FileText, User } from "lucide-react";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 animate-slide-in">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden neo">
              <img
                src="https://avatars.githubusercontent.com/u/109106077?v=4"
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2 animate-slide-in delay-100">
            <h3 className="text-2xl font-semibold mb-4">
              Software Engineer & ML Enthusiast
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm Annie Shkhawat, currently pursuing my Masters in Computer Science from the University of California, Riverside. My journey in technology has been driven by a passion for solving complex problems through innovative solutions. With a background in full-stack development and machine learning, I bring a blend of technical expertise and creative thinking to every project.
            </p>
            
            <p className="text-muted-foreground mb-6">
              I've worked on diverse projects ranging from web applications to AI-driven solutions, continually expanding my skills and embracing new technologies. My experience at Amazon as a SDE intern and at UC Riverside as a Graduate Student Researcher has sharpened my abilities in software development, data analysis, and machine learning implementation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Annie Shkhawat</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">annieshkhawt@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">Riverside, California</p>
              </div>
              <div>
                <p className="font-medium">Degree:</p>
                <p className="text-muted-foreground">Masters in Computer Science</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/annieshkhwt2050/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                  "h-11 px-6"
                )}
              >
                <User className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="#"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
                  "border border-input bg-background shadow-sm hover:bg-accent",
                  "h-11 px-6"
                )}
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
