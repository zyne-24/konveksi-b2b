"use client"

import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { motion } from 'framer-motion'

type Portfolio = {
  id: string
  title: string
  category: string
  image_url: string
  description: string
}

type FormData = {
  title: string
  category: string
  description: string
  file: File | null
}

const EMPTY_FORM: FormData = { title: '', category: 'Jas Almamater', description: '', file: null }

export function AdminDashboard() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => { fetchPortfolios() }, [])

  async function fetchPortfolios() {
    const { data } = await supabase.from('portfolios').select('*').order('created_at', { ascending: false })
    if (data) setPortfolios(data)
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null
    setForm((f) => ({ ...f, file }))
  }

  async function uploadImage(file: File): Promise<string | null> {
    const ext = file.name.split('.').pop()
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const { error } = await supabase.storage.from('portfolios').upload(path, file)
    if (error) {
      alert('Upload gagal: ' + error.message)
      return null
    }
    const { data } = supabase.storage.from('portfolios').getPublicUrl(path)
    return data.publicUrl
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      let image_url: string | null = null
      if (form.file) {
        setUploading(true)
        image_url = await uploadImage(form.file)
        setUploading(false)
      }

      if (editingId) {
        const existing = portfolios.find((p) => p.id === editingId)
        await supabase
          .from('portfolios')
          .update({
            title: form.title,
            category: form.category,
            description: form.description,
            ...(image_url ? { image_url } : {}),
          })
          .eq('id', editingId)
        setEditingId(null)
      } else {
        if (!image_url) {
          alert('Upload foto wajib untuk portofolio baru.')
          setLoading(false)
          return
        }
        await supabase.from('portfolios').insert([
          { title: form.title, category: form.category, description: form.description, image_url },
        ])
      }

      setForm(EMPTY_FORM)
      fetchPortfolios()
    } finally {
      setLoading(false)
    }
  }

  function startEdit(item: Portfolio) {
    setEditingId(item.id)
    setForm({ title: item.title, category: item.category, description: item.description, file: null })
  }

  async function handleDelete(item: Portfolio) {
    if (!confirm('Hapus portofolio ini?')) return
    if (item.image_url) {
      const path = item.image_url.split('/').pop()
      await supabase.storage.from('portfolios').remove([path || ''])
    }
    await supabase.from('portfolios').delete().eq('id', item.id)
    fetchPortfolios()
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-zinc-200 h-fit space-y-4 shadow-sm">
            <h3 className="font-bold text-lg text-zinc-950">{editingId ? 'Edit Portofolio' : 'Tambah Portofolio Baru'}</h3>
            <input
              type="text"
              placeholder="Judul"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm"
              required
            />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="Jas Almamater">Jas Almamater</option>
              <option value="Seragam Kantor">Seragam Kantor</option>
              <option value="Rompi Korporat">Rompi Korporat</option>
              <option value="Jaket Kampus">Jaket Kampus</option>
            </select>
            <textarea
              placeholder="Deskripsi"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm"
              rows={3}
              required
            />
            <div>
              <label className="block text-xs font-medium text-zinc-600 mb-1">Foto Produk {editingId ? '(opsional saat edit)' : '(wajib)'}</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="w-full text-sm text-zinc-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-zinc-900 file:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading || uploading}
              className="w-full bg-zinc-950 hover:bg-zinc-900 text-white font-medium py-2.5 rounded-lg text-sm transition-all"
            >
              {uploading ? 'Uploading...' : loading ? 'Menyimpan...' : editingId ? 'Simpan Perubahan' : 'Tambah Portofolio'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => { setEditingId(null); setForm(EMPTY_FORM) }}
                className="w-full text-xs text-zinc-500 hover:text-zinc-900"
              >
                Batal Edit
              </button>
            )}
          </form>

          {/* List */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-bold text-lg text-zinc-950">Daftar Portofolio ({portfolios.length})</h3>
            {portfolios.length === 0 && (
              <p className="text-sm text-zinc-500 bg-white p-8 rounded-2xl border border-zinc-200 text-center">
                Belum ada portofolio. Tambahkan foto pertama Anda.
              </p>
            )}
            {portfolios.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-4 rounded-xl border border-zinc-200 flex items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <img src={item.image_url} alt={item.title} className="w-16 h-16 object-cover rounded-lg bg-zinc-100 flex-shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-bold text-zinc-950 truncate">{item.title}</h4>
                    <p className="text-xs text-zinc-500">{item.category}</p>
                    <p className="text-xs text-zinc-400 truncate">{item.description}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => startEdit(item)} className="text-xs bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-lg">Edit</button>
                  <button onClick={() => handleDelete(item)} className="text-xs bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-lg">Hapus</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}