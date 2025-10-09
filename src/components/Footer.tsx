import React from 'react';
import { Mail, Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/LOGO EM PNG_Prancheta 1.png" 
                alt="Vallore" 
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transformando a gestão empresarial através de soluções inovadoras 
              em administração e finanças. Sua empresa merece o melhor.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} />
                <span>(32) 9848-2483</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>contato@valloregestao.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Instagram size={18} />
                <span>@valloregestao</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} />
                <span>CNPJ: 52.633.207/0001-05</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/valloregestao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/553298482483" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:contato@valloregestao.com.br"
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Gestão de Processos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Organização Estrutural</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Controle Patrimonial</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Análise Financeira</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Gestão de Pessoas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Compliance</a></li>
              <li><a href="#financial-solutions" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Soluções Financeiras</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Início</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Serviços</a></li>
              <li><a href="#financial-solutions" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Soluções Financeiras</a></li>
              <li><a href="#about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Sobre</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contato</a></li>
            </ul>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vallore. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;