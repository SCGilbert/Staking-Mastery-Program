'use client';
import React from 'react';
import Image from 'next/image';

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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navigation */}
      <header className="w-full bg-white">
        {/* Main Navigation */}
        <nav className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo and Hash */}
              <div className="flex items-center space-x-4">
                <div className="w-24">
                  <Image
                    src="/Obol_banner_logo.avif"
                    alt="Obol"
                    width={96}
                    height={32}
                    priority
                  />
                </div>
                <span className="text-gray-600">#SquadStaking</span>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-[#2fe4ab] transition-colors">
                  Opportunities
                </a>
                <a href="#" className="text-gray-600 hover:text-[#2fe4ab] transition-colors">
                  Mastery Program
                </a>
                <a href="#" className="text-gray-600 hover:text-[#2fe4ab] transition-colors">
                  Techne Credential
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Purple Banner */}
        <div className="bg-[#9166e4] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center text-white space-x-2">
              <Image
                src="/obol-icon.jpg"
                alt="Obol Icon"
                width={24}
                height={24}
                className="text-white"
              />
              <span>Obol Contributions Program is live!</span>
            </div>
          </div>
        </div>
      </header>

      {/* Remove margin-top since header is not fixed anymore */}
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-8 tracking-tight">
              Achieve<br />Staking Mastery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              The Staking Mastery program is a carefully curated cohort based program designed to empower and promote individuals who are passionate about advancing staking adoption through research, development and/or education.
            </p>
          </div>
        </div>
      </section>

      {/* What's a Staking Master Section */}
      <section className="w-full bg-[#2fe4ab] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
                What's a Staking Master?
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                In ancient Greece, masters were esteemed for their expertise and their role as mentors. A master would guide an apprentice through rigorous training and intellectual development. They often led performed research, led workshops or built entire guilds.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                We're empowering the next generation of masters, the Solana Squad Staking Masters.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/whats_a_staking_master_hero.avif"
                alt="Ancient Greek Master Statue"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Cohort #1 Section */}
      <section className="w-full bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Meet Cohort #1
            </h2>
            <p className="text-xl text-gray-600">
              The first ever set of Ethereum Staking Masters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Chuy Garcia */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/chuygarcia.avif"
                  alt="Chuy Garcia"
                  width={256}
                  height={256}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Chuy Garcia</h3>
              <p className="text-gray-600">
                Pioneering Ethereum staking in Latin America with Rancho Stake. Leading a collective of home operators to strengthen network decentralization across Mexico and beyond.
              </p>
            </div>

            {/* Samuel Chong */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/samuelchong.avif"
                  alt="Samuel Chong"
                  width={256}
                  height={256}
                  className="rounded-full]"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Samuel Chong</h3>
              <p className="text-gray-600">
                Spearheading Ethereum home staking in Asia through educational workshops and comprehensive guides, and more. Empowering individuals, one lesson at a time.
              </p>
            </div>

            {/* StakeCat */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/stakecat.avif"
                  alt="StakeCat"
                  width={256}
                  height={256}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">StakeCat</h3>
              <p className="text-gray-600">
                Operating professional node services with a focus on decentralisation. Pioneering distributed validator technology to enhance Ethereum's resilience and accessibility.
              </p>
            </div>

            {/* David Uzochukwu */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/daviduzochukwu.avif"
                  alt="David Uzochukwu"
                  width={256}
                  height={256}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">David Uzochukwu</h3>
              <p className="text-gray-600">
                Leading NodeBridge Africa and advocating for staking by educating individuals and hosting workshops across the continent to help others run nodes for true decentralisation.
              </p>
            </div>

            {/* Atomic Whale */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/atomicwhale.avif"
                  alt="Atomic Whale"
                  width={256}
                  height={256}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Atomic Whale</h3>
              <p className="text-gray-600">
                Crafting comprehensive guides to make Squad Staking accessible to all. Empowering the ETH community education and support for decentralised node operation.
              </p>
            </div>

            {/* Hanniabu */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/hanniabu.png"
                  alt="Hanniabu"
                  width={256}
                  height={256}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Hanniabu</h3>
              <p className="text-gray-600">
                Developing crucial tools for Ethereum transparency, including a Staking Risk Dashboard. Creating websites and resources to democratise information access.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#learn-more"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-[#2fe4ab] hover:bg-[#00E693] rounded-full transition-colors duration-300"
            >
              Learn More about Cohort #1
            </a>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="w-full bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Requirements Card */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#2fe4ab] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-black mb-6">What We're Looking For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#2fe4ab] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Passionate individuals committed to strengthening Ethereum's security and decentralization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#2fe4ab] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Self-driven learners interested in distributed systems and blockchain technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#2fe4ab] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Dedication to building meaningful projects that advance Ethereum staking adoption</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#2fe4ab] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Eagerness to contribute to and learn from the Ethereum staking community</span>
                </li>
              </ul>
            </div>

            {/* Structure Card */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#2fe4ab] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-black mb-6">Program Structure</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#2fe4ab] pl-4">
                  <h3 className="font-semibold text-gray-900">Phase 1: Foundation</h3>
                  <p className="mt-2 text-gray-600">Technical setup and core concepts of squad staking</p>
                </div>
                <div className="border-l-4 border-[#2fe4ab] pl-4">
                  <h3 className="font-semibold text-gray-900">Phase 2: Implementation</h3>
                  <p className="mt-2 text-gray-600">Hands-on project development and optimization</p>
                </div>
                <div className="border-l-4 border-[#2fe4ab] pl-4">
                  <h3 className="font-semibold text-gray-900">Phase 3: Mastery</h3>
                  <p className="mt-2 text-gray-600">Advanced techniques and ecosystem contribution</p>
                </div>
              </div>
            </div>

            {/* Timeline Card */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#2fe4ab] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-black mb-6">Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">12 weeks</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 font-semibold text-gray-900">Format</div>
                  <div className="text-gray-600">Self-paced with weekly mentorship</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 font-semibold text-gray-900">Projects</div>
                  <div className="text-gray-600">3 major milestones</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 font-semibold text-gray-900">Support</div>
                  <div className="text-gray-600">24/7 community access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full bg-[#2fe4ab] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-16 text-center">
            How does it work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Apply Step */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                <span className="text-3xl font-bold text-[#2fe4ab]">1</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Apply</h3>
              <p className="text-gray-800">
                For those who are passionate about advancing staking adoption through research, development and/or education.
              </p>
            </div>

            {/* Interview Step */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                <span className="text-3xl font-bold text-[#2fe4ab]">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Interview</h3>
              <p className="text-gray-800">
                Outstanding applicants will be interviewed to discuss their unique skills and vision for advancing staking adoption.
              </p>
            </div>

            {/* Lead Step */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                <span className="text-3xl font-bold text-[#2fe4ab]">3</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Lead</h3>
              <p className="text-gray-800">
                Selected Masters will lead a project of their choosing, with support and recognition from the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="w-full bg-white py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
            Apply for Cohort #2
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            This is your chance to leave your mark on Solana forever.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-[#2fe4ab] hover:bg-[#00E693] rounded-full transition-colors duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#2fe4ab] transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center bg-white"
                >
                  <span className="text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#2fe4ab] transform transition-transform duration-300 ${
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
                  <div className="px-8 py-6 bg-gray-50 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Squad Staking Mastery
          </div>
          <div className="flex space-x-8 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-[#2fe4ab] transition-colors">
              Discord
            </a>
            <a href="#" className="text-gray-600 hover:text-[#2fe4ab] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-[#2fe4ab] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 