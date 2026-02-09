import { useEffect } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const credentials = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    year: "2025",
    certified: true,
    verifyLink: "https://drive.google.com/drive/folders/1BpSoqDLzNlc2M1kFnPLQ1x9VHiS0Nmiu"
  },
];

export default function Credentials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="credentials" className="py-20 bg-gradient-to-b from-[#2d3748] to-[#1e2530]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider font-mono">
              Verified Credentials
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={credential.id}
              className="bg-black/40 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-gray-800 rounded-lg flex-shrink-0">
                  <ShieldCheckIcon className={`w-8 h-8 ${credential.certified ? 'text-green-400' : 'text-gray-400'}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {credential.title}
                        {credential.certified && (
                          <span className="ml-3 px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded uppercase">
                            Certified
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-500 text-sm">{credential.organization}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                      {credential.year}
                    </div>
                    <a
                      href={credential.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-wider"
                    >
                      Verify
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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
