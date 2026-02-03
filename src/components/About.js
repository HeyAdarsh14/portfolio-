import { useEffect } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7"><a href="https://sam-folio.vercel.app">Get to know more</a></h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                I'm Adarsh Gupta, a software engineer with strong fundamentals in data structures and algorithms and hands-on experience in full-stack and backend development. I enjoy building real-world applications that prioritize clean architecture, reliability, and long-term maintainability.
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                During my internship experience, I worked on a production-level application deployed on the Google Play Store with over 10,000 downloads, contributing to backend services, REST APIs, and frontend integration. This experience helped me understand real-world challenges such as system consistency, error handling, and delivering features used by real users.
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                I continuously improve my problem-solving skills through DSA practice and enjoy participating in hackathons and collaborative projects. I'm driven by learning through building, refining system design, and growing as a well-rounded software engineer.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://fastly.picsum.photos/id/473/5000/3333.jpg?hmac=OrrE0aUqLbLCJ9PAlSn0dIRHjOnuuuev9IjuO3PGZf8 "
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                  Strong foundation in data structures and algorithms with consistent problem-solving experience in C++.
                </p>
                <p className="mt-3 list-item list-inside">
                  Hands-on experience in full-stack web and mobile application development using modern backend technologies.
                </p>
                <p className="mt-3 list-item list-inside">
                  Backend & Frontend Engineering Intern, where I worked on a production-ready application deployed on the Google Play Store with 10,000+ downloads, contributing to REST APIs, application workflows, and real user-facing features.
                </p>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                  <strong>B.Tech in Computer Science & Engineering</strong><br/>
                  KIET Group of Institutions, Ghaziabad<br/>
                  2023 – 2027 | CGPA: 8.0 / 10
                </p>
                <p className="mt-3 list-item list-inside">
                  <strong>Senior Secondary & Secondary Education (CBSE)</strong><br/>
                  Kendriya Vidyalaya<br/>
                  Class XII – 2022 | Class X – 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}