import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "Bharat-Yaatri-Driver app",
    href: "/projects/bharat-yaatri",
    isInternal: true,
    imageSrc: "/project1.png",
    tags: ["MongoDB", "ReactJs", "Node.js"],
    description: "Internship Project | Full-Stack Development",
    status: null,
    featured: true,
  },
  {
    id: 2,
    name: "Coming Soon",
    href: "#",
    imageSrc: "https://static.vecteezy.com/system/resources/previews/000/429/651/original/vector-coming-soon-message-illuminated-with-light-projector.jpg",
    tags: [],
    description: "",
    status: "Updating Soon",
  },
  {
    id: 3,
    name: "Coming Soon",
    href: "#",
    imageSrc: "https://static.vecteezy.com/system/resources/previews/000/429/651/original/vector-coming-soon-message-illuminated-with-light-projector.jpg",
    tags: [],
    description: "",
    status: "Updating Soon",
  },
  {
    id: 4,
    name: "Coming Soon",
    href: "#",
    imageSrc: "https://static.vecteezy.com/system/resources/previews/000/429/651/original/vector-coming-soon-message-illuminated-with-light-projector.jpg",
    tags: [],
    description: "",
    status: "Updating Soon",
  },
  {
    id: 5,
    name: "Coming Soon",
    href: "#",
    imageSrc: "https://static.vecteezy.com/system/resources/previews/000/429/651/original/vector-coming-soon-message-illuminated-with-light-projector.jpg",
    tags: [],
    description: "",
    status: "Updating Soon",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects" className="bg-gradient-to-b from-[#1e2530] to-[#2d3748] py-4">
      <div className="mx-auto text-center max-w-7xl px-6 py-2 sm:px-6 sm:py-4 lg:px-8">
        <p className="text-5xl font-bold tracking-tight text-white mb-2">
          Projects
        </p>
        <p className="mt-1 text-gray-400 mb-4">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            project.isInternal ? (
              <Link
                key={project.id}
                to={project.href}
                className={`group relative bg-[#252d3d] border rounded-3xl overflow-hidden hover:border-purple-500/50 hover:transform hover:scale-[1.02] transition-all duration-300 ${
                  project.featured ? "border-purple-500/40 shadow-lg shadow-purple-500/10" : "border-purple-500/20"
                }`}
                data-aos="fade-up"
                aria-label={`Open project details for ${project.name}`}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  {project.featured && (
                    <div className="mb-4 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
                      Featured Case Study
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  {project.status && (
                    <div className="mt-4 flex items-center gap-2 text-purple-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{project.status}</span>
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <div
                key={project.id}
                className="group relative bg-[#252d3d] border border-purple-500/20 rounded-3xl overflow-hidden opacity-90"
                data-aos="fade-up"
                aria-label={`${project.name} coming soon`}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-purple-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{project.status}</span>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}