import React from 'react';
import { Award, Target, Heart, Zap, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência",
      description: "Comprometimento com a qualidade em todos os serviços prestados.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisão",
      description: "Análises detalhadas e soluções assertivas para cada cliente.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Confiança",
      description: "Relacionamentos duradouros baseados em transparência e ética.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Inovação",
      description: "Tecnologia e metodologias modernas para resultados superiores.",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "6+", label: "Anos de Experiência" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "100%", label: "Comprometimento" },
    { icon: <Award className="w-8 h-8" />, number: "∞", label: "Soluções Personalizadas" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
                Sobre a Vallore
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transformando 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {' '}Negócios
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                A Vallore é uma empresa especializada em gestão administrativa e financeira, 
                com mais de 6 anos de experiência no mercado. Nossa missão é transformar 
                a gestão empresarial através de soluções inovadoras e personalizadas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabalhamos com empresas de todos os portes, oferecendo consultoria 
                estratégica e serviços especializados que geram resultados mensuráveis.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Equipe Vallore" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nossos Valores
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa atuação e garantem a excelência em todos os projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Por que Escolher a Vallore?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra os diferenciais que fazem da Vallore a escolha ideal para sua empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;