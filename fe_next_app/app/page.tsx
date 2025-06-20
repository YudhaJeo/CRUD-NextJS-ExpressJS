// app/page.tsx (misalnya untuk halaman root /)
export default function Home() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900 p-8">
        <h1 className="text-3xl font-bold mb-6">Kosong</h1>
        <a
          href="/dashboard"
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Ke Dashboard
        </a>
      </main>
    );
  }
  