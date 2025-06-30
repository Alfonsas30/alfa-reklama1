
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Alfa Reklama
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('paslaugos')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Paslaugos
            </button>
            <button 
              onClick={() => scrollToSection('projektai')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Projektai
            </button>
            <button 
              onClick={() => scrollToSection('apie')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Apie mus
            </button>
            <button 
              onClick={() => scrollToSection('kontaktai')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Kontaktai
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('paslaugos')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-left"
              >
                Paslaugos
              </button>
              <button 
                onClick={() => scrollToSection('projektai')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-left"
              >
                Projektai
              </button>
              <button 
                onClick={() => scrollToSection('apie')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-left"
              >
                Apie mus
              </button>
              <button 
                onClick={() => scrollToSection('kontaktai')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-left"
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
