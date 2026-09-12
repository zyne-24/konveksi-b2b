-- Supabase Database Schema for Konveksi B2B Platform

-- 1. Portfolios Table (Dynamic showcase of previous works)
create table if not exists portfolios (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null, -- e.g. 'Almamater', 'Jas Almamater', 'Rompi', 'Seragam Kantor'
  image_url text not null,
  description text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table portfolios enable row level security;

-- Policies:
-- Allow public read access to portfolios
create policy "Allow public read access on portfolios"
  on portfolios for select
  using (true);

-- Allow authenticated users (admin) to insert/update/delete portfolios
create policy "Allow authenticated admin insert on portfolios"
  on portfolios for insert
  to authenticated
  with check (true);

create policy "Allow authenticated admin update on portfolios"
  on portfolios for update
  to authenticated
  using (true);

create policy "Allow authenticated admin delete on portfolios"
  on portfolios for delete
  to authenticated
  using (true);

-- 3. Storage Bucket for Portfolio Images
-- Run this in Supabase SQL Editor or via dashboard:
-- insert into storage.buckets (id, name, public) values ('portfolios', 'portfolios', true);
-- create policy "Public Access Storage" on storage.objects for select using ( bucket_id = 'portfolios' );
-- create policy "Auth Upload Storage" on storage.objects for insert to authenticated with check ( bucket_id = 'portfolios' );
