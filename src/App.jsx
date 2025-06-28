import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Download, Bug, Code, TestTube2, Zap, Target, Shield, Globe, ArrowRight, ExternalLink, CheckCircle, AlertTriangle, Search, FileText, Star } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create a downloadable resume content
    const resumeContent = `
PRASIDDH MANKODI
QA Tester | Web Developer | Bug Hunter

Contact Information:
Email: pdmankodi2003@gmail.com
LinkedIn: https://www.linkedin.com/in/prasiddh-mankodi-357423263

PROFESSIONAL SUMMARY:
Freelance QA Tester with a robust background in full-stack development using the MERN stack. 
With an eagle eye for detail and an unwavering passion for quality, I transitioned into software 
testing to help teams deliver exceptional products that users love.

SKILLS:
• Manual Testing - 95%
• TestIO Platform - 90%
• API Testing - 88%
• Bug Tracking - 92%
• Usability Testing - 90%
• Web Development - 85%

SAMPLE BUG REPORTS:
1. E-commerce Cart Critical Bug
   - Payment gateway integration failure causing transaction drops
   - Severity: Critical | Status: In Progress

2. Login Validation Bypass
   - Security vulnerability in user authentication system
   - Severity: High | Status: Fixed

3. Mobile Responsive Issues
   - UI breaking on various mobile device screen sizes
   - Severity: Medium | Status: Fixed

ACHIEVEMENTS:
• 20+ Bugs Found
• Fresh perspective in QA Testing
• Strong foundation in web development

TECHNICAL EXPERTISE:
• Frontend: React, HTML5, CSS3, JavaScript
• Backend: Node.js, Express.js
• Database: MongoDB
• Testing: Manual Testing, API Testing, Usability Testing
• Tools: TestIO Platform, Bug Tracking Systems
    `;

    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prasiddh_Mankodi_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Function to handle "View My Work" button click
  const handleViewMyWork = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle PM logo click
  const handleLogoClick = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = [
    { icon: Bug, delay: 0, color: 'text-red-400' },
    { icon: Code, delay: 1, color: 'text-blue-400' },
    { icon: TestTube2, delay: 2, color: 'text-green-400' },
    { icon: Zap, delay: 3, color: 'text-yellow-400' },
    { icon: Target, delay: 4, color: 'text-purple-400' },
    { icon: Shield, delay: 5, color: 'text-indigo-400' },
  ];

  const skills = [
    { name: 'Manual Testing', level: 95, icon: Search, color: 'from-blue-500 to-cyan-500' },
    { name: 'TestIO Platform', level: 90, icon: Globe, color: 'from-purple-500 to-pink-500' },
    { name: 'API Testing', level: 88, icon: Code, color: 'from-green-500 to-emerald-500' },
    { name: 'Bug Tracking', level: 92, icon: Bug, color: 'from-red-500 to-orange-500' },
    { name: 'Usability Testing', level: 90, icon: Target, color: 'from-yellow-500 to-amber-500' },
    { name: 'Web Development', level: 85, icon: TestTube2, color: 'from-indigo-500 to-blue-500' },
  ];

  const bugReports = [
    {
      title: 'E-commerce Cart Critical Bug',
      description: 'Payment gateway integration failure causing transaction drops',
      severity: 'Critical',
      status: 'In Progress',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Login Validation Bypass',
      description: 'Security vulnerability in user authentication system',
      severity: 'High',
      status: 'Fixed',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mobile Responsive Issues',
      description: 'UI breaking on various mobile device screen sizes',
      severity: 'Medium',
      status: 'Fixed',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-bounce"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            animationDuration: '6s'
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
            animationDuration: '8s'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className={`fixed ${element.color} opacity-20 animate-bounce pointer-events-none`}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${4 + (index * 0.5)}s`
            }}
          >
            <Icon size={32} />
          </div>
        );
      })}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              PM
            </button>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Reports', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Bug size={48} className="text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Prasiddh Mankodi
            </h1>
            <div className="text-2xl md:text-3xl mb-6 text-gray-300">
              <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>QA</span>
              <span className="inline-block animate-bounce mx-2" style={{animationDelay: '0.1s'}}>Tester</span>
              <span className="text-cyan-400 animate-bounce" style={{animationDelay: '0.2s'}}>|</span>
              <span className="inline-block animate-bounce mx-2" style={{animationDelay: '0.3s'}}>Web</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>Developer</span>
              <span className="text-purple-400 animate-bounce mx-2" style={{animationDelay: '0.5s'}}>|</span>
              <span className="inline-block animate-bounce mx-2" style={{animationDelay: '0.6s'}}>Bug</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.7s'}}>Hunter</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <div className="animate-spin-slow">
              <TestTube2 size={40} className="text-cyan-400" />
            </div>
            <div className="animate-pulse">
              <Target size={40} className="text-purple-400" />
            </div>
            <div className="animate-bounce">
              <Shield size={40} className="text-pink-400" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleViewMyWork}
              className="cursor-pointer group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center justify-center">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
            <button 
              onClick={handleResumeDownload}
              className="cursor-pointer group border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="flex items-center justify-center">
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download Resume
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-gray-300">
                  I am a <span className="text-cyan-400 font-semibold">freelance QA tester</span> with a robust background in 
                  full-stack development using the <span className="text-purple-400 font-semibold">MERN stack</span>.
                </p>
                <p className="text-xl leading-relaxed text-gray-300">
                  With an <span className="text-pink-400 font-semibold">eagle eye for detail</span> and an unwavering passion for quality, 
                  I transitioned into software testing to help teams deliver exceptional products that users love.
                </p>
                <div className="flex space-x-4 pt-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle size={20} />
                    <span>20+ Bugs Found</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Star size={20} />
                    <span>Fresher</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                      <Code size={32} className="text-white" />
                    </div>
                    <p className="text-lg text-gray-300">QA Engineer & Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Tools
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <span className="text-xl font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible.skills ? `${skill.level}%` : '0%',
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bug Reports Section */}
      <section id="reports" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.reports ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Sample Bug Reports
            </h2>
            
            <div className="grid gap-8">
              {bugReports.map((report, index) => {
                const Icon = report.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${report.color}`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{report.title}</h3>
                          <p className="text-gray-400 mt-1">{report.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          report.severity === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          report.severity === 'High' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                          'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {report.severity}
                        </span>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          report.status === 'Fixed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a 
                href="https://mail.google.com/mail/?view=cm&to=pdmankodi2003@gmail.com"
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl block"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform">
                    <Mail size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-400">pdmankodi2003@gmail.com</p>
                  </div>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/prasiddh-mankodi-357423263"
                target="_blank" 
                rel="noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl block"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 group-hover:scale-110 transition-transform">
                    <Linkedin size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                    <p className="text-gray-400">linkedin.com/in/prasiddh-mankodi</p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleResumeDownload}
                className="cursor-pointer group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center">
                  <Download className="mr-3 group-hover:animate-bounce" size={24} />
                  Download Full Resume
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400 mb-4">© 2025 Prasiddh Mankodi. Crafted with passion for quality.</p>
          <div className="flex justify-center space-x-6">
            <div className="animate-pulse">
              <Bug size={24} className="text-red-400" />
            </div>
            <div className="animate-bounce">
              <TestTube2 size={24} className="text-blue-400" />
            </div>
            <div className="animate-pulse">
              <Shield size={24} className="text-green-400" />
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;