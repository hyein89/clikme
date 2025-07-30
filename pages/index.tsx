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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors flex flex-col">
      {/* Header */}
      <header className="p-4 bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            🎬 Movie & TV Explorer
          </h1>
        </div>
      </header>

      {/* Search Section */}
      <section className="p-6 max-w-4xl mx-auto w-full">
        <form onSubmit={searchTMDB} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search movies or TV shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold"
          >
            Search
          </button>
        </form>

        {/* Extra Info */}
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <h2 className="font-semibold text-lg mb-2">About this App</h2>
          <p>
            This web app allows you to search for your favorite movies and TV
            shows using the TMDB API. Simply type a keyword and hit "Search".
            The result will display with relevant posters, release dates, and
            media types.
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
      <section className="px-4 pb-10 max-w-7xl mx-auto w-full">
        <div className="grid gap-6">
          {results.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300"
            >
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title || item.name}
                  className="w-full md:w-[180px] h-[270px] object-cover"
                />
              ) : (
                <div className="w-full md:w-[180px] h-[270px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300">
                  No Image
                </div>
              )}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    {item.title || item.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {item.release_date || item.first_air_date || "-"}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {item.overview || "No description available."}
                  </p>
                </div>
                <div className="mt-3">
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded-full ${
                      item.media_type === "movie"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                        : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                    }`}
                  >
                    {item.media_type === "movie" ? "Movie" : "TV Show"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto p-4 bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
        Made with ❤️ using TMDB API — {new Date().getFullYear()}
      </footer>
    </main>
  );
}
