import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/shopContext";

const fuente = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shop Online",
  description: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        id="root"
        suppressHydrationWarning={true}
        className={fuente.className}
      >
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
