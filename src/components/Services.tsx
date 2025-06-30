
import { Monitor, Video, Share2, Palette, TrendingUp, Globe, Rocket, Target } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Performance Marketing',
    description: 'Duomenimis grįstos kampanijos, kurios generuoja realius rezultatus. ROI optimizavimas ir konversijų maximizavimas.',
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    glow: 'group-hover:shadow-cyan-500/20'
  },
  {
    icon: Video,
    title: 'Cinematic Video Production',
    description: 'Holivudo kokybės vaizdo turinys, kuris pasakoja jūsų prekės ženklo istoriją ir užburia auditoriją.',
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    glow: 'group-hover:shadow-purple-500/20'
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'AI-powered auditorijos segmentavimas ir mikro-targeting, užtikrinantis maksimalų kampanijų efektyvumą.',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-green-500/20'
  },
  {
    icon: Palette,
    title: 'Brand Identity Revolution',
    description: 'Unikalūs prekės ženklai, kurie keičia industrijas. Nuo logotipo iki pilnos korporatyvinės tapatybės.',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    glow: 'group-hover:shadow-orange-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Growth Hacking',
    description: 'Eksponentinio augimo strategijos, kurios transformuoja startupo idėjas į rinkos lyderius.',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    glow: 'group-hover:shadow-indigo-500/20'
  },
  {
    icon: Globe,
    title: 'Next-Gen Web Experiences',
    description: 'Interaktyvūs, AI-powered websaitai, kurie konvertuoja lankytojus į ištikimus klientus.',
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    glow: 'group-hover:shadow-teal-500/20'
  }
];

export const Services = () => {
  return (
    <section id="paslaugos" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PREMIUM PASLAUGOS
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Aukščiausio lygio skaitmeninio marketingo sprendimai, kurie formuoja ateities standartus
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${service.glow}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={40} className="text-white" />
                </div>
                
                <h3 className="relative text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="relative text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-500/50 group-hover:to-purple-500/50 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
