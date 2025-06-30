
import { ExternalLink, TrendingUp, Eye, Users, Zap, Award, Target } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Empire',
    description: 'Omnichannel kampanija su AI personalizacija',
    result: '+847% ROI per 6 mėnesius',
    icon: TrendingUp,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    stats: ['2.4M reach', '47% konversija', '€890K revenue']
  },
  {
    title: 'Brand Transformation',
    description: 'Pilnas rebrand su cinematic video serija',
    result: '12M organic impressions',
    icon: Award,
    gradient: 'from-purple-400 via-pink-500 to-red-500',
    stats: ['500% engagement', '89% brand recall', '25 awards']
  },
  {
    title: 'Viral Campaign Launch',
    description: 'Multi-platform virusinė kampanija',
    result: '45M views per savaitę',
    icon: Zap,
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
    stats: ['#1 trending', '2.8M shares', '340% growth']
  },
  {
    title: 'B2B Lead Generation',
    description: 'LinkedIn precision targeting su AI automation',
    result: '2,847 qualified leads',
    icon: Target,
    gradient: 'from-blue-400 via-indigo-500 to-purple-500',
    stats: ['94% lead quality', '67% close rate', '€2.1M pipeline']
  },
  {
    title: 'Interactive Web Experience',
    description: '3D interaktyvus produktų showcase',
    result: '384% dwell time increase',
    icon: Eye,
    gradient: 'from-teal-400 via-cyan-500 to-blue-500',
    stats: ['89% completion', '156% CTR', '4.9/5 rating']
  },
  {
    title: 'Influencer Ecosystem',
    description: 'Makro + mikro influencerių kampanija',
    result: '23M authentic reach',
    icon: Users,
    gradient: 'from-pink-400 via-purple-500 to-indigo-500',
    stats: ['847 creators', '34% engagement', '€1.8M earned media']
  }
];

export const Projects = () => {
  return (
    <section id="projektai" className="py-32 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              SUCCESS STORIES
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            Rezultatai, kurie keičia industrijos standartus ir formuoja ateities sėkmės istorijas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className={`relative w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <Icon size={40} className="text-white" />
                </div>
                
                <h3 className="relative text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="relative text-white/60 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="relative space-y-2 mb-6">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center gap-2 text-xs text-white/50">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      {stat}
                    </div>
                  ))}
                </div>
                
                <div className="relative flex items-center justify-between">
                  <span className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.result}
                  </span>
                  <ExternalLink size={20} className="text-white/40 group-hover:text-white/80 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${project.gradient} blur-xl -z-10`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
