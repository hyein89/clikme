"use client";

import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchTMDB = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
        query
      )}&api_key=YOUR_TMDB_API_KEY`
    );
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold">🎬 Movie & TV Finder</h1>
      </header>

      {/* Search Form */}
      <section className="p-4 max-w-4xl mx-auto">
        <form onSubmit={searchTMDB} className="flex gap-2">
          <input
            type="text"
            placeholder="Search movies or TV shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      </section>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>
      )}

      {/* Results */}
      <section className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {results.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden group"
            >
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title || item.name}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-[400px] bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                  No Image
                </div>
              )}
              <div className="p-3">
                <h2 className="text-base font-semibold truncate">
                  {item.title || item.name}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {item.release_date || item.first_air_date || "-"}
                </p>
                <span
                  className={`inline-block text-[10px] mt-1 px-2 py-0.5 rounded-full ${
                    item.media_type === "movie"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {item.media_type === "movie" ? "Movie" : "TV"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
