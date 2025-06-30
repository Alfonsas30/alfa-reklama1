
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
      <ErrorBoundary>
        <ThreeScene />
      </ErrorBoundary>
      
      {/* Darker premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-purple-900/50 z-10"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-10 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-gradient-to-r from-purple-400/25 to-pink-500/25 rounded-full blur-xl animate-pulse delay-300"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge with neon glow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-cyan-500/50 rounded-full text-white text-sm font-medium mb-8 hover:bg-black/60 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Sparkles size={16} className="text-yellow-400" />
            Premium skaitmeninio marketingo sprendimai
            <Zap size={16} className="text-cyan-400" />
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              ALFA
            </span>
            <span className="block text-4xl md:text-6xl text-white font-light tracking-wider drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              REKLAMA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Revoliuciniai skaitmeninio marketingo sprendimai, kurie transformuoja jūsų verslą. 
            Mes kuriame ne tik kampanijas – mes kuriame ateities sėkmės istorijas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('paslaugos')}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 border-2 border-transparent hover:border-cyan-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                Pradėti kelionę
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
            
            <button 
              onClick={() => scrollToSection('projektai')}
              className="group px-10 py-5 bg-black/30 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-black/50 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Peržiūrėti portfolio
            </button>
          </div>

          {/* Enhanced stats with neon glow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">500+</div>
              <div className="text-white/90 text-sm font-medium">Sėkmingų projektų</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">15+</div>
              <div className="text-white/90 text-sm font-medium">Metų patirtis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">2M+</div>
              <div className="text-white/90 text-sm font-medium">Pasiekta auditorija</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
