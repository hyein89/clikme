"use client";
import React, { useState } from "react";

const API_KEY = "8d6d91941230817f7807d643736e8a49"; // 🔁 Ganti dengan API Key milikmu

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchTMDB = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    const data = await res.json();
    setResults(data.results || []);
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">🎬 Movie & TV Search</h1>

      <form onSubmit={searchTMDB} className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Cari film atau serial..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {results.map((item: any) => (
          <div key={item.id} className="bg-white shadow rounded overflow-hidden">
            {item.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-auto"
              />
            ) : (
              <div className="w-full h-72 bg-gray-300 flex items-center justify-center text-gray-600">
                No Image
              </div>
            )}
            <div className="p-2">
              <h2 className="text-sm font-semibold">
                {item.title || item.name}
              </h2>
              <p className="text-xs text-gray-500">
                {item.release_date || item.first_air_date || "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
