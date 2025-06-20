// app/(main)/add/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ini bener (bukan 'next/router')

export default function AddUser() {
  const [form, setForm] = useState({ name: '', email: '' });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    router.push('/dashboard'); // balik ke dashboard setelah simpan
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-7">
        {/* HEAD */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Tambah User
          </h1>
          <p className="text-gray-300 text-lg">Kelola data pengguna dengan mudah</p>
        </div>

        {/* FORM */}
        <div className="bg-gray-800 rounded-2xl border border-gray-400">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className='block text-sm font-semibold text-gray-200'>
                  Masukan Nama
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder='Masukkan Nama'
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg"
                  required
                />
              </div>

              <div className="space-y-2 mt-4">
                <label htmlFor="email" className='block text-sm font-semibold text-gray-200'>
                  Masukan Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder='contoh@gmail.com'
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg"
                  required
                />
              </div>

              <button
                type="submit"
                className='w-full mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg'
              >
                Simpen
              </button>
            </form>
          </div>
        </div>
        {/* FORM END */}
      </div>
    </div>
  );
}
