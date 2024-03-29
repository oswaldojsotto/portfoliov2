import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "@/app/[locale]/styles/globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "../store/StoreProvider";

const montserrat = Montserrat({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

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
      <html lang={locale} suppressHydrationWarning>
        <body className={oswald.className}>
          <ThemeProvider enableSystem={true} attribute="class">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
