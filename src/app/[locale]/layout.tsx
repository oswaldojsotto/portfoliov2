import type { Metadata } from "next";
import {
  DM_Sans,
  Montserrat,
  Oswald,
  PT_Sans,
  Raleway,
} from "next/font/google";
import "@/app/[locale]/styles/globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "../store/StoreProvider";

const montserrat = Montserrat({ subsets: ["latin"] });
const dmsans = DM_Sans({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

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
            <div className="-z-10 bg-transparent h-[100vh]">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
