import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/[locale]/styles/globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "@/store/StoreProvider";
import StarsBackground from "@/[locale]/components/stars-background";

export const metadata: Metadata = {
  title: "Oswaldo J. Sotto ©",
  description: "Frontend Developer - Portfolio",
};

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
        // className={`${agdasima.variable}`}
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
