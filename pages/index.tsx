"use client";
import React, { useState } from "react";

const API_KEY = "8d6d91941230817f7807d643736e8a49"; // Ganti dengan milikmu

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchTMDB = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setResults(data.results || []);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎬 Movie & TV Series Finder
      </h1>

      <form onSubmit={searchTMDB} className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="🔍 Cari film atau serial TV..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 shadow focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800"
        />
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {results.map((item: any) => (
          <div
            key={item.id}
            className="flex bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition hover:scale-[1.02]"
          >
            {item.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title || item.name}
                className="w-28 object-cover"
              />
            ) : (
              <div className="w-28 h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                No Image
              </div>
            )}
            <div className="p-4 flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {item.title || item.name}
                </h2>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    item.media_type === "movie"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {item.media_type === "movie" ? "Movie" : "TV"}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.release_date || item.first_air_date || "Tanggal tidak tersedia"}
              </p>
              <p className="text-sm mt-2 line-clamp-3">
                {item.overview || "Tidak ada deskripsi tersedia."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
