import type { Metadata } from "next";
import localFont from "next/font/local";
import { Agdasima } from "next/font/google";
import "../[locale]/styles/globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "../store/StoreProvider";
import StarsBackground from "./components/stars-background";
// import LocomotiveScroller from "@/hooks/locomotiveScroller";

const agdasima = Agdasima({
  subsets: ["latin"],
  variable: "--font-agdasima",
  weight: "400",
});

const dimensions = localFont({
  src: [
    {
      path: "../../../public/fonts/dimensions.ttf",
      weight: "400",
    },
  ],
  variable: "--font-dimensions",
});

export const metadata: Metadata = {
  title: "Oswaldo J. Sotto",
  description: "Frontend Developer - Portfolio",
};

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
