import { useEffect, useState } from "react";
import { CheckCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon, ServerIcon, DevicePhoneMobileIcon, CircleStackIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

const skillCategories = {
  languages: [
    { name: "C++", level: 90 },
    { name: "JavaScript", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "REST APIs", level: 92 },
  ],
  frontend: [
    { name: "React", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "Flutter", level: 82 },
  ],
  databases: [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 88 },
    { name: "PostgreSQL", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 88 },
    { name: "Docker", level: 75 },
    { name: "Android Studio", level: 80 },
  ],
  security: [
    { name: "JWT", level: 99 },
    { name: "Refresh Token", level: 80 },
    { name: "Encryption", level: 90 },
    { name: "API Security", level: 85 },
  ],
};

const tabs = [
  { id: "languages", name: "Languages", icon: CodeBracketIcon },
  { id: "backend", name: "Backend", icon: ServerIcon },
  { id: "frontend", name: "Frontend", icon: CodeBracketIcon },
  { id: "databases", name: "Databases", icon: CircleStackIcon },
  { id: "tools", name: "Tools & DevOps", icon: WrenchScrewdriverIcon },
  { id: "security", name: "Security", icon: ShieldCheckIcon },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("security");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-[#1e2530] to-[#0f1419]" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-400">
            Scalable architecture, database optimization, and high-performance engineering.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-purple-500/20 text-white border-b-2 border-purple-500"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Content */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          {activeTab === "security" ? (
            <div className="bg-[#0f1419] rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <ShieldCheckIcon className="h-8 w-8 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SECURITY</h3>
                  <p className="text-sm text-gray-500">4 MODULES DETECTED</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Progress Bars */}
                <div className="space-y-6">
                  {skillCategories.security.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Circular Progress */}
                <div className="grid grid-cols-2 gap-8">
                  {skillCategories.security.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center">
                      <div className="relative w-32 h-32">
                        <svg className="transform -rotate-90 w-32 h-32">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-gray-800"
                          />
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 56}`}
                            strokeDashoffset={`${2 * Math.PI * 56 * (1 - skill.level / 100)}`}
                            className="text-pink-500"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-bold text-white">{skill.level}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-gray-500 uppercase tracking-wider">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories[activeTab].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#1e2530]/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-purple-400" />
                      <span className="text-white text-lg font-medium">{skill.name}</span>
                    </div>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}