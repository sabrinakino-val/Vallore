// Configuração do EmailJS para a Vallore
// Para configurar:
// 1. Acesse https://www.emailjs.com/
// 2. Crie uma conta gratuita
// 3. Configure um serviço de email (Gmail, Outlook, etc.)
// 4. Crie templates para os emails
// 5. Substitua as chaves abaixo pelas suas

export const EMAILJS_CONFIG = {
  // Chave pública do EmailJS (obtida no dashboard)
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE",
  
  // ID do serviço de email configurado
  SERVICE_ID: "service_vallore",
  
  // Templates de email
  TEMPLATES: {
    // Template para notificação de login
    LOGIN_NOTIFICATION: "template_login_notification",
    
    // Template para solicitação de acesso
    ACCESS_REQUEST: "template_access_request"
  }
};

// Instruções para configuração:
/*
1. CRIAR CONTA NO EMAILJS:
   - Acesse: https://www.emailjs.com/
   - Crie uma conta gratuita (100 emails/mês)

2. CONFIGURAR SERVIÇO DE EMAIL:
   - Vá em "Email Services"
   - Adicione Gmail, Outlook ou outro provedor
   - Configure com o email: contato@valloregestao.com.br

3. CRIAR TEMPLATES:
   
   Template 1 - LOGIN_NOTIFICATION:
   - Nome: "Login Notification"
   - Template ID: "template_login_notification"
   - Conteúdo:
     Subject: {{subject}}
     To: {{to_email}}
     Body: {{message}}

   Template 2 - ACCESS_REQUEST:
   - Nome: "Access Request"
   - Template ID: "template_access_request"
   - Conteúdo:
     Subject: {{subject}}
     To: {{to_email}}
     Body: {{full_message}}

4. OBTER CHAVES:
   - Public Key: Em "Account" > "General"
   - Service ID: Em "Email Services" (ex: service_vallore)

5. ATUALIZAR CONFIGURAÇÃO:
   - Substitua "YOUR_PUBLIC_KEY_HERE" pela sua chave pública
   - Atualize os IDs se necessário
*/