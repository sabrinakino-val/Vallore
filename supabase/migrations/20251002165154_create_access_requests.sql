/*
  # Criar tabela de solicitações de acesso
  
  1. Nova Tabela
    - `access_requests`
      - `id` (uuid, chave primária)
      - `name` (text) - Nome completo do solicitante
      - `email` (text) - Email do solicitante
      - `company` (text) - Empresa do solicitante
      - `phone` (text) - Telefone do solicitante
      - `message` (text) - Mensagem opcional
      - `status` (text) - Status: 'pending', 'approved', 'rejected'
      - `created_at` (timestamptz) - Data da solicitação
      - `updated_at` (timestamptz) - Data da última atualização
      - `reviewed_by` (uuid) - ID do usuário que aprovou/rejeitou
      - `reviewed_at` (timestamptz) - Data da revisão
  
  2. Segurança
    - Habilitar RLS na tabela `access_requests`
    - Adicionar política para permitir inserção pública (qualquer pessoa pode solicitar acesso)
    - Adicionar política para leitura apenas por usuários autenticados
    - Adicionar política para atualização apenas por usuários autenticados
  
  3. Índices
    - Criar índice em `email` para buscas rápidas
    - Criar índice em `status` para filtragem eficiente
*/

CREATE TABLE IF NOT EXISTS access_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  reviewed_by uuid,
  reviewed_at timestamptz
);

ALTER TABLE access_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode criar solicitação de acesso"
  ON access_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Usuários autenticados podem visualizar solicitações"
  ON access_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Usuários autenticados podem atualizar solicitações"
  ON access_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_access_requests_email ON access_requests(email);
CREATE INDEX IF NOT EXISTS idx_access_requests_status ON access_requests(status);
CREATE INDEX IF NOT EXISTS idx_access_requests_created_at ON access_requests(created_at DESC);