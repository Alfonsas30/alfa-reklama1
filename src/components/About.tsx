
import { Award, Users, Target, Zap, Rocket, Globe, Brain, Diamond } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Dirbtinio intelekto sprendimai optimaliems rezultatams'
  },
  {
    icon: Rocket,
    title: '15+ Metų Dominuojame',
    description: 'Rinkos lyderiai skaitmeninio marketingo srityje'
  },
  {
    icon: Diamond,
    title: 'Premium Execution',
    description: 'Aukščiausios kokybės sprendimai luxury segmentui'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Tarptautinių kampanijų ekspertai 47 šalyse'
  }
];

const achievements = [
  { number: '500M+', label: 'Total Reach' },
  { number: '2,847%', label: 'Avg ROI' },
  { number: '89', label: 'Industry Awards' },
  { number: '99.2%', label: 'Client Retention' }
];

export const About = () => {
  return (
    <section id="apie" className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ALFA DNA
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Mes nesame tiesiog agentūra – mes esame transformacijos katalizatorius, 
              kuris keičia verslo ateities trajektorijas
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Revoliuciniai sprendimai ateities verslui
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Mūsų misija – transformuoti kiekvieną klientą į savo srities revoliucionierių. 
                  Naudodami pažangiausias AI technologijas, neuromarketing insights ir 
                  big data analytics, kuriame kampanijas, kurios ne tik pasiekia tikslus, 
                  bet ir formuoja naują industrijos standartą.
                </p>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Kiekvienas projektas – tai unikalus meno kūrinys, gimstantis iš strateginio 
                  mąstymo, kūrybinio genijaus ir technologinių inovacijų simbiozės.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Mūsų vizija 2030
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Tapti globaliu lyderiu AI-powered marketingo sprendimuose, 
                  formuojančiu ateities komunikacijos standartus ir keičiančiu 
                  tai, kaip prekės ženklai sąveikauja su auditorija.
                </p>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group text-center relative"
                >
                  <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:border-white/30 group-hover:scale-110 transition-all duration-300">
                    <Icon size={48} className="text-white group-hover:text-cyan-400 transition-colors duration-300" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
