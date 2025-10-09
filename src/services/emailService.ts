import emailjs from '@emailjs/browser';

// Configuração do EmailJS
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE', // Substitua pela sua chave pública
  SERVICE_ID: 'service_vallore',       // ID do serviço configurado
  TEMPLATE_ID: 'template_contact'      // ID do template
};

// Inicializar EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export interface EmailData {
  to_email: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
  request_type?: 'login' | 'access_request';
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log('📧 Enviando email...', emailData);
    
    const templateParams = {
      to_email: emailData.to_email,
      from_name: emailData.from_name,
      from_email: emailData.from_email,
      subject: emailData.subject,
      message: emailData.message,
      company: emailData.company || '',
      phone: emailData.phone || '',
      request_type: emailData.request_type || 'contact',
      timestamp: new Date().toLocaleString('pt-BR')
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Email enviado com sucesso:', response);
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    return false;
  }
};

export const sendLoginNotification = async (username: string): Promise<boolean> => {
  const emailData: EmailData = {
    to_email: 'contato@valloregestao.com.br',
    from_name: 'Sistema Vallore',
    from_email: 'sistema@valloregestao.com.br',
    subject: `🔐 Novo Login Realizado - ${username}`,
    message: `
Um novo login foi realizado no sistema Vallore:

👤 Usuário: ${username}
🕐 Data/Hora: ${new Date().toLocaleString('pt-BR')}
🌐 Sistema: Portal Vallore
🔗 Ação: Acesso à Calculadora de Crédito

Este é um email automático de notificação de segurança.

---
Sistema de Gestão Vallore
CNPJ: 52.633.207/0001-05
    `,
    request_type: 'login'
  };

  return await sendEmail(emailData);
};

export const sendAccessRequest = async (requestData: {
  name: string;
  email: string;
  company: string;
  phone: string;
}): Promise<boolean> => {
  const emailData: EmailData = {
    to_email: 'contato@valloregestao.com.br',
    from_name: requestData.name,
    from_email: requestData.email,
    subject: `🆕 Nova Solicitação de Cadastro - ${requestData.name}`,
    message: `
NOVA SOLICITAÇÃO DE CADASTRO - VALLORE

📋 DADOS DO SOLICITANTE:
👤 Nome: ${requestData.name}
📧 Email: ${requestData.email}
🏢 Empresa: ${requestData.company}
📱 Telefone: ${requestData.phone}
🕐 Data/Hora: ${new Date().toLocaleString('pt-BR')}

🔐 AÇÕES NECESSÁRIAS:
1. Analisar os dados do solicitante
2. Verificar se a empresa é elegível
3. Criar credenciais de acesso (usuário/senha)
4. Enviar email de aprovação para: ${requestData.email}

📧 TEMPLATE DE RESPOSTA SUGERIDO:
---
Assunto: ✅ Cadastro Aprovado - Vallore

Olá ${requestData.name},

Seu cadastro foi aprovado! Suas credenciais de acesso:

🔐 Usuário: [DEFINIR_USUARIO]
🔑 Senha: [DEFINIR_SENHA]
🌐 Site: https://valloregestao.com.br

Agora você pode acessar:
• Calculadora de Crédito
• Recursos Exclusivos
• Consultoria Personalizada

Bem-vindo à Vallore!

Atenciosamente,
Equipe Vallore
---

Sistema de Gestão Vallore
CNPJ: 52.633.207/0001-05
    `,
    company: requestData.company,
    phone: requestData.phone,
    request_type: 'access_request'
  };

  return await sendEmail(emailData);
};

export const sendRegistrationRequest = async (requestData: {
  name: string;
  email: string;
  company: string;
  phone: string;
}): Promise<boolean> => {
  const emailData: EmailData = {
    to_email: 'contato@valloregestao.com.br',
    from_name: requestData.name,
    from_email: requestData.email,
    subject: `🆕 Nova Solicitação de Cadastro - ${requestData.name}`,
    message: `
NOVA SOLICITAÇÃO DE CADASTRO - VALLORE

👤 Nome: ${requestData.name}
📧 Email: ${requestData.email}
🏢 Empresa: ${requestData.company}
📱 Telefone: ${requestData.phone}
🕐 Data/Hora: ${new Date().toLocaleString('pt-BR')}

🔐 AÇÕES NECESSÁRIAS:
1. Analisar os dados do solicitante
2. Verificar se a empresa é elegível
3. Criar credenciais de acesso (usuário/senha)
4. Enviar email de aprovação para: ${requestData.email}

📧 TEMPLATE DE RESPOSTA SUGERIDO:
---
Assunto: ✅ Cadastro Aprovado - Vallore

Olá ${requestData.name},

Seu cadastro foi aprovado! Suas credenciais de acesso:

🔐 Usuário: [DEFINIR_USUARIO]
🔑 Senha: [DEFINIR_SENHA]
🌐 Site: https://valloregestao.com.br

Agora você pode acessar:
• Calculadora de Crédito
• Recursos Exclusivos
• Consultoria Personalizada

Bem-vindo à Vallore!

Atenciosamente,
Equipe Vallore
---

Sistema de Gestão Vallore
CNPJ: 52.633.207/0001-05
    `,
    company: requestData.company,
    phone: requestData.phone,
    request_type: 'access_request'
  };

  return await sendEmail(emailData);
};