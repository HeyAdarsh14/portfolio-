import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import pfp from "../avatar2.png";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const navigation = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Achievements", id: "achievements" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
];

export default function Hero() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <header className="fixed bg-[#1e2530] shadow-2xl shadow-neutral inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">A</span>
            </div>
            <p className="-m-1.5 p-1.5 font-bold text-xl text-white">
              Adarsh Gupta
            </p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-medium leading-6 cursor-pointer text-gray-300 hover:text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
            <button onClick={() => window.open('https://github.com/HeyAdarsh14', '_blank')} className="px-4 py-2 border-2 border-purple-500 text-purple-400 rounded-full text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">
              Github Profile
            </button>
            <button onClick={() => window.open('https://codolio.com/profile/Heyadarsh', '_blank')} className="px-4 py-2 border-2 border-purple-500 text-purple-400 rounded-full text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">
              Coding Profile
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto bg-[#1e2530] px-6 py-6 sm:max-w-sm shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5 flex gap-x-2">
                <button onClick={() => window.open('https://github.com/HeyAdarsh14', '_blank')} className="px-3 py-1.5 border-2 border-purple-500 text-purple-400 rounded-full text-xs font-medium">
                  Github Profile
                </button>
                <button onClick={() => window.open('https://codolio.com/profile/Heyadarsh', '_blank')} className="px-3 py-1.5 border-2 border-purple-500 text-purple-400 rounded-full text-xs font-medium">
                  Coding Profile
                </button>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="py-24 sm:py-32 bg-[#1e2530] min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 py-32 items-center"
            data-aos="zoom-in"
          >
            <div className="order-2 lg:order-1">
              <div className="text-left">
                <div className="text-3xl font-normal text-white mb-2">
                  Hi, I am
                </div>
                <h1 className="text-6xl font-bold text-white mb-6">
                  Adarsh Gupta
                </h1>
                <p className="text-3xl mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-medium">
                    I am a <TypeAnimation
                      sequence={[
                        "Fullstack Web Developer",
                        2000,
                        "Android Developer",
                        2000,
                        "Problem Solver",
                        2000,
                      ]}
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-4 max-w-2xl">
                  I'm a software engineer with strong fundamentals in data structures and algorithms and hands-on experience in full-stack and backend development. I enjoy building real-world applications that focus on clean architecture, reliability, and long-term maintainability.
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-4 max-w-2xl">
                  I've worked on a production-level application deployed on the Google Play Store with 10,000+ downloads, where I contributed to backend services, REST APIs, and frontend integration. This experience helped me understand real-world engineering challenges such as system consistency, error handling, and building features used by real users.
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
                  I continuously strengthen my problem-solving skills through DSA practice and actively participate in hackathons and collaborative projects. I'm driven by learning through building, refining system design, and growing as a well-rounded software engineer.
                </p>
                <div className="flex items-start gap-x-4">
                  <button onClick={() => window.open('https://drive.google.com/drive/folders/1B2wITXwWCxsamGDWFyoG732ZeNgLMBUc', '_blank')} className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                    Check Resume
                  </button>
                </div>
              </div>
            </div>
            <div className="grid justify-center items-center order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
                <img
                  src={pfp}
                  alt="Adarsh Gupta"
                  className="relative w-96 h-96 rounded-full object-cover drop-shadow-2xl border-4 border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}