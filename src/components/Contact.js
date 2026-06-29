import { useEffect } from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const contactEmail = "adar3165@gmail.com";

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const senderName = formData.get("sender-name") || "";
    const senderEmail = formData.get("sender-email") || "";
    const subject = formData.get("payload-subject") || "Portfolio inquiry";
    const message = formData.get("payload-data") || "";

    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
    event.currentTarget.reset();
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-[#0f1419] to-black" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Open to internship opportunities, collaborations, and technical discussions. Actively seeking{" "}
            <span className="text-white font-semibold">Summer 2026/27 SDE internship roles</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Communication Stack */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-mono">COMMUNICATION STACK</p>
              
              {/* Email Card */}
              <div 
                className="bg-[#0f1419] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                role="button"
                aria-label={`Contact via email at ${contactEmail}`}
                tabIndex={0}
                onClick={() => window.open(`mailto:${contactEmail}`, '_blank')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open(`mailto:${contactEmail}`, '_blank');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <EnvelopeIcon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-mono mb-1">SYSTEM.MAIL</p>
                      <p className="text-white font-medium">{contactEmail}</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Location Card */}
              <div 
                className="bg-[#0f1419] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                role="button"
                aria-label="Location: Delhi, India"
                tabIndex={0}
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Delhi,India', '_blank')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open('https://www.google.com/maps/search/?api=1&query=Delhi,India', '_blank');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <MapPinIcon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-mono mb-1">SYSTEM.ORIGIN</p>
                      <p className="text-white font-medium">Delhi, India</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Network Nodes */}
            <div className="space-y-4 pt-8">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-mono">NETWORK NODES</p>
              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="https://github.com/HeyAdarsh14" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Adarsh's GitHub profile"
                  className="bg-[#0f1419] border border-gray-800 rounded-xl p-6 hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <p className="text-xs uppercase tracking-wider text-white font-mono">GITHUB</p>
                </a>
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Adarsh's LinkedIn profile"
                  className="bg-[#0f1419] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <p className="text-xs uppercase tracking-wider text-white font-mono">LINKEDIN</p>
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Adarsh's Twitter profile"
                  className="bg-[#0f1419] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <p className="text-xs uppercase tracking-wider text-white font-mono">TWITTER</p>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#0f1419] border border-gray-800 rounded-2xl p-8" data-aos="fade-left">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400 text-sm">Have a question or want to work together? Fill out the form below.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sender-name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    name="sender-name"
                    id="sender-name"
                    placeholder="Enter your name"
                    className="block bg-black/50 w-full rounded-lg border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="sender-email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    name="sender-email"
                    id="sender-email"
                    placeholder="Enter your email"
                    className="block bg-black/50 w-full rounded-lg border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="payload-subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  name="payload-subject"
                  id="payload-subject"
                  placeholder="What's this about?"
                  className="block bg-black/50 w-full rounded-lg border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="payload-data" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="payload-data"
                  required
                  id="payload-data"
                  rows={5}
                  placeholder="Write your message here..."
                  className="block bg-black/50 w-full rounded-lg border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}