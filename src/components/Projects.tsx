
import { ExternalLink, TrendingUp, Award, Zap, Target, Eye, Users, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'E-komercijos imperija',
    description: 'Pažangūs AI sprendimai su personalizuotomis kampanijomis',
    result: '+847% investicijų grąža per 6 mėnesius',
    icon: TrendingUp,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    stats: ['2,4M pasekmė', '47% konversija', '890K € pajamos']
  },
  {
    title: 'Prekės ženklo transformacija',
    description: 'Visiškas rebrendas su kinematografine video serija',
    result: '12M organinių peržiūrų',
    icon: Award,
    gradient: 'from-purple-400 via-pink-500 to-red-500',
    stats: ['500% įsitraukimas', '89% ženklo atpažinimas', '25 apdovanojimai']
  },
  {
    title: 'Virusinė kampanijos pradžia',
    description: 'Daugiakanalė virusinė komunikacijos strategija',
    result: '45M peržiūrų per savaitę',
    icon: Zap,
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
    stats: ['#1 tendencija', '2,8M pasidalinimai', '340% augimas']
  },
  {
    title: 'B2B potencialių klientų generavimas',
    description: 'LinkedIn tikslinis taikymas su AI automatizavimu',
    result: '2 847 kvalifikuoti potencialūs klientai',
    icon: Target,
    gradient: 'from-blue-400 via-indigo-500 to-purple-500',
    stats: ['94% potencialių klientų kokybė', '67% užbaigimo rodiklis', '2,1M € galimybių']
  },
  {
    title: 'Interaktyvus interneto patirtis',
    description: '3D interaktyvūs produktų pristatymai',
    result: '384% buvimo laiko padidėjimas',
    icon: Eye,
    gradient: 'from-teal-400 via-cyan-500 to-blue-500',
    stats: ['89% užbaigimas', '156% paspaudimų rodiklis', '4,9/5 įvertinimas']
  },
  {
    title: 'Influencerių ekosistema',
    description: 'Makro ir mikro influencerių kampanijos strategija',
    result: '23M autentiška pasekmė',
    icon: Users,
    gradient: 'from-pink-400 via-purple-500 to-indigo-500',
    stats: ['847 kūrėjai', '34% įsitraukimas', '1,8M € uždirbta medija']
  }
];

export const Projects = () => {
  return (
    <section id="projektai" className="py-32 bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Cyber background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-full text-cyan-400 font-bold mb-12 animate-pulse">
            <Rocket size={20} />
            SĖKMĖS ISTORIJOS
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-12 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              MŪSŲ
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              PROJEKTAI
            </span>
          </h2>
          <p className="text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
            Rezultatai, kurie keičia pramonės standartus ir formuoja ateities sėkmės istorijas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-black/80 to-gray-900/60 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-cyan-400/50 transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                
                {/* Scanning line effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent h-1 -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
                
                <div className={`relative w-24 h-24 bg-gradient-to-r ${project.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                  <Icon size={48} className="text-white" />
                </div>
                
                <h3 className="relative text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                  {project.title}
                </h3>
                
                <p className="relative text-white/70 mb-6 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="relative space-y-3 mb-8">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      <span className="font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
                
                <div className="relative flex items-center justify-between">
                  <span className={`text-xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.result}
                  </span>
                  <ExternalLink size={24} className="text-white/40 group-hover:text-cyan-400 group-hover:scale-125 transition-all duration-300" />
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-cyan-400/20 rounded-lg rotate-45 group-hover:rotate-90 group-hover:border-cyan-400/60 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
