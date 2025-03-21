
import { Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Experience = () => {
  const experiences = [
    {
      title: "Trainee Software Developer",
      company: "Guljag Industries Limited, Jodhpur",
      date: "Jan 2024 – Present",
      location: "Jodhpur, India",
      description: [
        "Developed and maintained accounting software for chemical industry clients, handling customer and supplier management, financial reports (ledger, trial balance), and stock tracking.",
        "Designed and optimized SQL Server databases, creating stored procedures, views, and complex queries for financial reports.",
        "Built responsive web interfaces using ASP.NET WebForms and Bootstrap, improving cross-device usability.",
        "Implemented client-side interactivity using JavaScript, jQuery, and AJAX, enhancing system performance.",
        "Integrated SAP Crystal Reports for detailed financial and transactional reporting.",
        "Developed WhatsApp API and email notification systems for real-time updates, improving communication and workflow.",
        "Worked closely with cross-functional teams to ensure the software meets business requirements.",
        "Participated in agile sprints and sprint planning meetings to streamline development."
      ]
    }
  ];
  

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My professional journey 
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Experience items */}
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={cn(
                "relative mb-16 animate-slide-in",
                index % 2 === 0 ? "sm:pr-10 sm:text-left" : "sm:pl-10"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "sm:w-1/2",
                  index % 2 === 0 ? "ml-auto sm:ml-0" : "mr-auto sm:mr-0"
                )}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10",
                    index % 2 === 0
                      ? "left-0 sm:left-auto sm:right-0 sm:translate-x-1/2"
                      : "left-0 sm:left-1/2 sm:-translate-x-1/2"
                  )}
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                {/* Content card */}
                <div className="ml-12 sm:ml-0 p-6 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                  <p className="text-primary font-medium mb-2">{experience.company}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.date}
                    </span>
                    <span>{experience.location}</span>
                  </div>
                  
                  <ul className="space-y-1">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
