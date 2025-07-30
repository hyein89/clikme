// pages/index.tsx
"use client";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">ClikMe</h1>
          <nav className="space-x-4 text-sm">
            <a href="#features" className="hover:underline">
              Fitur
            </a>
            <a href="#cara" className="hover:underline">
              Cara Kerja
            </a>
            <a href="#mulai" className="hover:underline">
              Mulai
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Shorten. Redirect. Monetize.
        </h2>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-6">
          ClikMe adalah layanan redirect cerdas yang mendukung tracking `sub`,
          dan bisa diarahkan berdasarkan lokasi negara untuk monetisasi dengan Adsterra, dll.
        </p>
        <a
          href="#mulai"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Mulai Sekarang
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-12 px-6 bg-white dark:bg-gray-800 border-t">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">Redirect Berdasarkan Negara</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Otomatis arahkan pengunjung ke penawaran sesuai asal negara mereka.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Tracking dengan Sub ID</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Tambahkan parameter `sub` untuk pelacakan campaign atau traffic source.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Mudah Disesuaikan</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Atur offer cukup dari satu file. Praktis dan fleksibel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="mulai" className="py-16 px-6 text-center bg-indigo-50 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">Siap memulai?</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Gunakan URL seperti <code>/ref/fr?sub=abc123</code> dan arahkan traffic kamu sekarang.
        </p>
        <a
          href="/ref/fr?sub=demo"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Coba Sekarang
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
        © {new Date().getFullYear()} ClikMe. Dibuat dengan ❤️.
      </footer>
    </main>
  );
}
