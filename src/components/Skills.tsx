
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "JavaScript/TypeScript",
        "React.js",
        "Next.js",
        "HTML/CSS",
        "Tailwind CSS",
        "Redux",
        "Angular"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "Java",
        "RESTful APIs",
        "GraphQL"
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "AWS",
        "Docker",
        "Kubernetes",
        "Firebase"
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Computer Vision",
        "NLP",
        "Neural Networks",
        "Data Analysis"
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            The technologies and tools I'm proficient with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow animate-slide-up",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git", "CI/CD", "Jest", "Webpack", "Figma", "Jupyter", 
                "Pandas", "NumPy", "RESTful APIs", "SASS", "Linux", "Agile", 
                "Material UI", "Bootstrap", "Responsive Design", "Babel"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-secondary text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
