import React from 'react';
import { DollarSign, TrendingUp, PieChart, Calculator, CreditCard, Building } from 'lucide-react';

const FinancialSolutions = () => {
  return (
    <section id="financial-solutions" className="py-24 bg-gradient-to-b from-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full translate-x-32 translate-y-32"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-cyan-500/20 backdrop-blur-sm text-cyan-300 rounded-full px-4 py-2 text-sm font-medium mb-4">
            Soluções Financeiras
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Recursos Financeiros 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              {' '}Estratégicos
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Voltado para empresas do setor agropecuário que buscam recursos financeiros estratégicos 
            para investir em crescimento, inovação ou estabilidade financeira. Com profundo 
            conhecimento do mercado agro e expertise em soluções financeiras, a Vallore auxilia seus 
            clientes a identificar e acessar as melhores oportunidades de crédito, alinhadas às suas 
            necessidades e à capacidade de pagamento.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Especialistas em Agronegócio
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Nossa equipe possui vasta experiência no setor agropecuário, compreendendo 
                as particularidades e necessidades específicas de cada segmento do agronegócio.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <Building className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Revendas</h4>
                <p className="text-sm text-blue-200">Soluções para revendas agrícolas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Distribuições</h4>
                <p className="text-sm text-blue-200">Apoio a distribuidoras do setor</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <PieChart className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Indústrias</h4>
                <p className="text-sm text-blue-200">Recursos para indústrias agrícolas</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Gráfico Financeiro Positivo" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <DollarSign className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Crédito Estratégico</div>
                  <div className="text-green-600 font-bold text-xl">Personalizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Identificação de Oportunidades
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Mapeamos as melhores linhas de crédito disponíveis no mercado, 
              adequadas ao perfil e necessidades da sua empresa.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Análise de Capacidade
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Avaliamos sua capacidade de pagamento e estruturamos propostas 
              financeiras viáveis e sustentáveis.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Acompanhamento Estratégico
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Oferecemos suporte contínuo durante todo o processo, desde a 
              solicitação até a liberação dos recursos.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Precisa de Recursos Financeiros?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para ajudar sua empresa 
              a acessar as melhores oportunidades de crédito do mercado.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Consultar Soluções Financeiras
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSolutions;