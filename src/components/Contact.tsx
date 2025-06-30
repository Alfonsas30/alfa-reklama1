import { Phone, Mail, Clock, MessageCircle, Zap, Rocket, Star, Send, Calendar } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Premium linija',
    content: '+375 44 416 66 78',
    description: '24/7 VIP palaikymas',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: Mail,
    title: 'El. pašto kontaktai',
    content: 'info@alfareklama.ch\ngmbhinvest333@gmail.com',
    description: 'Verslo ir bendrieji užklausimai',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Clock,
    title: 'Elito darbo laikas',
    content: 'Pr–Pn, 9:00–16:00',
    description: 'Papildomos funkcijos 24/7',
    gradient: 'from-orange-400 to-red-500'
  }
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp VIP',
    description: 'Momentinis atsakymas su pirmumo palaikymu',
    action: 'Pradėti pokalbį'
  },
  {
    icon: Calendar,
    title: 'Strategijos skambutis',
    description: 'Nemokama 30 min konsultacija su ekspertų komanda',
    action: 'Rezervuoti laiką'
  },
  {
    icon: Rocket,
    title: 'Projekto pradžia',
    description: 'Greitas projekto startas per 48 valandas',
    action: 'Pradėti dabar'
  }
];

export const Contact = () => {
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
          
          {/* Contact Info Grid - now 3 blocks instead of 4 */}
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
                  
                  <div className={`relative w-24 h-24 bg-gradient-to-r ${info.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
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
          
          {/* Contact Methods */}
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
                  
                  <button className="relative w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 overflow-hidden group">
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
          
          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-cyan-500/15 via-purple-500/15 to-pink-500/15 backdrop-blur-xl rounded-3xl p-16 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
            <h3 className="text-4xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Pasiruošę kurti istoriją?
            </h3>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Jūsų sėkmės istorija prasideda čia. Susisiekite dabar ir gaukite 
              individualizuotą strategiją, kuri transformuos jūsų verslą į ateities lyderį.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <button className="relative flex-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Pradėti dabar</span>
              </button>
              
              <button className="flex-1 bg-black/40 backdrop-blur-xl text-white px-10 py-5 rounded-full font-black text-xl border border-cyan-400/30 hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                Projektai
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
