import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden bg-[#1e2530] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7 text-gray-400"><a href="https://sam-folio.vercel.app">Get to know more</a></h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-white">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300" data-aos="fade-right">
                Hi, I'm <span className="font-bold text-purple-400">Adarsh Gupta</span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300" data-aos="fade-right">
                I am a <span className="font-semibold text-purple-400">Problem Solver</span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300" data-aos="fade-right">
                I am an Open Source Enthusiast and Agile Learner, always eager to take on new challenges. Passionate about contributing to innovative collaborative projects, I actively engage in the open-source community. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-400 italic" data-aos="fade-right">
                "Code is like humor. When you have to explain it, it's bad." - Building intuitive solutions is my passion.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] border-2 border-purple-500/20 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://fastly.picsum.photos/id/473/5000/3333.jpg?hmac=OrrE0aUqLbLCJ9PAlSn0dIRHjOnuuuev9IjuO3PGZf8 "
            alt="Person"
          />
        </div>
      </div>
    </div>
  );
}