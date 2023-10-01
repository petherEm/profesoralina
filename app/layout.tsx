import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "./globals.css";
import type { Metadata } from "next";
import {
  Inter,
  Lora,
  Source_Sans_3,
  Libre_Baskerville,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "Prof. dr hab. Alina Maciejewska",
  description:
    "Alina Maciejewska, dorobek naukowy, strona domowa, publikacje, artykuły, książki, konferencje, wykłady, badania, nauka, naukowiec, profesor, profesor Politechnika Warszawska, Geodezja i Ochrona Gruntów",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.variable} ${libreBaskerville.variable} ${lora.variable}`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
