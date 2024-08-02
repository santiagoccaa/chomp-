import Image from "next/image";

import { categorias } from "@/data/categorias";


export default function Categorias() {

  return (
    <div className="container mx-auto grid grid-cols-4 gap-2 md:flex md:justify-between h-auto md:h-32 items-center">
      {categorias.map(({ icono, id, nombre }) => (
        <div key={id} className="group text-center w-auto">
          <button
            className="p-1 group-hover:bg-gray-600 rounded-full duration-500"
          >
            <Image
              src={`/img/icono_${icono}.svg`}
              width="60"
              height="60"
              alt="imagen"
              className="group-hover:scale-125 duration-500 w-16 h-16"
            />
          </button>

          <h1 className="text-sm text-white mt-2 group-hover:text-red-600 duration-300">
            {nombre}
          </h1>
        </div>
      ))}
    </div>
  );
}
