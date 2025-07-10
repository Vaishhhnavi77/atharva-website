import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 group">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-cyan-300 hover:to-teal-300 transition-all duration-500 transform group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              Atharva Computer Institute
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="group nav-link text-slate-300 hover:text-white px-5 py-3 text-lg font-bold transition-all duration-500 relative overflow-hidden transform hover:scale-110"
              >
                <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-xl rounded-lg"></div>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="group nav-link text-slate-300 hover:text-white px-5 py-3 text-lg font-bold transition-all duration-500 relative overflow-hidden transform hover:scale-110"
              >
                <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/10 to-rose-500/10 blur-xl rounded-lg"></div>
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="group nav-link text-slate-300 hover:text-white px-5 py-3 text-lg font-bold transition-all duration-500 relative overflow-hidden transform hover:scale-110"
              >
                <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Courses</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-green-500/10 to-teal-500/10 blur-xl rounded-lg"></div>
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="group nav-link text-slate-300 hover:text-white px-5 py-3 text-lg font-bold transition-all duration-500 relative overflow-hidden transform hover:scale-110"
              >
                <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Reviews</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 blur-xl rounded-lg"></div>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group nav-link text-slate-300 hover:text-white px-5 py-3 text-lg font-bold transition-all duration-500 relative overflow-hidden transform hover:scale-110"
              >
                <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 blur-xl rounded-lg"></div>
              </button>
            </div>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-slate-300 group">
                  <User className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-sm group-hover:text-white transition-colors duration-300">Welcome!</span>
                </div>
                <Button
                  onClick={signOut}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transform hover:scale-105"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => window.location.href = '/auth'}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transform hover:scale-105 transition-all duration-300"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 hover:bg-slate-800/50 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-[slideDown_0.3s_ease-out]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/70 backdrop-blur-md rounded-lg mt-2 border border-slate-700/50 shadow-2xl">
              
              <button
                onClick={() => scrollToSection("hero")}
                className="text-slate-300 hover:text-white block px-3 py-2 text-lg font-bold w-full text-left hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-teal-500/20 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-white block px-3 py-2 text-lg font-bold w-full text-left hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-slate-300 hover:text-white block px-3 py-2 text-lg font-bold w-full text-left hover:bg-gradient-to-r hover:from-green-500/20 hover:to-teal-500/20 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-slate-300 hover:text-white block px-3 py-2 text-lg font-bold w-full text-left hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-yellow-500/20 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-white block px-3 py-2 text-lg font-bold w-full text-left hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contact
              </button>
              
              <div className="border-t border-slate-700 pt-2">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-slate-300 text-sm">
                      Welcome back!
                    </div>
                    <Button
                      onClick={signOut}
                      variant="outline"
                      size="sm"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      window.location.href = '/auth';
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
