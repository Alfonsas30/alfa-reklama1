
import { ArrowRight, Sparkles, Zap, Play } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <ErrorBoundary>
        <ThreeScene />
      </ErrorBoundary>
      
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Scanning line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[scan_4s_ease-in-out_infinite] opacity-50"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8 hover:border-cyan-400/50 transition-all duration-300">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <Zap size={16} className="text-cyan-400" />
            SISTEMA AKTYVUOTA • REKLAMOS ATEITIS
            <Sparkles size={16} className="text-purple-400" />
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(6,182,212,0.5)] animate-pulse">
              ALFA
            </span>
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-light tracking-wider mt-4">
              REKLAMA
            </span>
          </h1>
          
          <div className="relative mb-16">
            <p className="text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light">
              Revoliuciniai <span className="text-cyan-400 font-semibold">skaitmeniniai sprendimai</span>, 
              kurie formuoja ateities rinkodaros standartus. Mes ne tik kuriame kampanijas – 
              mes <span className="text-purple-400 font-semibold">keičiame žaidimo taisykles</span>.
            </p>
            
            {/* Floating particles around text */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 -left-8 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20">
            <button 
              onClick={() => scrollToSection('paslaugos')}
              className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-xl rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] border border-cyan-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.2)_50%,transparent_70%)] -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center gap-4">
                <Play size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                Pradėti transformaciją
                <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-300" />
              </div>
            </button>
            
            <button 
              onClick={() => scrollToSection('projektai')}
              className="group px-12 py-6 bg-black/50 backdrop-blur-xl text-white font-bold text-xl rounded-2xl border-2 border-white/20 hover:bg-black/70 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
            >
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                Peržiūrėti portfelį
              </span>
            </button>
          </div>

          {/* Enhanced holographic stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Revoliucinių projektų", color: "cyan" },
              { value: "15+", label: "Metų inovacijų", color: "purple" },
              { value: "2M+", label: "Paveiktų žmonių", color: "pink" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative text-center p-8 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-cyan-400/30 transition-all duration-500">
                  <div className={`text-6xl font-black mb-4 bg-gradient-to-r ${
                    stat.color === 'cyan' ? 'from-cyan-400 to-blue-400' :
                    stat.color === 'purple' ? 'from-purple-400 to-pink-400' :
                    'from-pink-400 to-red-400'
                  } bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-lg font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none"></div>
    </section>
  );
};
