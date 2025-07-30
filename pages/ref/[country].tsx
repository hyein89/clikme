// pages/ref/[country].tsx
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import offerMap from "../../offers";

interface Props {
  targetUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { country } = ctx.params!;
  const query = ctx.query;

  const baseUrl = offerMap[country as string] || offerMap["default"];
  const queryString = new URLSearchParams(query as Record<string, string>).toString();
  const finalUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  return {
    props: {
      targetUrl: finalUrl
    }
  };
};

export default function RedirectPage({ targetUrl }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (targetUrl) {
      window.location.href = targetUrl;
    }
  }, [targetUrl]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
        <meta httpEquiv="refresh" content={`0;url=${targetUrl}`} />
        <meta property="og:title" content="Redirecting..." />
        <meta property="og:description" content="You are being redirected" />
        <meta property="og:url" content={targetUrl} />
        <meta property="og:image" content="/og-default.jpg" />
      </Head>
      <main style={{ textAlign: "center", marginTop: "30vh" }}>
        <p>Mengarahkan ke: <a href={targetUrl}>{targetUrl}</a></p>
      </main>
    </>
  );
}
