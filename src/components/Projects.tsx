
import { ExternalLink, TrendingUp, Eye, Users } from 'lucide-react';

const projects = [
  {
    title: 'Google Ads + Facebook kampanija',
    description: 'E-komercijos kampanija',
    result: '+300% pardavimų per 3 mėnesius',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Video gamyba',
    description: 'Prekės ženklo ir korporatyviniai pristatymai',
    result: 'Profesionalūs vaizdo sprendimai',
    icon: Eye,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Instagram kampanijos',
    description: 'Socialinės medijos kampanijos',
    result: '500 tūkst. peržiūrų per savaitę',
    icon: Eye,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Judanti grafika',
    description: '2D animacija produkto pristatymui',
    result: 'Unikalūs animacijos sprendimai',
    icon: Eye,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'LinkedIn kampanijos',
    description: 'B2B marketingo sprendimai',
    result: 'Per 50 kvalifikuotų potencialių klientų',
    icon: Users,
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'YouTube serijos',
    description: 'Vaizdo turinio kūrimas',
    result: 'Per 1 mln. peržiūrų ir aukštas įsitraukimas',
    icon: Eye,
    gradient: 'from-red-500 to-orange-500'
  }
];

export const Projects = () => {
  return (
    <section id="projektai" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mūsų projektai
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sėkmingiausios kampanijos, kurios padėjo klientams pasiekti išskirtinius rezultatus
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <Icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors relative z-10">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 relative z-10">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-lg font-semibold text-green-600">
                    {project.result}
                  </span>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
