// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Histats script START */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _Hasync= _Hasync|| [];
              _Hasync.push(['Histats.start', '1,4828760,4,0,0,0,00010000']);
              _Hasync.push(['Histats.fasi', '1']);
              _Hasync.push(['Histats.track_hits', '']);
              (function() {
                var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
                hs.src = ('//s10.histats.com/js15_as.js');
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
              })();
            `,
          }}
        />
      </Head>

      <Component {...pageProps} />

      <noscript>
        <a href="/" target="_blank">
<img
  src="//sstatic1.histats.com/0.gif?4828760&101"
  alt="site stats"
  style={{ border: "0" }}
/>

        </a>
      </noscript>
    </>
  );
}

export default MyApp;


