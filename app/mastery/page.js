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
                In ancient Greece, masters were more than just experts—they were stewards of knowledge who built thriving communities of practice. They conducted groundbreaking research, established specialized guilds, and most importantly, mentored the next generation to ensure their craft would endure and evolve.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Today's Ethereum Staking Masters carry this torch into the digital age. They're pioneering researchers, educators, and builders who are shaping the future of decentralized validation. Through their projects and mentorship, they're not just advancing the technology—they're nurturing a self-sustaining community of staking expertise.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Join us in building this legacy. Become a master who will help guide the next generation of Ethereum's validation network.
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

      {/* Benefits of Mastery Section */}
      <section className="w-full bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              The Path to Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Becoming a Staking Master opens doors to unique opportunities and recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Industry Recognition */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 mb-6 text-[#2fe4ab]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Industry Recognition</h3>
              <p className="text-gray-600">
                Earn a respected credential that validates your expertise in Ethereum staking. Your achievements will be showcased to the wider Ethereum community.
              </p>
            </div>

            {/* Project Support */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 mb-6 text-[#2fe4ab]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Project Support</h3>
              <p className="text-gray-600">
                Receive guidance and resources to bring your innovative staking projects to life. Your work will be featured and promoted across our platforms.
              </p>
            </div>

            {/* Community Leadership */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 mb-6 text-[#2fe4ab]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Community Leadership</h3>
              <p className="text-gray-600">
                Shape the future of Ethereum staking by mentoring the next generation. Take an active role in growing and strengthening the staking ecosystem.
              </p>
            </div>

            {/* Network Access */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 mb-6 text-[#2fe4ab]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Network Access</h3>
              <p className="text-gray-600">
                Connect with industry leaders and fellow masters. Gain exclusive access to resources, opportunities, and collaborative projects in the Ethereum ecosystem.
              </p>
            </div>

            {/* Professional Growth */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 mb-6 text-[#2fe4ab]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Professional Growth</h3>
              <p className="text-gray-600">
                Develop advanced skills through hands-on projects and expert guidance. Build a portfolio that demonstrates your expertise to the wider blockchain industry.
              </p>
            </div>

            {/* Program Impact */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 mb-6 text-[#2fe4ab]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Program Impact</h3>
              <p className="text-gray-600">
                Make a lasting contribution to Ethereum's decentralization. Your work will help secure the network and advance the adoption of staking technology.
              </p>
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

      {/* How it Works Section - Moved up and restyled */}
      <section className="w-full bg-white py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-16 text-center">
            How does it work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Apply Step */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#2fe4ab] bg-opacity-10 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#2fe4ab]">1</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Apply</h3>
              <p className="text-gray-800">
                Submit your application with details about your background in the Ethereum ecosystem and your vision for advancing staking adoption.
              </p>
            </div>

            {/* Interview Step */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#2fe4ab] bg-opacity-10 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#2fe4ab]">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Interview</h3>
              <p className="text-gray-800">
                Selected candidates will discuss their skills, experience, and project vision with our team and previous Staking Masters.
              </p>
            </div>

            {/* Lead Step */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#2fe4ab] bg-opacity-10 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#2fe4ab]">3</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Lead</h3>
              <p className="text-gray-800">
                Accepted Masters will spearhead their chosen project with guidance from the community and support from previous cohorts.
              </p>
            </div>
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
              <h3 className="text-2xl font-bold text-black mb-6">Your Journey</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#2fe4ab] pl-4">
                  <h3 className="font-semibold text-gray-900">Plan</h3>
                  <p className="mt-2 text-gray-600">Transform your vision into an actionable project board with clear milestones and KPIs. Set the foundation for your project's success.</p>
                </div>
                <div className="border-l-4 border-[#2fe4ab] pl-4">
                  <h3 className="font-semibold text-gray-900">Build</h3>
                  <p className="mt-2 text-gray-600">Develop your project with monthly check-ins and guidance from previous Staking Masters. Review progress and adjust course as needed.</p>
                </div>
                <div className="border-l-4 border-[#2fe4ab] pl-4">
                  <h3 className="font-semibold text-gray-900">Showcase</h3>
                  <p className="mt-2 text-gray-600">Present your completed project on the Staking Mastery platform and explore opportunities for retroactive funding through <a href="https://blog.obol.org/1-percent-for-decentralisation/" className="text-[#2fe4ab] hover:underline" target="_blank" rel="noopener noreferrer">Obol's 1% for Decentralisation</a> program.</p>
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