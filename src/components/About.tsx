
import { Award, Users, Target, Zap, Rocket, Globe, Brain, Diamond, Star, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export const About = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const features = [
    {
      icon: Brain,
      title: t.aboutFeature1Title,
      description: t.aboutFeature1Description
    },
    {
      icon: Rocket,
      title: t.aboutFeature2Title,
      description: t.aboutFeature2Description
    },
    {
      icon: Diamond,
      title: t.aboutFeature3Title,
      description: t.aboutFeature3Description
    },
    {
      icon: Globe,
      title: t.aboutFeature4Title,
      description: t.aboutFeature4Description
    }
  ];

  const achievements = [
    { number: t.aboutAchievement1, label: t.aboutAchievement1Label },
    { number: t.aboutAchievement2, label: t.aboutAchievement2Label },
    { number: t.aboutAchievement3, label: t.aboutAchievement3Label },
    { number: t.aboutAchievement4, label: t.aboutAchievement4Label }
  ];

  return (
    <section id="apie" className="py-32 bg-gradient-to-br from-black via-slate-900/50 to-purple-900/30 relative overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-full text-cyan-400 font-bold mb-12 animate-pulse">
              <Star size={20} />
              {t.aboutLabel}
            </div>

            <h2 className="text-6xl md:text-8xl font-black mb-12 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                {t.aboutTitle1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                {t.aboutTitle2}
              </span>
            </h2>
            <p className="text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
              {t.aboutDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-10">
              <div className="space-y-8">
                <h3 className="text-4xl font-black text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {t.aboutExtendedTitle}
                </h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  {t.aboutExtendedDescription1}
                </p>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  {t.aboutExtendedDescription2}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-4xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {t.aboutVisionTitle}
                </h3>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  {t.aboutVisionDescription}
                </p>
                
                <div className="flex items-center gap-4">
                  <Shield size={32} className="text-cyan-400" />
                  <span className="text-lg font-bold text-white/90">{t.aboutVisionGuarantee}</span>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  {achievement.number}
                </div>
                <div className="text-white/70 text-sm font-bold uppercase tracking-wider">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group text-center relative hover:scale-105 transition-all duration-500"
                >
                  <div className="relative w-28 h-28 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-8 border border-cyan-400/20 group-hover:border-cyan-400/50 group-hover:scale-110 transition-all duration-500 overflow-hidden">
                    <Icon size={56} className="text-white group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                    
                    {/* Scanning line */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent h-0.5 -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/80 text-lg leading-relaxed group-hover:text-white/95 transition-colors duration-300">
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
