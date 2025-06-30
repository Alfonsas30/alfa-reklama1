
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ALFA REKLAMA
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('paslaugos')}
              className="text-white/80 hover:text-white transition-colors font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text"
            >
              Paslaugos
            </button>
            <button 
              onClick={() => scrollToSection('projektai')}
              className="text-white/80 hover:text-white transition-colors font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('apie')}
              className="text-white/80 hover:text-white transition-colors font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text"
            >
              Apie mus
            </button>
            <button 
              onClick={() => scrollToSection('kontaktai')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              Kontaktai
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-white/10 pt-6">
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('paslaugos')}
                className="text-white/80 hover:text-white transition-colors font-medium text-left hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text"
              >
                Paslaugos
              </button>
              <button 
                onClick={() => scrollToSection('projektai')}
                className="text-white/80 hover:text-white transition-colors font-medium text-left hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('apie')}
                className="text-white/80 hover:text-white transition-colors font-medium text-left hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text"
              >
                Apie mus
              </button>
              <button 
                onClick={() => scrollToSection('kontaktai')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
              >
                Kontaktai
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
