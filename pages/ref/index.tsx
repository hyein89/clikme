// pages/ref/index.tsx
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import offerMap from "../../offers";

interface Props {
  targetUrl: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = offerMap["default"];

  if (!baseUrl) {
    return { notFound: true };
  }

  return {
    props: {
      targetUrl: baseUrl,
    },
  };
};

export default function RedirectPage({ targetUrl }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 3000); // 3 detik
    return () => clearTimeout(timer);
  }, [targetUrl]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-400 border-opacity-60"></div>
          <p className="text-lg font-medium">Redirecting...</p>
        </div>
      </div>

      <style jsx>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
