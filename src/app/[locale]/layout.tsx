import type { Metadata } from "next";
import localFont from "next/font/local";
import { Oswald, Raleway, Bebas_Neue } from "next/font/google";
import "@/app/[locale]/styles/globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "../store/StoreProvider";

const oswald = Oswald({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-oswald",
});

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

// const dimensions = localFont({
//   src: [
//     {
//       path: "../fonts/Dimensions.ttf",
//       weight: "400",
//     },
//   ],
//   variable: "--font-dimensions",
// });

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
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
        className={`${oswald.variable} ${raleway.variable} `}
        lang={locale}
        suppressHydrationWarning>
        <body>
          <ThemeProvider enableSystem={true} attribute="class">
            <div className="-z-10 bg-transparent h-[100vh]">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
