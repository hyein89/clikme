// pages/ref/index.tsx
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import offerMap from "../../offers";

interface Props {
  targetUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sub = (ctx.query.sub as string) || ""; // Adsterra tidak butuh sub
  const baseUrl = offerMap["default"]; // Langsung pakai default

  const finalUrl = baseUrl; // Tidak perlu tambahkan sub

  return {
    props: {
      targetUrl: finalUrl
    }
  };
};

export default function RedirectPage({ targetUrl }: Props) {
  useEffect(() => {
    window.location.href = targetUrl;
  }, [targetUrl]);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={2;url=${targetUrl}} />
        <title>Redirecting...</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.spinner}></div>
        <p style={styles.text}>Redirecting...</p>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#fff",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: "64px",
    height: "64px",
    border: "8px solid #334155",
    borderTop: "8px solid #22c55e",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#cbd5e1",
  },
};
