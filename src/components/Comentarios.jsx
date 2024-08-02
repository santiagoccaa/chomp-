import BoxComentarios from "@/layouts/BoxComentarios";
import Image from "next/image";

export default function Comentarios() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center h-auto md:h-[500px] bg-slate-800 w-full">
      <Image
        src="/burrito.png"
        width="400"
        height="400"
        alt="burrito"
        className="hidden md:flex absolute -left-16 -top-16 w-64 h-64"
      />

      <Image
        src="/verduras.png"
        width="250"
        height="250"
        alt="burrito"
        className="hidden md:flex absolute -bottom-4 -right-0 w-52 h-52"
      />

      <div className="mx-4 md:w-4/6">
        <h1 className="text-xl font-medium text-white my-4">
          Sus <span className="text-red-600">Comentarios</span>
        </h1>
        <p className="text-sm font-light text-white mx-4 md:mx-0 text-justify md:w-4/6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          libero dolore dignissimos repudiandae aliquid, doloremque tempora quo,
          totam quas, vel iusto non magnam pariatur blanditiis possimus modi sit
          odit alias.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <BoxComentarios />
          <BoxComentarios />
          <BoxComentarios />
        </div>

        <div className="flex justify-center items-center gap-2 mb-4 mt-8">
          <div className="h-[2px] w-16 bg-gradient-to-l from-red-600 to-slate-700 via-red-500"></div>

          <button className="rounded-full h-6 w-6 bg-white shadow-sm text-sm outline outline-[1px] outline-offset-2 outline-white">
            1
          </button>
          <button className="rounded-full h-6 w-6 bg-red-600 shadow-sm text-sm">
            2
          </button>
          <button className="rounded-full h-6 w-6 bg-white shadow-sm text-sm outline outline-[1px] outline-offset-2 outline-white">
            3
          </button>

          <div className="h-[2px] w-16 bg-gradient-to-r from-red-600 to-slate-700 via-red-500"></div>
        </div>
      </div>
    </div>
  );
}
