// pages/index.tsx
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header Sponsor */}
      <section className="flex flex-wrap justify-center items-center gap-4 p-4 border-b border-gray-700 bg-black">
        {["premier", "tulp", "bundesliga", "porsche", "pdc", "enfusion"].map(
          (logo, idx) => (
            <Image
              key={idx}
              src={`/sponsor/${logo}.png`} // 💡 Gambar logo harus ada di public/sponsor/
              alt={logo}
              width={80}
              height={40}
              className="object-contain"
            />
          )
        )}
      </section>

      {/* Hero */}
      <section className="px-4 md:px-12 py-10 md:flex md:gap-8 items-center">
        {/* Movie List */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-3 md:w-1/2">
          {[
            "mystere",
            "ainbo",
            "enavant",
            "coco",
            "annefrank",
            "dragonschool",
          ].map((movie, idx) => (
            <Image
              key={idx}
              src={`/movies/${movie}.jpg`} // 💡 Gambar movie harus ada di public/movies/
              alt={movie}
              width={160}
              height={240}
              className="rounded-md object-cover w-full"
            />
          ))}
        </div>

        {/* Highlight Content */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase">
            Best Streaming Service For Kids
          </h2>
          <p className="text-gray-300 mb-6">
            Explore our curated collection of family-friendly content designed
            to entertain and educate your young ones.
          </p>
          <div className="bg-blue-700 p-6 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-bold mb-2">Adventures For Young Minds</h3>
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 text-sm text-gray-400">
        © {new Date().getFullYear()} KidsStream. All rights reserved.
      </footer>
    </main>
  );
}
