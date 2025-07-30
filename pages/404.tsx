// pages/404.tsx
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-center px-4">
      <div>
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page not found</h2>
        <p className="mb-6 text-gray-300">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/">
          <a className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-medium">
            Go back to Homepage
          </a>
        </Link>
      </div>
    </div>
  );
}
