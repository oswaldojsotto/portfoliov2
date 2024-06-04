import type { Metadata } from "next";
import localFont from "next/font/local";
import { Agdasima } from "next/font/google";
import "@/app/[locale]/styles/globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "../store/StoreProvider";
import StarsBackground from "./components/stars-background";

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
        className={`${dimensions.variable} ${agdasima.variable}  `}
        lang={locale}
        suppressHydrationWarning>
        <body>
          <StarsBackground />
          <ThemeProvider enableSystem={true} attribute="class">
            <div className="-z-10 bg-transparent h-[100vh]">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
