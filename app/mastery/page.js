'use client';
import React from 'react';

export default function MasteryPage() {
  const [openFaq, setOpenFaq] = React.useState(-1);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqs = [
    {
      question: "What makes Squad Staking Mastery different from other programs?",
      answer: "Squad Staking Mastery is the only program specifically designed for Solana validators focusing on squad staking. Our curriculum is built by industry experts, offers hands-on experience, and provides direct mentorship from successful validators."
    },
    {
      question: "How much time do I need to commit to the program?",
      answer: "The program requires 10-15 hours per week over a 12-week period. This includes time for learning, project work, mentorship sessions, and community participation. The schedule is flexible to accommodate different time zones."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "You'll work on real-world validator projects including setting up and optimizing squad staking operations, developing monitoring tools, and contributing to the validator ecosystem. All projects are designed to build practical skills and create tangible value."
    },
    {
      question: "Is the certification recognized in the industry?",
      answer: "Yes, our certification is recognized throughout the Solana ecosystem. Graduates are acknowledged as qualified squad staking validators, and many have gone on to secure prominent positions or successfully run their own validator operations."
    },
    {
      question: "Can I join if I'm new to validation?",
      answer: "While we welcome enthusiastic learners, the program requires at least 6 months of Solana validator experience. This ensures all participants can engage meaningfully with the advanced content and contribute to peer learning."
    },
    {
      question: "What support is available after graduation?",
      answer: "Graduates join our alumni network, gaining ongoing access to community resources, job opportunities, and the ability to mentor future cohorts. We also provide continued support through our community channels."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Squad Staking Mastery
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              An elite program for validators committed to mastering Solana squad staking. 
              Join a select group of professionals shaping the future of decentralized validation.
            </p>
            <div className="mt-10">
              <a 
                href="#apply" 
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Join the Program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Program Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Requirements Section */}
            <div className="space-y-6 hover:transform hover:translate-y-[-4px] transition-transform duration-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Program Requirements
              </h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experience running a Solana validator</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strong technical background in blockchain systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Commitment to contribute to the Solana ecosystem</span>
                </li>
              </ul>
            </div>

            {/* Program Structure Section */}
            <div className="space-y-6 hover:transform hover:translate-y-[-4px] transition-transform duration-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Program Structure
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phase 1: Foundation</h3>
                  <p className="mt-2">Technical setup and core concepts of squad staking</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phase 2: Implementation</h3>
                  <p className="mt-2">Hands-on project development and optimization</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phase 3: Mastery</h3>
                  <p className="mt-2">Advanced techniques and ecosystem contribution</p>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="space-y-6 hover:transform hover:translate-y-[-4px] transition-transform duration-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Program Timeline
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 font-semibold">Duration</div>
                  <div>12 weeks</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 font-semibold">Format</div>
                  <div>Self-paced with weekly mentorship</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 font-semibold">Projects</div>
                  <div>3 major milestones</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 font-semibold">Support</div>
                  <div>24/7 community access</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits and Outcomes Section */}
          <div className="mt-32 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">
              Program Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Professional Growth */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Professional Growth
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Advanced technical expertise in Solana validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Industry-recognized certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Leadership opportunities within the validator community</span>
                  </li>
                </ul>
              </div>

              {/* Network Access */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Network Access
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Direct mentorship from experienced validators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Exclusive access to validator community events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Ongoing support from program alumni</span>
                  </li>
                </ul>
              </div>

              {/* Career Opportunities */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Career Opportunities
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Priority access to validator job opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Opportunity to become a program mentor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>Enhanced visibility in the Solana ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="mt-20 bg-gradient-to-r from-blue-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12 shadow-lg transform hover:scale-[1.01] transition-transform duration-200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Expected Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Mastery</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">Deep understanding of squad staking mechanics and advanced validation techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Project Portfolio</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">Completed projects demonstrating practical implementation of advanced concepts</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <span className="text-white font-semibold">3</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Community Leadership</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">Established position as a thought leader in the validator community</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <span className="text-white font-semibold">4</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Professional Network</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">Strong connections within the Solana ecosystem and validator community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <a 
              href="#apply" 
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply for the Program
            </a>
          </div>
        </div>

        {/* Application Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Application Process
            </h2>

            {/* Steps Grid */}
            <div className="grid gap-8 mb-16">
              {/* Step 1 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Initial Application
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Submit your application through our online form. Include your validator experience, technical background, and motivation for joining the program.
                  </p>
                  <a 
                    href="https://forms.squadstaking.com/mastery-application" 
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                  >
                    Complete Application Form
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Technical Assessment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Complete a brief technical evaluation to demonstrate your understanding of Solana validation and squad staking concepts.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Interview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Selected candidates will be invited for a virtual interview with program mentors to discuss their goals and expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 lg:p-10 shadow-md transform hover:scale-[1.01] transition-transform duration-200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Minimum 6 months experience running a Solana validator</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Demonstrated knowledge of blockchain technology and distributed systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Ability to commit 10-15 hours per week to the program</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Willingness to contribute to the Solana validator community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-5 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 py-6 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Squad Staking Mastery
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 