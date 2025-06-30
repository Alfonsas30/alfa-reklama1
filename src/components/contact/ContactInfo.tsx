
import { Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export const ContactInfo = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const contactInfo = [
    {
      icon: Phone,
      title: t.contactInfo1Title,
      content: t.contactInfo1Content,
      description: t.contactInfo1Description,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Mail,
      title: t.contactInfo2Title,
      content: t.contactInfo2Content,
      description: t.contactInfo2Description,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Clock,
      title: t.contactInfo3Title,
      content: t.contactInfo3Content,
      description: t.contactInfo3Description,
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
      {contactInfo.map((info, index) => {
        const Icon = info.icon;
        return (
          <div 
            key={index}
            className="group relative bg-gradient-to-br from-black/80 to-gray-900/60 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-cyan-400/50 transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
            
            {/* Scanning line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent h-1 -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
            
            <div className={`relative w-24 h-24 bg-gradient-to-r ${info.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
              <Icon size={48} className="text-white" />
            </div>
            
            <h3 className="relative text-2xl font-black mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {info.title}
            </h3>
            
            <div className="relative text-white/95 font-bold mb-3 text-xs sm:text-sm md:text-base email-break">
              {info.content.split('\n').map((line, lineIndex) => (
                <div key={lineIndex} className="mb-1">
                  {line}
                </div>
              ))}
            </div>

            <p className="relative text-white/60 text-sm font-medium">
              {info.description}
            </p>

            {/* Corner decoration */}
            <div className="absolute top-6 right-6 w-12 h-12 border-2 border-cyan-400/20 rounded-lg rotate-45 group-hover:rotate-90 group-hover:border-cyan-400/60 transition-all duration-500"></div>
          </div>
        );
      })}
    </div>
  );
};
