"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");
  const [activeCaseStudy, setActiveCaseStudy] = useState("netflix");

  const sectionRefs = {
    intro: useRef<HTMLDivElement>(null),
    what: useRef<HTMLDivElement>(null),
    principles: useRef<HTMLDivElement>(null),
    lifecycle: useRef<HTMLDivElement>(null),
    tools: useRef<HTMLDivElement>(null),
    benefits: useRef<HTMLDivElement>(null),
    "case-study": useRef<HTMLDivElement>(null),
    summary: useRef<HTMLDivElement>(null),
  };

  const sections = [
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What is DevOps" },
    { id: "principles", label: "Core Principles" },
    { id: "lifecycle", label: "DevOps Lifecycle" },
    { id: "tools", label: "DevOps Tools" },
    { id: "benefits", label: "Benefits & Challenges" },
    { id: "case-study", label: "Case Study" },
    { id: "summary", label: "Summary & Q&A" },
  ];

  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionBottom = sectionTop + ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">D</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                DevOps Demo
              </span>
            </div>
            <div className="hidden md:flex space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    activeSection === section.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.intro} className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
              DevOps Assignment Presentation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Understanding
              </span>
              <br />
              <span className="text-white">DevOps</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Bridging Development and Operations for Faster, Better Software Delivery
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection("what")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Start Learning
              </button>
              <button
                onClick={() => scrollToSection("lifecycle")}
                className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-all"
              >
                View Lifecycle
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: "🚀", title: "Speed", desc: "Rapid delivery cycles" },
              { icon: "🔄", title: "Automation", desc: "Eliminate manual tasks" },
              { icon: "📊", title: "Monitoring", desc: "Real-time insights" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is DevOps */}
      <section ref={sectionRefs.what} className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What is DevOps?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">
                  Definition
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  DevOps is a set of practices that combines <span className="text-purple-400 font-semibold">software development (Dev)</span> and <span className="text-pink-400 font-semibold">IT operations (Ops)</span> to shorten the systems development life cycle and provide continuous delivery with high software quality.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-pink-400">
                  Why DevOps Emerged
                </h3>
                <div className="space-y-3">
                  {[
                    { problem: "Siloed Teams", desc: "Development and Operations worked in isolation" },
                    { problem: "Slow Releases", desc: "Months between deployments causing delays" },
                    { problem: "Manual Processes", desc: "Error-prone hand-coded deployments" },
                    { problem: "Poor Communication", desc: "Lack of collaboration leading to failures" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-slate-800/50 rounded-lg p-4 border-l-4 border-red-500">
                      <div>
                        <h4 className="font-semibold text-red-400">{item.problem}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold mb-6 text-center">The Traditional Gap</h3>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <span className="text-3xl">💻</span>
                    </div>
                    <p className="font-semibold">Dev Team</p>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-700 rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-slate-900 px-2 text-red-500 text-2xl">❌</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <span className="text-3xl">⚙️</span>
                    </div>
                    <p className="font-semibold">Ops Team</p>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🔄</div>
                  <p className="text-gray-400">The DevOps Solution</p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-xl p-6 text-center">
                  <div className="flex justify-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚙️</span>
                    </div>
                  </div>
                  <p className="mt-4 font-semibold">Unified Team = Faster Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section ref={sectionRefs.principles} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Core Principles
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The fundamental pillars that drive DevOps success
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔄",
                title: "CI/CD Pipeline",
                color: "from-blue-500 to-cyan-500",
                desc: "Continuous Integration & Continuous Deployment automate code integration and delivery",
                points: ["Automated testing", "Faster releases", "Reduced errors"]
              },
              {
                icon: "🤖",
                title: "Automation",
                color: "from-purple-500 to-pink-500",
                desc: "Eliminate manual, repetitive tasks to increase efficiency and consistency",
                points: ["Infrastructure as Code", "Automated workflows", "Self-service environments"]
              },
              {
                icon: "👥",
                title: "Collaboration",
                color: "from-green-500 to-emerald-500",
                desc: "Break down silos between teams for shared responsibility and goals",
                points: ["Shared ownership", "Open communication", "Cross-functional teams"]
              },
              {
                icon: "📊",
                title: "Monitoring & Feedback",
                color: "from-orange-500 to-red-500",
                desc: "Real-time insights into performance and user experience",
                points: ["Application monitoring", "Log aggregation", "Alert management"]
              },
              {
                icon: "🔒",
                title: "Security (DevSecOps)",
                color: "from-yellow-500 to-orange-500",
                desc: "Integrate security throughout the development lifecycle",
                points: ["Shift-left security", "Compliance automation", "Vulnerability scanning"]
              },
              {
                icon: "📦",
                title: "Microservices",
                color: "from-indigo-500 to-purple-500",
                desc: "Architectural approach for scalable, independent services",
                points: ["Containerization", "Service mesh", "API gateways"]
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{principle.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-400 mb-4">{principle.desc}</p>
                <ul className="space-y-2">
                  {principle.points.map((point, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Lifecycle */}
      <section ref={sectionRefs.lifecycle} className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              The DevOps Lifecycle
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            An infinite loop of development, delivery, and operations
          </p>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "✍️", title: "Plan", color: "bg-blue-600", desc: "Define goals and track progress" },
                { icon: "🏗️", title: "Code", color: "bg-purple-600", desc: "Write and review code" },
                { icon: "🔨", title: "Build", color: "bg-pink-600", desc: "Compile and package" },
                { icon: "🧪", title: "Test", color: "bg-orange-600", desc: "Automated quality checks" },
                { icon: "📦", title: "Release", color: "bg-red-600", desc: "Deploy to production" },
                { icon: "🚀", title: "Deploy", color: "bg-green-600", desc: "Make available to users" },
                { icon: "⚙️", title: "Operate", color: "bg-cyan-600", desc: "Manage infrastructure" },
                { icon: "📊", title: "Monitor", color: "bg-indigo-600", desc: "Observe performance" },
              ].map((phase, idx) => (
                <div key={idx} className={`${phase.color} rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer`}>
                  <div className="text-4xl mb-2">{phase.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{phase.title}</h3>
                  <p className="text-sm opacity-80">{phase.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">The Infinity Loop</h3>
              <div className="flex items-center justify-center space-x-8 text-lg">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  <span>Continuous Planning</span>
                </div>
                <span className="text-2xl">⟷</span>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  <span>Continuous Integration</span>
                </div>
                <span className="text-2xl">⟷</span>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  <span>Continuous Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section ref={sectionRefs.tools} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Popular DevOps Tools
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Essential tools for each stage of the DevOps pipeline
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Source Control",
                icon: "📚",
                tools: ["Git", "GitHub", "GitLab", "Bitbucket"],
                color: "border-orange-500"
              },
              {
                category: "CI/CD",
                icon: "🔄",
                tools: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"],
                color: "border-blue-500"
              },
              {
                category: "Containers",
                icon: "📦",
                tools: ["Docker", "Kubernetes", "Helm", "Podman"],
                color: "border-blue-400"
              },
              {
                category: "Infrastructure",
                icon: "☁️",
                tools: ["Terraform", "Ansible", "Puppet", "Chef"],
                color: "border-purple-500"
              },
              {
                category: "Monitoring",
                icon: "📊",
                tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
                color: "border-green-500"
              },
              {
                category: "Cloud Platforms",
                icon: "🌥️",
                tools: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
                color: "border-cyan-500"
              },
              {
                category: "Container Orchestration",
                icon: "🐳",
                tools: ["Kubernetes", "Docker Swarm", "OpenShift", "EKS"],
                color: "border-indigo-500"
              },
              {
                category: "Testing",
                icon: "🧪",
                tools: ["Selenium", "JUnit", "Postman", "Cypress"],
                color: "border-pink-500"
              },
            ].map((category, idx) => (
              <div key={idx} className={`bg-slate-800/50 border-t-4 ${category.color} rounded-xl p-6`}>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm hover:bg-slate-600 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Challenges */}
      <section ref={sectionRefs.benefits} className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Benefits & Challenges
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 border border-green-500/30 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl">✅</span>
                <h3 className="text-2xl font-bold text-green-400">Benefits</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Faster Delivery", desc: "Reduce deployment time from months to minutes" },
                  { title: "Improved Quality", desc: "Automated testing catches bugs early" },
                  { title: "Better Collaboration", desc: "Shared responsibility across teams" },
                  { title: "Increased Reliability", desc: "Consistent, repeatable deployments" },
                  { title: "Scalability", desc: "Easily scale infrastructure up or down" },
                  { title: "Cost Efficiency", desc: "Optimize resources and reduce waste" },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                    <div>
                      <h4 className="font-semibold text-green-300">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl">⚠️</span>
                <h3 className="text-2xl font-bold text-red-400">Challenges</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Cultural Shift", desc: "Requires changing team mindsets and processes" },
                  { title: "Skill Gap", desc: "Teams need to learn new tools and practices" },
                  { title: "Tool Proliferation", desc: "Managing too many tools can be overwhelming" },
                  { title: "Security Concerns", desc: "Rapid changes can introduce vulnerabilities" },
                  { title: "Legacy Systems", desc: "Integrating with existing infrastructure" },
                  { title: "Initial Investment", desc: "Time and resources for setup and training" },
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                    <div>
                      <h4 className="font-semibold text-red-300">{challenge.title}</h4>
                      <p className="text-gray-400 text-sm">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section ref={sectionRefs["case-study"]} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Real-World Case Study
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            How industry leaders leverage DevOps
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveCaseStudy("netflix")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCaseStudy === "netflix"
                  ? "bg-red-600 text-white"
                  : "bg-slate-800 text-gray-400 hover:bg-slate-700"
              }`}
            >
              Netflix
            </button>
            <button
              onClick={() => setActiveCaseStudy("amazon")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCaseStudy === "amazon"
                  ? "bg-orange-600 text-white"
                  : "bg-slate-800 text-gray-400 hover:bg-slate-700"
              }`}
            >
              Amazon
            </button>
          </div>

          {activeCaseStudy === "netflix" && (
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🎬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Netflix</h3>
                  <p className="text-gray-400">Pioneering Microservices & DevOps</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-red-400 mb-2">📈 Scale</h4>
                  <p className="text-gray-300">250+ million subscribers worldwide</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-red-400 mb-2">🚀 Deployments</h4>
                  <p className="text-gray-300">1000+ deployments per day</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-red-400 mb-2">⚡ Speed</h4>
                  <p className="text-gray-300">Deploys in seconds, not days</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-400">Key DevOps Practices:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-4">
                    <span className="text-2xl">🐳</span>
                    <div>
                      <h5 className="font-semibold">Containerization</h5>
                      <p className="text-sm text-gray-400">Docker and container orchestration at scale</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-4">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <h5 className="font-semibold">Continuous Deployment</h5>
                      <p className="text-sm text-gray-400">Automated deployment pipeline</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-4">
                    <span className="text-2xl">🎭</span>
                    <div>
                      <h5 className="font-semibold">Chaos Engineering</h5>
                      <p className="text-sm text-gray-400">Netflix's Chaos Monkey tests resilience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-4">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h5 className="font-semibold">Real-time Monitoring</h5>
                      <p className="text-sm text-gray-400">Comprehensive observability stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCaseStudy === "amazon" && (
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">📦</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Amazon</h3>
                  <p className="text-gray-400">The Pioneer of Microservices</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-orange-400 mb-2">🏗️ Architecture</h4>
                  <p className="text-gray-300">170+ microservices architecture</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-orange-400 mb-2">⚡ Performance</h4>
                  <p className="text-gray-300">11.6 seconds average page load</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-orange-400 mb-2">📈 Revenue</h4>
                  <p className="text-gray-300">Millions in revenue per minute</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-400">Key DevOps Practices:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-4">
                    <span className="text-2xl">☁️</span>
                    <div>
                      <h5 className="font-semibold">AWS Infrastructure</h5>
                      <p className="text-sm text-gray-400">Built on Amazon Web Services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-4">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <h5 className="font-semibold">Service-Oriented Architecture</h5>
                      <p className="text-sm text-gray-400">Loosely coupled, independent services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-4">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h5 className="font-semibold">Two-Pizza Teams</h5>
                      <p className="text-sm text-gray-400">Small, autonomous development teams</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-4">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <h5 className="font-semibold">API-First Design</h5>
                      <p className="text-sm text-gray-400">Services communicate via APIs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Summary & Q&A */}
      <section ref={sectionRefs.summary} className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Summary & Q&A
            </span>
          </h2>

          <div className="bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Takeaways</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🔗", text: "DevOps bridges the gap between Development and Operations" },
                { icon: "🔄", text: "CI/CD pipelines enable rapid, reliable software delivery" },
                { icon: "🤖", text: "Automation is essential for scaling and consistency" },
                { icon: "📊", text: "Monitoring and feedback drive continuous improvement" },
                { icon: "🛠️", text: "A rich ecosystem of tools supports DevOps practices" },
                { icon: "👥", text: "Cultural change is as important as technical change" },
              ].map((takeaway, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-slate-800/50 rounded-lg p-4">
                  <span className="text-2xl">{takeaway.icon}</span>
                  <p className="text-gray-300">{takeaway.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">❓</div>
            <h3 className="text-3xl font-bold mb-4">Questions & Discussion</h3>
            <p className="text-xl opacity-90 mb-6">
              Thank you for your attention!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="font-semibold">Feel free to ask questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="font-bold">D</span>
            </div>
            <span className="font-bold">DevOps Demo</span>
          </div>
          <p className="text-gray-500 text-sm">
            DevOps Assignment Presentation • 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
