
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center py-16 overflow-hidden"
      id="home"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 animate-slide-in">
            <div>
              <span className="inline-block py-1 px-3 rounded-full text-sm bg-primary/10 text-primary mb-4">
                Software Engineer
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Hi, I'm <span className="text-primary">Ankita Kanwar</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              A passionate full-stack developer with expertise in building modern web applications
              that combine elegant design with robust functionality.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                  "h-11 px-6"
                )}
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className={cn(
                  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
                  "border border-input bg-background shadow-sm hover:bg-accent",
                  "h-11 px-6"
                )}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 animate-pulse-slow" />
              <div className="absolute inset-2 rounded-full overflow-hidden neo">
                <img
                  src="https://media.licdn.com/dms/image/v2/C5103AQHA5Qb-bdDhwQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1560153049846?e=1747872000&v=beta&t=hZXSNXFWanfaagZymIL0R3BVDk29Jjsd7XnoRMlew1w"
                  alt="Ankita Kanwar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background shadow-md hover:shadow-lg transition-shadow"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
