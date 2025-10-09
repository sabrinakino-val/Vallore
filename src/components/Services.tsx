import React from 'react';
import { 
  Settings, 
  Building2, 
  TrendingUp, 
  Users, 
  FileCheck, 
  BarChart3,
  DollarSign,
  TrendingDown,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Gestão de Processos",
      description: "Mapeamento e melhoria contínua dos processos internos, otimizando fluxos de trabalho para aumentar a produtividade.",
      features: ["Mapeamento de processos", "Otimização de fluxos", "Aumento de produtividade"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Organização Estrutural",
      description: "Reestruturação organizacional para melhorar a comunicação interna, eficiência, adequando a hierarquia e os departamentos.",
      features: ["Reestruturação organizacional", "Melhoria da comunicação", "Adequação hierárquica"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Controle Patrimonial",
      description: "Gestão do patrimônio físico da empresa, como imóveis, veículos e equipamentos com controle de depreciação e manutenção preventiva.",
      features: ["Controle de patrimônio", "Gestão de depreciação", "Manutenção preventiva"],
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Compliance e Governança Corporativa",
      description: "Adoção de práticas de governança que assegurem o cumprimento de regulamentações e minimizem riscos operacionais e reputacionais.",
      features: ["Práticas de governança", "Cumprimento regulamentações", "Minimização de riscos"],
      image: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise Financeira",
      description: "Avaliação detalhada de demonstrativos financeiros para identificar pontos de melhoria na gestão de receitas, despesas e ativos.",
      features: ["Análise de demonstrativos", "Gestão de receitas", "Otimização de despesas"],
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Planejamento e Controle Orçamentário",
      description: "Elaboração de orçamentos detalhados e acompanhamento rigoroso, com identificação e correção de desvios.",
      features: ["Elaboração de orçamentos", "Acompanhamento rigoroso", "Correção de desvios"],
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Gestão de Fluxo de Caixa",
      description: "Monitoramento e previsão do fluxo de caixa para assegurar liquidez e evitar imprevistos financeiros.",
      features: ["Monitoramento de fluxo", "Previsão financeira", "Assegurar liquidez"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão de Pessoas",
      description: "Criação de políticas de recrutamento/seleção, treinamento e desenvolvimento de talentos, além de programas de incentivo e melhoria do clima organizacional, plano de cargos e salários.",
      features: ["Recrutamento e seleção", "Treinamento e desenvolvimento", "Plano de cargos e salários"],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Soluções <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Completas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em gestão administrativa e financeira, 
            adaptadas às necessidades específicas do seu negócio.
          </p>
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
            <p className="text-lg text-gray-700 font-medium">
              Atuamos nos mais diversos ramos do Agronegócio, como em Revendas, Distribuições, e Indústrias.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Precisa de uma Solução Personalizada?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Nossa equipe está pronta para desenvolver estratégias específicas para o seu negócio.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;