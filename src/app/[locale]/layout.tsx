import type { Metadata } from "next";
import localFont from "next/font/local";
import "../[locale]/styles/globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "@/store/StoreProvider";
import StarsBackground from "@/[locale]/components/stars-background";
import { openGraphImage } from "../shared-metadata";
import { Roboto_Mono } from "next/font/google";
import { Menu } from "./components/menu";

export const metadata: Metadata = {
  title: "Oswaldo J. Sotto ©",
  description: "Frontend Developer - Portfolio",
  openGraph: {
    ...openGraphImage,
    title: "Oswaldo J. Sotto ©",
    description: "Frontend Developer - Portfolio",
    url: "https://oswaldo.site/",
    images: [
      {
        url: "https://oswaldo.site/big-logo.png",
        width: 256,
        height: 256,
        alt: "oswaldojsottoLogo",
      },
    ],
  },
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Choose needed weights
  style: ["normal", "italic"], // Include italic variants if needed
  variable: "--font-roboto-mono", // CSS variable name
  display: "swap", // Optional: improves performance
});

const dimensions = localFont({
  src: "../dimitri.ttf",
  variable: "--font-dimensions",
});
const brockmann = localFont({
  src: "../Brockmann-Regular.woff2",
  variable: "--font-brockmann",
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
        className={`${dimensions.variable} ${agdasima.variable}  ${brockmann.variable}  ${robotoMono.variable}`}
        lang={locale}
        suppressHydrationWarning>
        <body>
          <ThemeProvider
            enableSystem={true}
            attribute="class">
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
