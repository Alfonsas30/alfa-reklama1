
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefonas',
    content: '+375 44 416 66 78',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Mail,
    title: 'El. paštas',
    content: 'info@alfareklama.ch',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPin,
    title: 'Adresas',
    content: 'Šveicarija',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Darbo laikas',
    content: 'Pirmadienis – Penktadienis, 9:00 – 18:00',
    gradient: 'from-orange-500 to-red-500'
  }
];

export const Contact = () => {
  return (
    <section id="kontaktai" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Susisiekite su mumis
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pasiruošę pradėti savo reklamos kelionę? Susisiekite ir gaukite nemokamą konsultaciją!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {info.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {info.content}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Susisiekimo būdai</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-2">WhatsApp/Signal/Viber</h4>
                <p className="text-sm text-gray-300">Greitas atsakymas bet kuriuo metu</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-2">El. paštas</h4>
                <p className="text-sm text-gray-300">gmbhinvest333@gmail.com</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Facebook size={20} />
                  <span className="text-sm">Facebook puslanis</span>
                </div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105">
              Gauti nemokamą konsultaciją
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
