
import { ArrowRight, Play } from 'lucide-react';
import { ThreeScene } from './ThreeScene';
import { ErrorBoundary } from './ErrorBoundary';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ErrorBoundary>
        <ThreeScene />
      </ErrorBoundary>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-900/20 z-10"></div>
      
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Auginkite savo verslą
            </span>
            <br />
            <span className="text-gray-800">
              su inovatyviomis sprendimais
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kurkite įspūdingą skaitmeninį turinį, kuris ne tik patraukia dėmesį, 
            bet ir tiksliai pasiekia jūsų auditoriją. Mūsų profesionalūs sprendimai 
            padės išsiskirti ir pasiekti naują lygį.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('paslaugos')}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Sužinoti daugiau
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('projektai')}
              className="group bg-white/90 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Peržiūrėti projektus
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};
