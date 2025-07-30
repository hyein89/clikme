import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import offerMap from "../../offers";

interface Props {
  targetUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const baseUrl = offerMap["default"];

  if (!baseUrl) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      targetUrl: baseUrl,
    },
  };
};

export default function RedirectPage({ targetUrl }: Props) {
  useEffect(() => {
    window.location.href = targetUrl;
  }, [targetUrl]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
        <meta httpEquiv="refresh" content={`3;url=${targetUrl}`} />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
        />
      </Head>
      <div
        id="load"
        style={{
          position: "absolute",
          width: "600px",
          height: "36px",
          left: "50%",
          top: "40%",
          marginLeft: "-300px",
          userSelect: "none",
          cursor: "default",
        }}
      >
        {"GNI DAOL".split("").reverse().map((char, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "20px",
              height: "36px",
              opacity: 0,
              animation: `move 2s linear infinite`,
              animationDelay: `${i * 0.2}s`,
              transform: "rotate(180deg)",
              color: "#1bf822",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {char}
          </div>
        ))}
        <style jsx>{`
          @keyframes move {
            0% {
              left: 0;
              opacity: 0;
            }
            35% {
              left: 41%;
              transform: rotate(0deg);
              opacity: 1;
            }
            65% {
              left: 59%;
              transform: rotate(0deg);
              opacity: 1;
            }
            100% {
              left: 100%;
              transform: rotate(-180deg);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}
