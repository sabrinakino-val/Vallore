# 📧 Configuração do EmailJS - Vallore

Este documento explica como configurar o EmailJS para envio automático de notificações por email.

## 🚀 Passo a Passo Completo

### 1. Criar Conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Clique em **"Sign Up"**
3. Crie uma conta gratuita (permite 200 emails/mês)
4. Confirme seu email

### 2. Configurar Serviço de Email
1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **Gmail** 
4. Configure com: `contato@valloregestao.com.br`
5. Siga as instruções para autorizar o Gmail
6. **IMPORTANTE**: Anote o **Service ID** (ex: `service_vallore`)

### 3. Criar Template de Email

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use estas configurações:

#### **Template Settings:**
```
Template Name: Vallore Contact Template
Template ID: template_contact
```

#### **Template Content:**
```
Subject: {{subject}}

From: {{from_name}} <{{from_email}}>
To: contato@valloregestao.com.br

{{message}}

---
Informações Adicionais:
Empresa: {{company}}
Telefone: {{phone}}
Tipo: {{request_type}}
Data/Hora: {{timestamp}}

Sistema de Gestão Vallore
CNPJ: 52.633.207/0001-05
```

### 4. Obter Chaves de API
1. Vá em **"Account"** > **"General"**
2. Copie sua **Public Key**
3. Anote o **Service ID** do serviço criado

### 5. Atualizar Configuração no Código

Edite o arquivo `src/services/emailService.ts`:

```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'SUA_CHAVE_PUBLICA_AQUI',  // Cole sua Public Key
  SERVICE_ID: 'service_vallore',          // Seu Service ID
  TEMPLATE_ID: 'template_contact'         // Seu Template ID
};
```

### 6. Testar o Sistema
1. Salve as alterações
2. Acesse o site
3. Tente fazer login ou solicitar acesso
4. Verifique se os emails chegaram em `contato@valloregestao.com.br`

## 🔧 Exemplo de Configuração Completa

### **Public Key:** 
Exemplo: `user_1a2b3c4d5e6f7g8h9i0j`

### **Service ID:**
Exemplo: `service_vallore` ou `service_gmail`

### **Template ID:**
Exemplo: `template_contact`

## 📊 Limites do Plano Gratuito
- **200 emails/mês**
- **2 templates**
- **1 serviço de email**

## 🆘 Solução de Problemas

### ❌ Email não chega?
1. ✅ Verifique spam/lixo eletrônico
2. ✅ Confirme se o Service ID está correto
3. ✅ Verifique se o Template ID está correto
4. ✅ Teste com outro email primeiro

### ❌ Erro de API?
1. ✅ Verifique se a Public Key está correta
2. ✅ Confirme se os IDs estão corretos
3. ✅ Verifique console do navegador para erros
4. ✅ Teste no playground do EmailJS

### ❌ Erro de CORS?
1. ✅ Adicione seu domínio nas configurações do EmailJS
2. ✅ Verifique se está usando HTTPS

## 📞 Suporte
- **Documentação:** https://www.emailjs.com/docs/
- **Suporte EmailJS:** https://www.emailjs.com/contact/
- **Dashboard:** https://dashboard.emailjs.com/

## ✅ Checklist Final
- [ ] Conta EmailJS criada
- [ ] Serviço Gmail configurado
- [ ] Template criado com conteúdo correto
- [ ] Public Key copiada
- [ ] Service ID anotado
- [ ] Template ID anotado
- [ ] Código atualizado com as chaves
- [ ] Teste realizado com sucesso

**Após seguir todos os passos, os emails serão enviados automaticamente!** 🚀