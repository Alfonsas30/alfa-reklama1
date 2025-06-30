
import { Award, Users, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '12+ metų patirtis',
    description: 'Esame ambasadoriai skaitmeninio marketingo srityje'
  },
  {
    icon: Zap,
    title: 'Modernios technologijos',
    description: 'Naudojame inovatyvias strategijas ir sprendimus'
  },
  {
    icon: Target,
    title: 'Individualūs sprendimai',
    description: 'Kuriame sprendimus, atitinkančius jūsų tikslus ir biudžetą'
  },
  {
    icon: Users,
    title: 'Profesionali komanda',
    description: 'Patyrę specialistai visose srityse'
  }
];

export const About = () => {
  return (
    <section id="apie" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Apie Alfa Reklamą
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Esame ambasadoriai skaitmeninio marketingo srityje su daugiau nei 12 metų patirtimi. 
                Kurimo procese naudojame modernias technologijas ir inovatyvias strategijas, 
                užtikrinančias, kad jūsų verslas būtų matomas ir pasiekimas plačioje interneto erdvėje.
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Mes tikime, kad kiekvienas verslas yra unikalus, todėl kuriame individualius 
                sprendimus, atitinkančius jūsų tikslus ir biudžetą.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Mūsų misija</h3>
                <p className="text-lg opacity-90">
                  Padėti verslams augti ir klestėti skaitmeniniame pasaulyje, 
                  teikiant aukščiausios kokybės marketingo sprendimus.
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full opacity-20"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={40} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
