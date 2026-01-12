"use client";

import Image from "next/image";
import {
  MdCheckCircle,
  MdSearch,
  MdArticle,
  MdGroup,
  MdHandshake,
} from "react-icons/md";

const steps = [
  {
    number: 1,
    title: "Define your Organization",
    description:
      "Before going any further, we recommend defining your company or organization and its need for ISO certification. Since every organization will have its own and unique reason to get an ISO certification. Also, there are many types of ISO certifications available. So it is better to know which certification aligns perfectly with your organization or company.",
  },
  {
    number: 2,
    title: "Tailoring the documents in terms of Standard and Goal",
    description:
      "Before making any changes or drafting a new document, you must have a Quality Manual for the successful acquisition of ISO certification. Having a Quality Manual is the basic step of getting an ISO certificate. Quality Manual is nothing but obviously the document that encloses the quality systems of an organization.",
  },
  {
    number: 3,
    title: "Training",
    description:
      "Training the employees of your organization is the next step as it will give them the opportunity to adapt to the new set of rules and system which will be followed once the ISO certification is acquired. Training the employees does not mean it has to be rigorous to each and every employee in the company.",
  },
  {
    number: 4,
    title: "Hiring a Certification Body",
    description:
      "This is the most important process once the above steps are successfully implemented. The next step is to get your documents audited in order to get the ISO certification for your organization or company. We, Wizms, have helped numerous companies and industries to get the ISO Certification for the past 10 years.",
  },
];

export default function HowToGetISO() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-20"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Get ISO Certification in Dubai for Your Organization?
          </h2>
          <p className="text-xl text-gray-600">
            Getting an ISO certification is easy. Follow these 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              {/* Step Number Circle */}
              <div className="shrink-0">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{ backgroundColor: "#ee991a" }}
                >
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Infographic Section with Tailwind */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            How to Get ISO Certification - Process
          </h3>

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {/* Step 1 - Define your Needs */}
            <div className="relative">
              <div className="bg-linear-to-r from-blue-500 to-cyan-400 rounded-full p-6 flex items-center gap-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="shrink-0">
                  <span className="text-white font-bold text-3xl">STEP 01</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white font-semibold text-xl italic">
                    Define your Needs
                  </p>
                </div>
                <div className="shrink-0 text-white text-4xl">
                  <MdSearch />
                </div>
              </div>
            </div>

            {/* Step 2 - Tailoring the Documents */}
            <div className="relative">
              <div className="bg-linear-to-r from-pink-500 to-purple-500 rounded-full p-6 flex items-center gap-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="shrink-0">
                  <span className="text-white font-bold text-3xl">STEP 02</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white font-semibold text-xl italic">
                    Tailoring the Documents
                  </p>
                </div>
                <div className="shrink-0 text-white text-4xl">
                  <MdArticle />
                </div>
              </div>
            </div>

            {/* Step 3 - Training the Employees */}
            <div className="relative">
              <div className="bg-linear-to-r from-purple-600 to-blue-500 rounded-full p-6 flex items-center gap-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="shrink-0">
                  <span className="text-white font-bold text-3xl">STEP 03</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white font-semibold text-xl italic">
                    Training the Employees
                  </p>
                </div>
                <div className="shrink-0 text-white text-4xl">
                  <MdGroup />
                </div>
              </div>
            </div>

            {/* Step 4 - Hiring an ISO Agency */}
            <div className="relative">
              <div className="bg-linear-to-r from-green-500 to-cyan-400 rounded-full p-6 flex items-center gap-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="shrink-0">
                  <span className="text-white font-bold text-3xl">STEP 04</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white font-semibold text-xl italic">
                    Hiring an ISO Agency
                  </p>
                </div>
                <div className="shrink-0 text-white text-4xl">
                  <MdHandshake />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yellow CTA Section */}
        <div
          className="rounded-lg p-12 text-center"
          style={{ backgroundColor: "#ee991a" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your ISO Certification Journey?
          </h3>
          <p className="text-lg text-white mb-8 opacity-90">
            Want to know how to get ISO certification in UAE? Getting an ISO
            certification is easy. Contact us for ISO certification. Wizms, one
            of the best ISO certification companies in UAE offers ISO
            certification consultation service in all of UAE encompassing from
            Dubai to Fujairah.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+971552774123"
              className="px-8 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: "white", color: "#ee991a" }}
            >
              Call Us: +971 55 277 4123
            </a>
            <a
              href="mailto:mahendran@wizms.net"
              className="px-8 py-3 rounded-lg font-semibold border-2 border-white text-white transition-colors hover:opacity-80"
            >
              Email: mahendran@wizms.net
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
