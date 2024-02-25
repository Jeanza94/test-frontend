import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/shared/components/Header";
import Footer from "./shared/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MercadoBúsqueda: Tu Destino para Compras en Línea",
  description: "Descubre MercadoBúsqueda: Tu destino único para compras en línea. Encuentra, compra y disfruta de la mejor variedad en un solo lugar.",
  authors: [
    {name: 'Jean Zapata'}
  ],
  keywords:['mercado en línea', 'compras en línea', 'productos', 'ofertas', 'variedad'],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Mercado búsqueda, Te esperamos',
    description: 'Busca lo que necesites, estamos para servirte.',
    images: "/images/logo-mercado-libre.webp"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-28 pb-10 tablet:pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
