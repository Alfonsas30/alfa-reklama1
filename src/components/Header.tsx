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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-2xl border-b border-cyan-400/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
              <Zap size={28} className="text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 animate-ping"></div>
            </div>
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              ALFA REKLAMA
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('paslaugos')}
              className="relative text-white/90 hover:text-white transition-all duration-300 font-semibold group"
            >
              Paslaugos
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('projektai')}
              className="relative text-white/90 hover:text-white transition-all duration-300 font-semibold group"
            >
              Projektai
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('apie')}
              className="relative text-white/90 hover:text-white transition-all duration-300 font-semibold group"
            >
              Apie mus
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('kontaktai')}
              className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 overflow-hidden group animate-gradient-slide"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: '200% 200%' }}></div>
              <span className="relative">Kontaktai</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-8 pb-8 border-t border-cyan-400/20 pt-8 space-y-6">
            <button 
              onClick={() => scrollToSection('paslaugos')}
              className="block w-full text-left text-white/90 hover:text-white transition-colors font-semibold text-lg"
            >
              Paslaugos
            </button>
            <button 
              onClick={() => scrollToSection('projektai')}
              className="block w-full text-left text-white/90 hover:text-white transition-colors font-semibold text-lg"
            >
              Projektai
            </button>
            <button 
              onClick={() => scrollToSection('apie')}
              className="block w-full text-left text-white/90 hover:text-white transition-colors font-semibold text-lg"
            >
              Apie mus
            </button>
            <button 
              onClick={() => scrollToSection('kontaktai')}
              className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 animate-gradient-slide"
              style={{ backgroundSize: '200% 200%' }}
            >
              Kontaktai
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
