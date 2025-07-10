
import React from 'react';

const Hero = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Animation with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-teal-900/30">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 animate-pulse delay-1000"></div>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-bounce delay-500"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/30 to-teal-400/30 rounded-full blur-xl animate-ping delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block animate-[slideInLeft_1s_ease-out] transform hover:scale-105 transition-all duration-500 hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Code Your Future with{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-[slideInRight_1.2s_ease-out] inline-block transform hover:scale-110 transition-all duration-500 relative ml-4 hover:drop-shadow-[0_0_40px_rgba(34,197,94,0.6)]">
              Atharva!
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-teal-400/30 blur-2xl animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-[fadeInUp_1.5s_ease-out] hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_20px_rgba(148,163,184,0.8)]">
            From Basics to Brilliance — Only at Atharva.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-[fadeInUp_2s_ease-out]">
            <button 
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 to-teal-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>
            
            <button 
              onClick={scrollToCourses}
              className="group relative border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-full text-lg font-bold hover:bg-gradient-to-r hover:from-blue-400/20 hover:to-teal-400/20 hover:text-white hover:border-teal-400 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">View Courses</span>
            </button>
          </div>
        </div>

        {/* Enhanced Floating Elements with more variety and animations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-lg animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-bounce delay-800"></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-600"></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-400"></div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.6));
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
