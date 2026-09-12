# PRD: Platform Konveksi B2B (Bespoke & Corporate Uniforms)

## 1. Overview & Objectives
- **1.1 Problem Statement:** Website konveksi lokal seringkali tampil murahan, berantakan, menggunakan desain dark mode yang tidak cocok untuk klien korporat, serta tidak transparan soal termin pembayaran dan minimum order.
- **1.2 Project Goal:** Membangun platform web konveksi B2B yang bersih, berwibawa, berstandar high-trust, dilengkapi galeri portofolio dinamis, form order kustom dengan validasi ketat, dan integrasi WhatsApp checkout transparan (termin DP 50%).
- **1.3 Target Users / Persona:** Tim procurement perusahaan, HRD, panitia kampus, dan brand clothing (B2B buyers).
- **1.4 Constraints & Boundaries:** Wajib menggunakan light mode bersih, zero AI slop, tanpa em-dash (-), minimum order 12 pcs, dan desain profesional (bukan editorial/magazine).

## 2. Tech Stack & Infrastructure
- **2.1 Frontend Framework:** Next.js 15 (App Router).
- **2.2 Styling & Design System:** Tailwind CSS v4 + Shadcn/UI.
- **2.3 Backend & Database:** Supabase (PostgreSQL, Storage, Auth).
- **2.4 Authentication & Security:** Supabase Auth (Email/Password).
- **2.5 Hosting & Deployment:** Vercel.

## 3. Design System & Vibe Direction
- **3.1 Visual Aesthetic (Vibe):** Modern Product System (Bersih, presisi, terang, berwibawa).
- **3.2 Color Palette:** Light Mode dominant. Background Clean Bone (#FFFFFF), Border (#E4E4E7), Teks Hitam Pekat (#09090B), Accent Tunggal (Deep Navy #1E293B).
- **3.3 Typography:** Satoshi (Headings), Inter (Body & Form/Data).
- **3.4 Layout System:** 12-column grid, struktur bento teratur, generous whitespace, zero-center hero clichés.

## 4. Architecture & File Structure
- **4.1 Directory Mapping:**
  ```text
  app/
    ├── admin/          # Protected dashboard (CRUD)
    ├── page.tsx        # Landing Page (Hero, Portfolio, Timeline, FAQ)
    ├── layout.tsx      # Root layout + Fonts + Providers
  components/
    ├── ui/             # Shadcn primitives
    ├── hero.tsx        # Asymmetric split hero
    ├── portfolio-grid.tsx # Dynamic gallery from Supabase
    ├── order-form.tsx  # Validation + WhatsApp generator
  lib/
    ├── supabase/       # Client/Server DB helpers
  ```
- **4.2 Routing Strategy:** App Router dengan Server Components default.

## 5. Core Functional Requirements
- **5.1 Database Schema:** 
  - Table `portfolios`: `id` (uuid), `title` (text), `category` (text), `image_url` (text), `description` (text), `created_at` (timestamp).
- **5.2 Feature Modules & User Actions:** Landing, Custom Order Form, WhatsApp Checkout Generator, Admin Dashboard (CRUD).
- **5.3 Form Validation & Business Logic:** 
  - Qty: `min=12` (Hard requirement).
  - Materials: Dropdown + Custom Text input.
  - WhatsApp Format: Terstruktur dengan rincian total dan termin DP 50%.
- **5.4 External Integrations:** Supabase Storage & WhatsApp URL Scheme.

## 6. User Journey & Flow
- **6.1 Discovery Phase:** User melihat Hero spesialisasi, portofolio hasil jahitan (dari Supabase), dan timeline produksi transparan.
- **6.2 Action / Conversion Phase:** User mengisi form spesifikasi dengan validasi qty `min=12`.
- **6.3 Checkout / Transaction Flow:** Tombol WhatsApp menyusun data pesanan secara otomatis dengan info termin DP 50%.
- **6.4 Post-Purchase / Fulfillment Milestone:** Produksi berjalan via komunikasi foto fisik -> QC -> Pelunasan 50% -> Kirim.

## 7. Implementation Rules & Anti-Patterns
- **7.1 What to Build (Do's):** Terapkan Light Mode bersih, font Satoshi + Inter, validasi `min=12` di form, data portofolio dari Supabase.
- **7.2 What to Avoid (Don'ts / Anti-Slop):** Zero dark mode, zero gradients, zero em-dash (-), zero editorial layout/typography flourishes, zero hardcoded content.
