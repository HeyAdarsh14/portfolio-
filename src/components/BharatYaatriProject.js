import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BharatYaatriProject() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectImages = [
    "/bharat/Screenshot 2026-02-03 153042.png",
    "/bharat/Screenshot 2026-02-03 153049.png",
    "/bharat/Screenshot 2026-02-03 153057.png",
    "/bharat/Screenshot 2026-02-03 153106.png",
    "/bharat/Screenshot 2026-02-03 153115.png",
    "/bharat/Screenshot 2026-02-03 153122.png",
    "/bharat/Screenshot 2026-02-03 153127.png",
    "/bharat/Screenshot 2026-02-03 153132.png",
    "/bharat/Screenshot 2026-02-03 153142.png",
    "/bharat/Screenshot 2026-02-03 153152.png",
    "/bharat/Screenshot 2026-02-03 153201.png",
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <div className="navbar bg-base-200 shadow-lg sticky top-0 z-50">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            ← Back to Portfolio
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-[40vh] bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="hero-content text-center">
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Bharat-Yaatri Driver App
            </h1>
            <p className="text-xl md:text-2xl text-base-content/80 mb-6">
              Internship Project | Full-Stack Development
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="badge badge-lg badge-primary">MongoDB</span>
              <span className="badge badge-lg badge-secondary">ReactJs</span>
              <span className="badge badge-lg badge-accent">Node.js</span>
              <span className="badge badge-lg badge-info">Express</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Section */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">
              About the Project
            </h2>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                The <strong>Bharat-Yaatri Driver App</strong> is a comprehensive 
                transportation management platform that I developed during my internship. 
                This project showcases real-world application of full-stack development skills.
              </p>
              <p className="leading-relaxed">
                The application streamlines the driver onboarding process, manages ride 
                requests, and provides real-time tracking capabilities for transportation 
                services across India.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-secondary pl-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Driver registration and profile management</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Real-time ride request notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>GPS-based location tracking and navigation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Earnings dashboard and trip history</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Secure authentication and data management</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Responsive design for mobile and desktop</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Summary */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-accent pl-4">
            Technical Implementation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">Frontend</h3>
                <ul className="space-y-2">
                  <li>• React.js for UI components</li>
                  <li>• State management with hooks</li>
                  <li>• Responsive design patterns</li>
                  <li>• Real-time data updates</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-secondary">Backend</h3>
                <ul className="space-y-2">
                  <li>• Node.js & Express server</li>
                  <li>• RESTful API architecture</li>
                  <li>• JWT authentication</li>
                  <li>• WebSocket for real-time</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-accent">Database</h3>
                <ul className="space-y-2">
                  <li>• MongoDB database</li>
                  <li>• Mongoose ODM</li>
                  <li>• Data validation schemas</li>
                  <li>• Optimized queries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Experience */}
        <div className="mb-16 bg-base-200 rounded-2xl p-8" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Internship Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg">
            <p className="leading-relaxed">
              This project was developed during my professional internship, where I gained 
              hands-on experience working in a collaborative development environment. I was 
              responsible for implementing core features, optimizing database queries, and 
              ensuring the application met production-quality standards.
            </p>
            <p className="leading-relaxed">
              Throughout the internship, I collaborated with senior developers, participated 
              in code reviews, and learned industry best practices for building scalable 
              web applications. This experience significantly enhanced my full-stack 
              development skills and professional workflow understanding.
            </p>
          </div>
        </div>

        {/* Screenshots Section */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Project Screenshots
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-xl overflow-hidden group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <figure className="aspect-video overflow-hidden">
                  <img
                    src={image}
                    alt={`Bharat Yaatri Screenshot ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What I Learned
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Full-Stack Development",
                description: "End-to-end application development from database to UI"
              },
              {
                title: "Team Collaboration",
                description: "Working with cross-functional teams and version control"
              },
              {
                title: "Real-time Systems",
                description: "Implementing WebSocket and live data synchronization"
              },
              {
                title: "Production Deployment",
                description: "Deploying and maintaining applications in production"
              }
            ].map((item, index) => (
              <div key={index} className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-lg">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
