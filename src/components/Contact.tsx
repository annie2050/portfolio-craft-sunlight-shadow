
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ankitakanwar21@gmail.com",
      link: "mailto:ankitakanwar21"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 (701) 447-1361",
      link: "tel:+917014471361"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jodhpur , India",
      link: "https://maps.google.com/?q=Jodhpur,India"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/annie2050"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/annieshkhwt2050/"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#"
    }
  ];

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 animate-slide-in">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 animate-slide-in delay-100">
              <form className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Send Me a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Message subject"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={cn(
                    "w-full inline-flex items-center justify-center rounded-md font-medium transition-colors",
                    "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                    "h-11 px-6"
                  )}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
