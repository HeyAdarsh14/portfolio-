import { useEffect } from "react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    id: 1,
    title: "Backend & Frontend Engineering Intern",
    company: "XCentic Company",
    duration: "3 Months",
    date: "June 2025-Aug 2025",
    description: "The Bharat-Yaatri Driver App is a comprehensive transportation management platform that I developed during my internship. This project showcases real-world application of full-stack development skills. The application streamlines the driver onboarding process, manages ride requests, and provides real-time tracking capabilities for transportation services across India. 10,000+ App Downloads",
    highlighted: true,
  },
  {
    id: 2,
    title: "Freelance Software Developer",
    company: "Independent Project",
    duration: "2 Months",
    date: "March 2025 - April 2025",
    description: "Developed a comprehensive Restaurant Management Application using React and Firebase. The system includes real-time order tracking, inventory management, table reservation system, and staff management features. Implemented user authentication, dynamic menu management, and integrated payment processing. The application provides separate dashboards for customers, staff, and administrators with role-based access control.",
    highlighted: false,
  },
  {
    id: 3,
    title: "Freelance Software Developer",
    company: "Independent Project",
    duration: "2 Months",
    date: "January 2025 - February 2025",
    description: "Built an interactive Online English Learning Platform using React and Firebase. Features include video lessons, interactive quizzes, progress tracking, and live pronunciation practice. Integrated real-time chat for student-teacher communication, personalized learning paths based on proficiency levels, and gamification elements with achievements and leaderboards. The platform supports multiple learning modules covering grammar, vocabulary, speaking, and listening skills.",
    highlighted: false,
  },
];

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-[#2d3748]" id="experience">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="mt-2 text-5xl font-bold tracking-tight text-white">
            Experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative pl-12 md:pl-20"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#2d3748] z-10"></div>

                {/* Experience Card */}
                <div 
                  className={`bg-[#252d3d] border rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 ${
                    experience.highlighted 
                      ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                      : 'border-purple-500/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        experience.highlighted 
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                          : 'bg-[#374151]'
                      }`}>
                        <BriefcaseIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {experience.company}
                      </p>
                      <p className="text-gray-500 text-xs mb-3">
                        {experience.date} · {experience.duration}
                      </p>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
