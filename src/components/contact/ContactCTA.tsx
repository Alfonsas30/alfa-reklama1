
import { Star } from 'lucide-react';

interface ContactCTAProps {
  onContactFormClick: () => void;
  onProjectsClick: () => void;
}

export const ContactCTA = ({ onContactFormClick, onProjectsClick }: ContactCTAProps) => {
  return (
    <div className="text-center bg-gradient-to-br from-cyan-500/15 via-purple-500/15 to-pink-500/15 backdrop-blur-xl rounded-3xl p-16 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
      <h3 className="text-4xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Pasiruošę kurti istoriją?
      </h3>
      
      <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
        Jūsų sėkmės istorija prasideda čia. Susisiekite dabar ir gaukite 
        individualizuotą strategiją, kuri transformuos jūsų verslą į ateities lyderį.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
        <button 
          onClick={onContactFormClick}
          className="relative flex-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative">Pradėti dabar</span>
        </button>
        
        <button 
          onClick={onProjectsClick}
          className="flex-1 bg-black/40 backdrop-blur-xl text-white px-10 py-5 rounded-full font-black text-xl border border-cyan-400/30 hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105"
        >
          Projektai
        </button>
      </div>
    </div>
  );
};
