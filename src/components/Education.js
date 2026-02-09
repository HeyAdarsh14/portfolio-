import { useEffect } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const education = [
  {
    id: 1,
    institution: "KIET Group of Institutions, Ghaziabad",
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    duration: "2023 - 2027",
    grade: "CGPA: 8.0 / 10",
    description: "Core coursework includes Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, DBMS, and Computer Networks. Actively applying academic concepts through real-world projects, internships, and hackathons.",
    highlighted: true,
  },
  {
    id: 2,
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Senior Secondary (Class XII) – Science with Computer",
    duration: "2022",
    grade: "",
    description: "Completed high school education with focus on Science and Computer Science, building strong foundation in mathematics and programming fundamentals.",
    highlighted: false,
  },
  {
    id: 3,
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Secondary (Class X)",
    duration: "2020",
    grade: "",
    description: "Completed secondary education with excellent academic performance across all subjects.",
    highlighted: false,
  },
];

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="education" className="py-20 bg-[#2d3748]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My education has been a journey of self-discovery and growth. My educational details are as follows.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute right-8 md:right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="mb-12 flex flex-col md:flex-row items-start md:items-center w-full"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              {/* Timeline Dot */}
              <div className="absolute right-8 md:right-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#2d3748] z-10">
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Content Card */}
              <div className={`mr-16 md:mr-16 md:w-full ${edu.highlighted 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-2xl' 
                : ''}`}>
                <div className={`${edu.highlighted 
                  ? 'bg-[#2d3748] rounded-2xl p-8' 
                  : 'bg-[#252d3d] border border-purple-500/20 rounded-2xl p-8'}`}>
                  
                  <div className="flex items-start gap-4">
                    <div className={`${edu.highlighted 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-purple-500/20'} p-3 rounded-lg`}>
                      <AcademicCapIcon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-purple-400 font-semibold mb-2">
                        {edu.degree}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-1">
                          📅 {edu.duration}
                        </span>
                        {edu.grade && (
                          <span className="flex items-center gap-1">
                            📊 {edu.grade}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
