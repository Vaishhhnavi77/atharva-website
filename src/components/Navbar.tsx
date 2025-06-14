
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-lg border-b border-blue-500/30 shadow-lg shadow-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-teal-300 hover:to-cyan-300 transition-all duration-500 transform group-hover:scale-105">
              Atharva Computer Institute
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group text-slate-300 hover:text-white px-6 py-4 rounded-xl text-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></div>
                </a>
              ))}
              <button className="ml-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-10 py-4 rounded-full font-bold text-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-95">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-500/10"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 bg-slate-800/95 rounded-2xl mt-4 backdrop-blur-lg border border-blue-500/20">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white hover:bg-blue-500/20 block px-6 py-4 rounded-xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                }}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 mt-6 transform hover:scale-105 active:scale-95">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
