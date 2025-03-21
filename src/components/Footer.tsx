
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Ankita</span>Kanwar
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a
              href="https://github.com/annie2050"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/annieshkhwt2050/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:annieshkhawt@gmail.com"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              &copy;{currentYear}Ankita Kanwar. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-6 right-6 z-10">
        <a
          href="#home"
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
