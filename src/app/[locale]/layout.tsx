import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/[locale]/styles/globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "@/store/StoreProvider";
import StarsBackground from "@/[locale]/components/stars-background";
import siteMetadata from "./metadata";
import Head from "next/head";

<Head>
  <title>{siteMetadata.title}</title>
  <meta name="description" content={siteMetadata.description} />
  <meta property="og:type" content={siteMetadata.openGraph.type} />
  <meta property="og:locale" content={siteMetadata.openGraph.locale} />
  <meta property="og:url" content={siteMetadata.openGraph.url} />
  <meta property="og:site_name" content={siteMetadata.openGraph.site_name} />
  <meta property="og:image" content={siteMetadata.openGraph.images[0].url} />
  <meta
    property="og:image:width"
    content={siteMetadata.openGraph.images[0].width.toString()}
  />
  <meta
    property="og:image:height"
    content={siteMetadata.openGraph.images[0].height.toString()}
  />
  <meta
    property="og:image:alt"
    content={siteMetadata.openGraph.images[0].alt}
  />
  <meta name="twitter:card" content={siteMetadata.twitter.card} />
  <meta name="twitter:site" content={siteMetadata.twitter.site} />
  <meta name="twitter:title" content={siteMetadata.twitter.title} />
  <meta name="twitter:description" content={siteMetadata.twitter.description} />
  <meta name="twitter:image" content={siteMetadata.twitter.images[0].url} />
  <meta name="twitter:image:alt" content={siteMetadata.twitter.images[0].alt} />
</Head>;

const dimensions = localFont({
  src: "../dimitri.ttf",
  variable: "--font-dimensions",
});
const agdasima = localFont({
  src: "../agdasima.ttf",
  variable: "--font-agdasima",
});

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <StoreProvider>
      <html
        className={`${dimensions.variable} ${agdasima.variable}`}
        lang={locale}
        suppressHydrationWarning>
        <body>
          <ThemeProvider enableSystem={true} attribute="class">
            <div className=" bg-transparent h-[100vh]">
              <div className="fixed -z-10 bg-transparent h-[100vh] w-full ">
                <StarsBackground />
              </div>
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
