
import { Monitor, Video, Share2, Palette, TrendingUp, Globe } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Internetinė reklama',
    description: 'Kurkime efektyvias Google Ads, Facebook Ads, LinkedIn ir YouTube kampanijas, kurios pasižymi aukštu konversijos rodikliu ir padeda padidinti pardavimus.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Video,
    title: 'Video gamyba',
    description: 'Patyrusių kūrėjų komanda kuria įspūdingus reklaminius vaizdo įrašus, animacijas ir judančios grafikos sprendimus, kurie iškelia jūsų prekės ženklą į kitą lygį.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Share2,
    title: 'Socialinių tinklų reklama',
    description: 'Sukurkite įtikinamas kampanijas Instagram, TikTok ir YouTube platformose, pasieksite savo tikslinę auditoriją ir padidinkite įsitraukimą.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'Kūrybiniai sprendimai',
    description: 'Unikalūs ir modernūs dizaino sprendimai, kurie išskiria jūsų prekės ženklą iš konkurentų.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: TrendingUp,
    title: 'Analitika ir optimizavimas',
    description: 'Nuolatinis duomenų analizavimas ir kampanijų tobulinimas, siekiant maksimalių rezultatų.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Globe,
    title: 'Svetainių kūrimas',
    description: 'Greitos, modernios ir SEO optimizuotos interneto svetainės, kurios ne tik atrodo puikiai, bet ir konvertuoja lankytojus į klientus.',
    gradient: 'from-teal-500 to-blue-500'
  }
];

export const Services = () => {
  return (
    <section id="paslaugos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mūsų paslaugos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siūlome visaapimtį skaitmeninio marketingo sprendimų paketą, 
            pritaikytą jūsų verslo poreikiams ir tikslams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
