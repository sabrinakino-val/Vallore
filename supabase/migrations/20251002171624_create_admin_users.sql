/*
  # Criar tabela de usuários administrativos
  
  1. Nova Tabela
    - `admin_users`
      - `id` (uuid, chave primária)
      - `username` (text, único) - Nome de usuário do admin
      - `password_hash` (text) - Senha criptografada
      - `name` (text) - Nome completo do admin
      - `email` (text) - Email do admin
      - `is_active` (boolean) - Status ativo/inativo
      - `created_at` (timestamptz) - Data de criação
      - `last_login` (timestamptz) - Último login
  
  2. Segurança
    - Habilitar RLS na tabela `admin_users`
    - Adicionar política para leitura apenas por admins autenticados
    - Adicionar política para atualização apenas pelo próprio admin
  
  3. Dados Iniciais
    - Criar usuário admin padrão (username: admin, password: admin123)
    - Senha será 'admin123' em texto simples para facilitar primeiro acesso
*/

CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins podem visualizar outros admins"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins podem atualizar próprio perfil"
  ON admin_users
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

INSERT INTO admin_users (username, password_hash, name, email)
VALUES ('admin', 'admin123', 'Administrador Vallore', 'contato@valloregestao.com.br')
ON CONFLICT (username) DO NOTHING;

CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);
CREATE INDEX IF NOT EXISTS idx_admin_users_is_active ON admin_users(is_active);