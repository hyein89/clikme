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
      )}&api_key=8d6d91941230817f7807d643736e8a49`
    );
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 p-4 bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            🎬 Movie & TV Finder
          </h1>
        </div>
      </header>

      {/* Search Form */}
      <section className="p-4 max-w-4xl mx-auto">
        <form onSubmit={searchTMDB} className="flex gap-2">
          <input
            type="text"
            placeholder="Search movies or TV shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
          >
            Search
          </button>
        </form>
      </section>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-500 dark:text-gray-400">
          Loading...
        </div>
      )}

      {/* Results */}
      <section className="p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {results.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 group"
            >
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title || item.name}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-[400px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300">
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
                  className={`inline-block mt-2 text-[10px] px-2 py-1 rounded-full ${
                    item.media_type === "movie"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                      : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                  }`}
                >
                  {item.media_type === "movie" ? "Movie" : "TV Show"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
