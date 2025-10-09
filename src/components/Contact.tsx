import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "(32) 9848-2483",
      action: "tel:+553298482483",
      color: "from-green-500 to-emerald-500",
      description: "Ligue agora e fale conosco"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      info: "contato@valloregestao.com.br",
      action: "mailto:contato@valloregestao.com.br",
      color: "from-blue-500 to-cyan-500",
      description: "Envie sua mensagem"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      info: "@valloregestao",
      action: "https://instagram.com/valloregestao",
      color: "from-pink-500 to-purple-500",
      description: "Siga-nos no Instagram"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      info: "(32) 9848-2483",
      action: "https://wa.me/553298482483",
      color: "from-green-400 to-green-600",
      description: "Converse pelo WhatsApp"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            Entre em Contato
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Conversar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar a gestão da sua empresa? Nossa equipe está 
            aqui para ajudar você a alcançar seus objetivos.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {method.title}
              </h3>
              <p className="text-blue-600 font-semibold mb-2">{method.info}</p>
              <p className="text-sm text-gray-600">{method.description}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Informações da Empresa
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Localização</h4>
                    <p className="text-gray-600">
                      CNPJ: 52.633.207/0001-05<br />
                      Minas Gerais - MG
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Agende uma Reunião Agora
                  </h3>
                  <p className="mb-6 text-blue-100">
                    Agende uma conversa sem compromisso e descubra como podemos 
                    ajudar sua empresa a crescer.
                  </p>
                  <a 
                    href="https://wa.me/553298482483?text=Olá! Gostaria de agendar uma reunião para conhecer os serviços da Vallore." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Agendar Reunião
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-nos sobre suas necessidades..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105"
              >
                Enviar Mensagem
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;