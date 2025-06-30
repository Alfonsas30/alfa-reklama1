
import { Zap, Heart, Mail, Phone, Send, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61578020543147', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/norvaisasalfonsa/', label: 'Instagram' },
  { icon: Send, href: 'https://t.me/snlvlt/137', label: 'Telegram' }
];

export const Footer = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const quickLinks = [
    { label: t.services, href: '#paslaugos' },
    { label: t.projects, href: '#projektai' },
    { label: t.about, href: '#apie' },
    { label: t.contact, href: '#kontaktai' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900/80 to-slate-900 text-white py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
                <Zap size={32} className="text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60"></div>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ALFA REKLAMA
              </div>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              {t.companyDescription}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="font-medium text-xs sm:text-sm email-break">info@alfareklama.ch</span>
              </div>
              
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="font-medium text-xs sm:text-sm email-break">gmbhinvest333@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="font-medium text-xs sm:text-sm email-break">+375 44 416 66 78</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t.quickLinks}
            </h4>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/70 hover:text-white transition-colors font-medium text-left hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-2xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t.socialMedia}
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/70 hover:text-white transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <span>{t.footerCopyright}</span>
              <Heart size={16} className="text-red-400 fill-current animate-pulse" />
              <span>{t.footerLove}</span>
            </div>

            <div className="text-white/40 text-sm text-center">
              {t.footerRights}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
