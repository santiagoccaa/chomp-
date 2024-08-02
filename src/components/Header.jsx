import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container mx-auto">
      <Navbar />

      <div className="flex h-[500px] rounded-lg bg-slate-950">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="w-5/6">
            <h1 className="text-5xl font-bold text-white">
              Come Tu Comida Justo Como{" "}
              <span className="text-red-600">Te Gusta!</span>
            </h1>
            <p className="text-sm text-white font-light mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              magnam, praesentium sunt minima maxime.
            </p>

            <div className="flex gap-6 my-12">
              <button className="p-2 w-32 bg-red-600 text-sm border-[1px] border-red-600 hover:bg-white hover:text-red-600 duration-300 text-white font-medium shadow-lg rounded-2xl">
                Ordena Ya
              </button>
              <button className="p-2 w-32 bg-transparent border-[1px] border-white text-sm text-white font-medium hover:shadow-2xl hover:shadow-white rounded-2xl">
                Ver Menu
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 bg-cover">
          <Image
            width="800"
            height="800"
            src="/hero.png"
            alt="hero"
            className="degradado h-full w-full"
          />
        </div>
      </div>
    </header>
  );
}
