"use client"

import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Portfolio = {
  id: string
  title: string
  category: string
  image_url: string
  description: string
}

export function AdminDashboard() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Jas Almamater')
  const [imageUrl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPortfolios()
  }, [])

  async function fetchPortfolios() {
    const { data } = await supabase.from('portfolios').select('*').order('created_at', { ascending: false })
    if (data) setPortfolios(data)
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.from('portfolios').insert([
      { title, category, image_url: imageUrl, description }
    ])

    if (error) {
      setError(error.message)
    } else {
      setTitle('')
      setImageUrl('')
      setDescription('')
      fetchPortfolios()
    }
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (!confirm('Yakin ingin menghapus portofolio ini?')) return
    await supabase.from('portfolios').delete().eq('id', id)
    fetchPortfolios()
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    window.location.href = '/admin'
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-200">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-950">Admin Dashboard</h1>
            <p className="text-sm text-zinc-500">Kelola portofolio konveksi yang tampil di halaman depan.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-100 text-sm font-medium px-4 py-2 rounded-lg transition-all"
          >
            Keluar (Logout)
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form Add */}
          <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm h-fit">
            <h3 className="text-lg font-bold text-zinc-950 mb-4">Tambah Portofolio Baru</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Judul Projek</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Contoh: Almamater Univ. Indonesia"
                  className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Kategori</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
                  <option value="Jas Almamater">Jas Almamater</option>
                  <option value="Seragam Kantor">Seragam Kantor</option>
                  <option value="Rompi Korporat">Rompi Korporat</option>
                  <option value="Jaket Kampus">Jaket Kampus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">URL Gambar (Direct Link)</label>
                <input 
                  type="url" 
                  value={imageUrl} 
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Deskripsi Singkat</label>
                <textarea 
                  rows={3}
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Bahan American Drill, bordir komputer..."
                  className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  required
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-zinc-950 hover:bg-zinc-900 text-white font-medium py-2.5 rounded-lg text-sm shadow-sm transition-all"
              >
                {loading ? 'Menyimpan...' : 'Simpan Portofolio'}
              </button>
            </form>
          </div>

          {/* List Portfolios */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-zinc-950 mb-4">Daftar Portofolio ({portfolios.length})</h3>
            {portfolios.length === 0 ? (
              <p className="text-sm text-zinc-500 bg-white p-8 rounded-2xl border border-zinc-200 text-center">Belum ada portofolio tersimpan.</p>
            ) : (
              portfolios.map((item) => (
                <div key={item.id} className="bg-white border border-zinc-200 p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src={item.image_url} alt={item.title} className="w-16 h-16 object-cover rounded-lg bg-zinc-100 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-1">{item.category}</span>
                      <h4 className="font-bold text-zinc-900 text-base">{item.title}</h4>
                      <p className="text-xs text-zinc-600 line-clamp-1">{item.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-700 text-xs font-medium px-3 py-1.5 bg-red-50 hover:bg-red-100 rounded-lg transition-all flex-shrink-0"
                  >
                    Hapus
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
