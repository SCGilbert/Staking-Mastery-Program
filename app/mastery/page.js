export default function MasteryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Squad Staking Mastery
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              An elite program for validators committed to mastering Solana squad staking. 
              Join a select group of professionals shaping the future of decentralized validation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Program Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Requirements Section */}
            <div className="space-y-6">
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
            <div className="space-y-6">
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
            <div className="space-y-6">
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a 
              href="#apply" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply for the Program
            </a>
          </div>
        </div>

        {/* Application Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
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
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
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
      </main>

      {/* Footer Section */}
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Squad Staking Mastery
          </div>
        </div>
      </footer>
    </div>
  );
} 