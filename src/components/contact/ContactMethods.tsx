
import { MessageCircle, Calendar, Rocket, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslation } from '../../translations';

export const ContactMethods = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t.contactMethod1Title,
      description: t.contactMethod1Description,
      action: t.contactMethod1Action,
      onClick: () => {
        const phoneNumber = '+37544416678';
        const message = encodeURIComponent(t.whatsappMessage1);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
      }
    },
    {
      icon: Calendar,
      title: t.contactMethod2Title,
      description: t.contactMethod2Description,
      action: t.contactMethod2Action,
      onClick: () => {
        const phoneNumber = '+37544416678';
        const message = encodeURIComponent(t.whatsappMessage2);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
      }
    },
    {
      icon: Rocket,
      title: t.contactMethod3Title,
      description: t.contactMethod3Description,
      action: t.contactMethod3Action,
      onClick: () => {
        const phoneNumber = '+37544416678';
        const message = encodeURIComponent(t.whatsappMessage3);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
      {contactMethods.map((method, index) => {
        const Icon = method.icon;
        return (
          <div 
            key={index}
            className="group relative bg-gradient-to-br from-white/10 to-white/[0.05] backdrop-blur-xl rounded-3xl p-10 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                <Icon size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-white">
                {method.title}
              </h3>
            </div>
            
            <p className="text-white/80 mb-8 leading-relaxed text-lg">
              {method.description}
            </p>
            
            <button 
              onClick={method.onClick}
              className="relative w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                {method.action}
                <Send size={20} />
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
