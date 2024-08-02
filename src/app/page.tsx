"use client";

import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Categorias from "@/components/Categorias";
import About from "@/components/About";
import Shop from "@/components/Shop";
import Info from "@/components/Info";
import Contact from "@/components/Contact";
import Comentarios from "@/components/Comentarios";
import Footer from "@/components/Footer";
import Carrito from "@/components/Carrito";

import useShop from "@/hook/useShop";

import { ShoppingBag } from "lucide-react";

export default function Home() {
  const { handleClickCarrito, carrito, itemCarrito } = useShop();
  return (
    <>
      <Header />
      <main className="relative">
        <Modal />
        <Carrito />
        {itemCarrito?.length > 0 ? (
          <button
            onClick={() => handleClickCarrito()}
            className={`${
              carrito ? "z-0" : "z-20"
            } fixed overflow-auto right-8 bottom-14 rounded-full w-12 h-12 bg-red-600 flex items-center justify-center outline outline-1 outline-offset-4 outline-red-600 hover:outline-offset-8 hover:scale-95 duration-200 `}
          >
            <ShoppingBag color="#fff" size={30} strokeWidth={1} />
          </button>
        ) : (
          <h1></h1>
        )}

        <Categorias />
        <About />
        <Shop />
        <Info />
        <Contact />
        <Comentarios />
        <Footer />
      </main>
    </>
  );
}
