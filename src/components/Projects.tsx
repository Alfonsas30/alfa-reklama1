
import { ExternalLink, TrendingUp, Award, Zap, Target, Eye, Users, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export const Projects = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const projects = [
    {
      title: t.project1Title,
      description: t.project1Description,
      result: t.project1Result,
      icon: TrendingUp,
      gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
      stats: [t.project1Stat1, t.project1Stat2, t.project1Stat3]
    },
    {
      title: t.project2Title,
      description: t.project2Description,
      result: t.project2Result,
      icon: Award,
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      stats: [t.project2Stat1, t.project2Stat2, t.project2Stat3]
    },
    {
      title: t.project3Title,
      description: t.project3Description,
      result: t.project3Result,
      icon: Zap,
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      stats: [t.project3Stat1, t.project3Stat2, t.project3Stat3]
    },
    {
      title: t.project4Title,
      description: t.project4Description,
      result: t.project4Result,
      icon: Target,
      gradient: 'from-blue-400 via-indigo-500 to-purple-500',
      stats: [t.project4Stat1, t.project4Stat2, t.project4Stat3]
    },
    {
      title: t.project5Title,
      description: t.project5Description,
      result: t.project5Result,
      icon: Eye,
      gradient: 'from-teal-400 via-cyan-500 to-blue-500',
      stats: [t.project5Stat1, t.project5Stat2, t.project5Stat3]
    },
    {
      title: t.project6Title,
      description: t.project6Description,
      result: t.project6Result,
      icon: Users,
      gradient: 'from-pink-400 via-purple-500 to-indigo-500',
      stats: [t.project6Stat1, t.project6Stat2, t.project6Stat3]
    }
  ];

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
            {t.projectsLabel}
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-12 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              {t.projectsTitle1}
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              {t.projectsTitle2}
            </span>
          </h2>
          <p className="text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
            {t.projectsDescription}
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
