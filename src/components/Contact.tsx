
import { Phone, Mail, MapPin, Clock, MessageCircle, Zap, Rocket, Star } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Premium Hotline',
    content: '+375 44 416 66 78',
    description: '24/7 VIP palaikymas',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: Mail,
    title: 'Executive Email',
    content: 'hello@alfareklama.ch',
    description: 'Tiesioginė linija į CEO',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    icon: MapPin,
    title: 'HQ Location',
    content: 'Šveicarija, Zurich',
    description: 'Premium business district',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Elite Hours',
    content: 'Mon–Fri, 9:00–20:00',
    description: 'Ekstrafunkcijas 24/7',
    gradient: 'from-orange-400 to-red-500'
  }
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp VIP',
    description: 'Momentinis atsakymas su priority support',
    action: 'Pradėti pokalbį'
  },
  {
    icon: Zap,
    title: 'Strategy Call',
    description: 'Nemokama 30min konsultacija su expert team',
    action: 'Rezervuoti laiką'
  },
  {
    icon: Rocket,
    title: 'Project Kickoff',
    description: 'Greitas projekto startas per 48h',
    action: 'Pradėti dabar'
  }
];

export const Contact = () => {
  return (
    <section id="kontaktai" className="py-32 bg-gradient-to-br from-black via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
              <Star size={16} className="text-yellow-400" />
              Premium Consultation Available
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CONNECT WITH
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                EXCELLENCE
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Pasiruošę transformuoti savo verslą? Susisiekite su premium ekspertų komanda 
              ir pradėkite kelionę į neprilygstamą sėkmę.
            </p>
          </div>
          
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-4"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={40} className="text-white" />
                  </div>
                  
                  <h3 className="relative text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {info.title}
                  </h3>
                  
                  <p className="relative text-white/90 font-medium mb-2">
                    {info.content}
                  </p>

                  <p className="relative text-white/50 text-sm">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/[0.05] backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {method.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Pasiruošę kurti istoriją?
            </h3>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Jūsų sėkmės istorija prasideda čia. Susisiekite dabar ir gaukite 
              individualizuotą strategiją, kuri transformuos jūsų verslą.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="flex-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                Pradėti dabar
              </button>
              
              <button className="flex-1 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
