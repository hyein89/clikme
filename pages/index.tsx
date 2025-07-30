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
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-6 bg-zinc-900 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-center">
          🎬 Movie & TV Explorer
        </h1>
      </header>

      {/* Search Form */}
      <section className="p-6 max-w-4xl mx-auto w-full">
        <form onSubmit={searchTMDB} className="flex gap-3 flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Search movies or TV shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
          >
            Search
          </button>
        </form>

        {/* About section */}
        <div className="mt-6 text-sm text-gray-400">
          <h2 className="font-semibold text-lg mb-2">About this App</h2>
          <p>
            Search for movies and TV shows using The Movie DB (TMDB). Get details like posters,
            release dates, and media type in a clean, readable format.
          </p>
        </div>
      </section>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Loading...
        </div>
      )}

      {/* Results */}
      <section className="px-4 pb-10 max-w-5xl mx-auto w-full space-y-6">
        {results.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-4 bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
          >
            {item.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full md:w-[180px] object-cover"
              />
            ) : (
              <div className="w-full md:w-[180px] h-[270px] flex items-center justify-center bg-zinc-700 text-gray-400 text-sm">
                No Image
              </div>
            )}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-bold mb-1">
                  {item.title || item.name}
                </h2>
                <p className="text-sm text-gray-400 mb-2">
                  {item.release_date || item.first_air_date || "-"}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  {item.overview || "No description available."}
                </p>
              </div>
              <div>
                <span
                  className={`inline-block text-xs px-2 py-1 rounded-full ${
                    item.media_type === "movie"
                      ? "bg-blue-700 text-white"
                      : "bg-green-700 text-white"
                  }`}
                >
                  {item.media_type === "movie" ? "Movie" : "TV Show"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-auto p-4 bg-zinc-900 border-t border-zinc-700 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Movie Finder. Powered by TMDB.
      </footer>
    </main>
  );
}
