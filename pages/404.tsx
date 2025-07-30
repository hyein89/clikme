import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#0f172a",
          color: "#f1f5f9",
          fontFamily: "'Inter', sans-serif",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "6rem", fontWeight: 700, color: "#ef4444" }}>404</h1>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "10px" }}>Oops! Page not found</h2>
        <p style={{ maxWidth: "400px", marginBottom: "20px", color: "#94a3b8" }}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link href="/">
          <a
            style={{
              padding: "10px 20px",
              backgroundColor: "#22c55e",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
          >
            Go back to Homepage
          </a>
        </Link>
      </div>
    </>
  );
}
