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
        <meta httpEquiv="refresh" content={`0;url=${targetUrl}`} />
        <title>Redirecting...</title>
      </Head>
      <p>Redirecting to <a href={targetUrl}>{targetUrl}</a></p>
    </>
  );
}
