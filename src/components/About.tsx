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
                src="https://lh3.googleusercontent.com/a/ACg8ocKFEc9NvQZhNxYilGlulPFzR2tz1-txiNj89CRIZBJmJ5ILiVIaqQ=s288-c-no"
                alt="Ankita Kanwar Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2 animate-slide-in delay-100">
            <h3 className="text-2xl font-semibold mb-4">Software Engineer</h3>
            <p className="text-muted-foreground mb-6">
              💻 Hi, I’m Ankita Kanwar! A software developer passionate about building efficient, user-friendly web applications using ASP.NET and SQL Server.
            </p>
            <p className="text-muted-foreground mb-6">
              I am a detail-oriented and motivated software developer with over a year of experience specializing in ASP.NET WebForms, Microsoft SQL Server, and modern web technologies. I have worked extensively on accounting software solutions in the chemical industry, focusing on financial reporting, integration, and system optimization.
            </p>
            <p className="text-muted-foreground mb-6">
              With expertise in SAP Crystal Reports, WhatsApp API notifications, and email alerts, I develop solutions that enhance user engagement and improve system efficiency. My passion lies in building responsive, simple, and creative UI designs that are optimized for both desktop and mobile experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              Apart from this, I love music, photography, gardening, and traveling, and I enjoy exploring human psychology through storytelling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Ankita Kanwar</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">ankitakanwar21@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">Jodhpur, India</p>
              </div>
              <div>
                <p className="font-medium">Degree:</p>
                <p className="text-muted-foreground">Electronics and Communication Engineering</p>
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
                href="your_resume_link_here"
                target="_blank"
                rel="noopener noreferrer"
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
