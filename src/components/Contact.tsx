
import { Star } from 'lucide-react';
import { ContactInfo } from './contact/ContactInfo';
import { ContactMethods } from './contact/ContactMethods';
import { ContactForm } from './contact/ContactForm';
import { ContactCTA } from './contact/ContactCTA';

export const Contact = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kontaktai" className="py-32 bg-gradient-to-br from-black via-slate-900/50 to-purple-900/30 relative overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-xl border border-cyan-400/30 rounded-full text-cyan-400 font-bold mb-12 animate-pulse">
              <Star size={20} className="text-yellow-400" />
              PREMIUM KONSULTACIJOS PRIEINAMOS
            </div>

            <h2 className="text-6xl md:text-8xl font-black mb-12 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                SUSISIEKITE
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                SU MŪSŲ KOMANDA
              </span>
            </h2>
            <p className="text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
              Pasiruošę transformuoti savo verslą? Susisiekite su premium ekspertų komanda 
              ir pradėkite kelionę į neprilygstamą sėkmę.
            </p>
          </div>
          
          <ContactInfo />
          <ContactMethods />
          <ContactForm />
          <ContactCTA 
            onContactFormClick={scrollToContactForm}
            onProjectsClick={() => scrollToSection('projektai')}
          />
        </div>
      </div>
    </section>
  );
};
