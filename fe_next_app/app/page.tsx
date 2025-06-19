'use client'; // instruksi Next.js bahwa ini komponen client-side, bisa pakai hook dll

// import library
import Link from 'next/link';
import { useEffect, useState } from 'react';

// definisi tipe data User
type User = {
  id: number;
  name: string;
  email: string;
};

// komponen utama
export default function Home() {
  // state untuk simpan list user dari backend
  const [users, setUsers] = useState<User[]>([]);

  // state untuk status loading data dari backend
  const [loading, setLoading] = useState(true);

  // ambil data user dari backend saat komponen pertama kali dimount
  useEffect(() => {
    fetch('http://localhost:5000/users') // request GET ke backend
      .then(res => res.json()) // ubah respons ke JSON
      .then(data => {
        setUsers(data); 
        setLoading(false); 
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        setLoading(false); // tetap matikan loading walau error
      });
  }, []);

  // UI yang dirender
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* JUST HEADING */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Manajemen User
          </h1>
          <p className="text-gray-300 text-lg">Kelola data pengguna dengan mudah</p>
        </div>
        {/* HEADING END */}

        {/* MAIN CONTAINER: kotak besar untuk menampilkan user list */}
        <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden backdrop-blur-sm">

        {/* KONDISI: jika ada user yang bisa ditampilkan */}
        <div className="divide-y divide-gray-700">
          
            {/* mapping setiap user */}
            {users.map((user) => (
              <div key={user.id} className="p-6 hover:bg-gray-700/50 transition-colors duration-150">
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {user.name}
                    </h3>
                  <p className="text-gray-300 flex items-center mt-1">
                    {user.email}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
        {/* MAIN CONTAINER END */}

        {/* BOTTOM */}
        <div className="text-center mt-8 text-gray-400">
          <p>© 2025 User Management System</p>
        </div>
        {/* BOTTOM END  */}

      </div>
    </div>
  );
}