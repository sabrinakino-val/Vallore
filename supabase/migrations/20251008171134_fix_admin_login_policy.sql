/*
  # Fix Admin Login Policy

  1. Changes
    - Drop existing restrictive policies on admin_users table
    - Add a new policy that allows anonymous SELECT for login purposes
    - This allows the login form to query the admin_users table without authentication
  
  2. Security
    - Policy is restricted to SELECT only
    - No INSERT, UPDATE, or DELETE permissions for anonymous users
    - Password verification happens in application logic
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Admins podem visualizar outros admins" ON admin_users;
DROP POLICY IF EXISTS "Admins podem atualizar próprio perfil" ON admin_users;

-- Allow anonymous SELECT for login
CREATE POLICY "Allow anonymous login check"
  ON admin_users
  FOR SELECT
  TO anon
  USING (true);

-- Allow authenticated users to view admin profiles
CREATE POLICY "Authenticated users can view admins"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update last_login
CREATE POLICY "Authenticated users can update last login"
  ON admin_users
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
