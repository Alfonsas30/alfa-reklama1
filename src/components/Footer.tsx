
import { Zap, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Zap size={28} className="text-white" />
            </div>
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ALFA REKLAMA
            </div>
          </div>
          
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Transformuojame verslo ateities trajektorijas per inovatyvius skaitmeninio marketingo sprendimus
          </p>

          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <span>© 2025 Alfa Reklama. Sukurta su</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>Šveicarijoje</span>
          </div>

          <div className="mt-4 text-white/30 text-xs">
            Visos teisės saugomos • Premium Digital Marketing Solutions
          </div>
        </div>
      </div>
    </footer>
  );
};
