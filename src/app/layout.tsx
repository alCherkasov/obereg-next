import { CallButton } from "@/shared/ui";
import Footer from "@/widgets/page-footer/ui/Footer";
import Header from "@/widgets/page-header/ui/Header";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "600"],
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title:
    "Модульные и каркасные дома под ключ в Краснодарском и Ставропольском крае",
  description:
    "Модульные и каркасные дома под ключ в Краснодарском и Ставропольском крае, с индивидуальной планировкой и монтажём на участке от 60 дней",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />
        {children}
        <CallButton />
        <Footer />
      </body>
    </html>
  );
}
