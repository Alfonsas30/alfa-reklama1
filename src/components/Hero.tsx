
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ErrorBoundary>
        <ThreeScene />
      </ErrorBoundary>
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-purple-900/30 z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8 hover:bg-white/20 transition-all duration-300">
            <Sparkles size={16} className="text-yellow-400" />
            Premium skaitmeninio marketingo sprendimai
            <Zap size={16} className="text-cyan-400" />
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              ALFA
            </span>
            <span className="block text-4xl md:text-6xl text-white/90 font-light tracking-wider">
              REKLAMA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Revoliuciniai skaitmeninio marketingo sprendimai, kurie transformuoja jūsų verslą. 
            Mes kuriame ne tik kampanijas – mes kuriame ateities sėkmės istorijas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('paslaugos')}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                Pradėti kelionę
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
            
            <button 
              onClick={() => scrollToSection('projektai')}
              className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              Peržiūrėti portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">500+</div>
              <div className="text-white/70 text-sm font-medium">Sėkmingų projektų</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">15+</div>
              <div className="text-white/70 text-sm font-medium">Metų patirtis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">2M+</div>
              <div className="text-white/70 text-sm font-medium">Pasiekta auditorija</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
