
import { Monitor, Video, Target, Palette, TrendingUp, Globe, Rocket, Zap } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'AI Reklamos sistemos',
    description: 'Dirbtinio intelekto varomi sprendimai, kurie automatiškai optimizuoja kampanijas realiu laiku ir garantuoja maksimalų ROI.',
    gradient: 'from-cyan-400 via-blue-500 to-purple-500',
    glow: 'group-hover:shadow-cyan-500/30'
  },
  {
    icon: Video,
    title: 'Kino kokybės turinys',
    description: 'Holivudo standartų video produktai su 8K raiška, kurie užbūrią auditoriją ir formuoja emocijų ryšį su prekės ženklu.',
    gradient: 'from-purple-400 via-pink-500 to-red-500',
    glow: 'group-hover:shadow-purple-500/30'
  },
  {
    icon: Target,
    title: 'Tikslinis auditorijos taiklumas',
    description: 'Kvantiniai algoritmai, kurie identifikuoja idealius klientus su 99.7% tikslumu ir maksimizuoja konversijas.',
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-emerald-500/30'
  },
  {
    icon: Palette,
    title: 'Ateities prekės ženklai',
    description: 'Revoliuciniai brand identity sprendimai, kurie nustato naują industrijos standartą ir keičia rinkos dinamiką.',
    gradient: 'from-orange-400 via-red-500 to-pink-500',
    glow: 'group-hover:shadow-orange-500/30'
  },
  {
    icon: TrendingUp,
    title: 'Eksponentinis augimas',
    description: 'Patentuotos growth hacking metodikos, kurios paverčia startup idėjas į rinkos dominatorius per 90 dienų.',
    gradient: 'from-indigo-400 via-purple-500 to-pink-500',
    glow: 'group-hover:shadow-indigo-500/30'
  },
  {
    icon: Globe,
    title: 'Holistiniai web sprendimai',
    description: 'Interaktyvūs, neural network powered websaitai, kurie adaptuojasi prie kiekvieno lankytojo ir maksimizuoja engagement.',
    gradient: 'from-teal-400 via-cyan-500 to-blue-500',
    glow: 'group-hover:shadow-teal-500/30'
  }
];

export const Services = () => {
  return (
    <section id="paslaugos" className="py-32 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-12">
            <Zap size={16} />
            ATEITIES TECHNOLOGIJOS
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-12">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PREMIUM
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SPRENDIMAI
            </span>
          </h2>
          <p className="text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
            Aukščiausio lygio skaitmeninės rinkodaros technologijos, 
            kurios formuoja ateities komunikacijos standartus
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-cyan-400/40 transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl ${service.glow} overflow-hidden`}
              >
                {/* Holographic effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-700`}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Scanning line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent h-0.5 -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
                
                <div className={`relative w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <Icon size={48} className="text-white" />
                </div>
                
                <h3 className="relative text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="relative text-white/70 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-cyan-400/30 rounded-lg rotate-45 group-hover:rotate-90 group-hover:border-cyan-400/60 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
