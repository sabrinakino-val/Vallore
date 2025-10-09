import React from 'react';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Gestão Empresarial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/70"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Mais de 6 anos de experiência
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Gestão que 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {' '}Transforma
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Soluções personalizadas em gestão administrativa e financeira 
                para impulsionar o crescimento da sua empresa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center shadow-xl"
              >
                Solicitar Consultoria
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-cyan-300">6+</div>
                <div className="text-blue-200 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-300">100%</div>
                <div className="text-blue-200 text-sm">Comprometimento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-300">∞</div>
                <div className="text-blue-200 text-sm">Soluções Personalizadas</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Equipe Vallore" 
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Crescimento</div>
                  <div className="text-green-600 font-bold text-xl">+35%</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Clientes</div>
                  <div className="text-blue-600 font-bold text-xl">Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;