-- 1. Portfolios Table
create table if not exists portfolios (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null,
  image_url text not null,
  description text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table portfolios enable row level security;

create policy "Allow public read access on portfolios"
  on portfolios for select using (true);

create policy "Allow authenticated admin insert on portfolios"
  on portfolios for insert to authenticated with check (true);

create policy "Allow authenticated admin update on portfolios"
  on portfolios for update to authenticated using (true);

create policy "Allow authenticated admin delete on portfolios"
  on portfolios for delete to authenticated using (true);

-- 2. Storage Bucket for Portfolios & Order Uploads
insert into storage.buckets (id, name, public) 
values ('portfolios', 'portfolios', true)
on conflict (id) do nothing;

create policy "Public Access Storage"
  on storage.objects for select using ( bucket_id = 'portfolios' );

create policy "Auth Upload Storage"
  on storage.objects for insert to authenticated with check ( bucket_id = 'portfolios' );

create policy "Auth Delete Storage"
  on storage.objects for delete to authenticated using ( bucket_id = 'portfolios' );
