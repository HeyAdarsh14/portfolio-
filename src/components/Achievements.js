import { useEffect } from "react";
import { TrophyIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon (SIH)",
    organization: "Government of India",
    date: "September 2025",
    description: "College Winner · Team Leader · Finalist",
    icon: "🏆",
  },
  {
    id: 2,
    title: "HackHaven 2.0",
    organization: "KIET Group of Institutions",
    date: "March 2025",
    description: "Finalist",
    icon: "🏆",
  },
  {
    id: 3,
    title: "Unstop Hackathon",
    organization: "Unstop",
    date: "January 2025",
    description: "Finalist",
    icon: "🏆",
  },
  {
    id: 4,
    title: "Sports & Representation",
    organization: "KIET & Kendriya Vidyalaya",
    date: "2012-2022",
    description: "KIET College Cricket Team · Represented Kendriya Vidyalaya at SGFI (State Level)",
    icon: "🏆",
  },
];

export default function Achievements() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-[#1e2530]" id="achievements">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="mt-2 text-5xl font-bold tracking-tight text-white">
            Achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="relative pl-12 md:pl-20"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#1e2530] z-10"></div>

                {/* Achievement Card */}
                <div className="bg-[#252d3d] border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#374151] rounded-xl flex items-center justify-center">
                        <span className="text-3xl">{achievement.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-500 text-xs mb-3">
                        {achievement.date}
                      </p>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {achievement.description}
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
