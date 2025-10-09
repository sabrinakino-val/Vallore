# 📧 Configurar Netlify Forms - PASSO A PASSO

## 🎯 **IMPORTANTE: Configure Agora para Receber Emails!**

### **📋 Passo 1: Acesse o Dashboard Netlify**
1. Vá para: https://app.netlify.com/
2. Faça login na sua conta
3. Clique no seu site: **valloregestao.com.br**

### **📧 Passo 2: Configurar Notificações por Email**
1. No menu lateral, clique em **"Forms"**
2. Clique em **"Settings and usage"**
3. Clique em **"Form notifications"**
4. Clique no botão **"Add notification"**
5. Selecione **"Email notification"**

### **⚙️ Passo 3: Configurar o Email**
Preencha os campos:
- **Form:** Selecione `cadastro-vallore`
- **Email to notify:** `contato@valloregestao.com.br`
- **Subject line:** `🆕 Novo Cadastro - Vallore`
- **Custom message:** (deixe em branco ou personalize)

### **✅ Passo 4: Salvar e Testar**
1. Clique em **"Save"**
2. Teste fazendo um cadastro no site
3. Verifique o email em até 5 minutos

## 📧 **Email que Você Receberá:**

```
De: team@netlify.com
Para: contato@valloregestao.com.br
Assunto: 🆕 Novo Cadastro - Vallore

New form submission

Form name: cadastro-vallore
Submitted: [data/hora]

Form data:
- nome: João Silva
- email: joao@empresa.com
- empresa: Agro Silva Ltda
- telefone: (32) 99999-9999
- data-hora: 22/09/2024 11:30:15
- mensagem: NOVA SOLICITAÇÃO DE CADASTRO - VALLORE
  👤 Nome: João Silva
  📧 Email: joao@empresa.com
  🏢 Empresa: Agro Silva Ltda
  📱 Telefone: (32) 99999-9999
  
  AÇÕES NECESSÁRIAS:
  1. Analisar os dados do solicitante
  2. Criar credenciais de acesso
  3. Enviar email de aprovação
```

## 🔧 **Se Não Conseguir Configurar:**

### **Opção 1: Verificar Formulários Existentes**
1. Vá em **Forms** no Netlify
2. Procure por `cadastro-vallore`
3. Se não aparecer, faça um teste de cadastro primeiro

### **Opção 2: Configuração Alternativa**
1. Vá em **Site settings**
2. Procure por **"Build & deploy"**
3. Em **"Environment variables"** adicione:
   - Key: `FORM_EMAIL`
   - Value: `contato@valloregestao.com.br`

## 🚨 **MUITO IMPORTANTE:**

**SEM ESTA CONFIGURAÇÃO, OS EMAILS NÃO CHEGAM!**

O sistema está pronto, mas você precisa configurar as notificações no Netlify para receber os emails.

## 📞 **Precisa de Ajuda?**

Se tiver dificuldades:
- **WhatsApp:** (32) 9848-2483
- **Email:** contato@valloregestao.com.br

**Configure agora para começar a receber os cadastros!** 🚀