
import { Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Amazon",
      date: "June 2023 - August 2023",
      location: "Phoenix, AZ",
      description: [
        "Developed and deployed an internal web application utilizing React, TypeScript, and AWS services that streamlined warehouse operations.",
        "Implemented data visualization features to help managers analyze operational metrics more effectively.",
        "Collaborated with cross-functional teams to gather requirements and iterate on solutions."
      ]
    },
    {
      title: "Graduate Student Researcher",
      company: "University of California, Riverside",
      date: "March 2023 - Present",
      location: "Riverside, CA",
      description: [
        "Conducting research on machine learning algorithms for healthcare applications.",
        "Designing and implementing deep learning models for medical image analysis.",
        "Collaborating with faculty and peers on research papers and presentations."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "University of California, Riverside",
      date: "January 2023 - March 2023",
      location: "Riverside, CA",
      description: [
        "Assisted professors in teaching undergraduate computer science courses.",
        "Led discussion sections and provided one-on-one help to students.",
        "Evaluated student assignments and provided constructive feedback."
      ]
    },
    {
      title: "Software Engineer",
      company: "FinTech Startup",
      date: "June 2022 - December 2022",
      location: "Remote",
      description: [
        "Developed full-stack applications using React, Node.js, and MongoDB.",
        "Implemented RESTful APIs to facilitate communication between front-end and back-end systems.",
        "Collaborated with designers to ensure a seamless user experience."
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
            My professional journey through various roles in the tech industry
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
                index % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"
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
                  
                  <ul className="space-y-2">
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
