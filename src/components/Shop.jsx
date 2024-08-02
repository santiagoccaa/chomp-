import Image from "next/image";
import { categorias } from "@/data/categorias";
import CardProduct from "./CardProduct";
import useShop from "@/hook/useShop";

export default function ViewShop() {
  const { catalogo, filtrarProductos, categoriaSeleccionada } = useShop();

  return (
    <div className="h-screen items-center w-full flex flex-col mb-4">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 md:flex items-center justify-center overflow-hidden mt-4 bg-slate-800 rounded-lg">
          {categorias.map(({ icono, nombre, id }) => (
            <button
              onClick={() => filtrarProductos(id)}
              key={id}
              className={`text-sm font-bold text-white flex flex-col items-center justify-center hover:shadow-sm hover:bg-red-600 duration-300 p-2 px-4 ${
                id === categoriaSeleccionada
                  ? "bg-red-600"
                  : "bg-transparent"
              }`}
            >
              <Image
                width="200"
                height="200"
                className="w-12 h-12"
                src={`/img/icono_${icono}.svg`}
                alt={nombre}
                priority
              />
              {nombre}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center w-full my-8">
          <div className="flex items-center justify-center w-full h-[2px] bg-red-200">
            <span className="bg-[#111827] w-auto text-lg font-bold text-white px-4">
              BreakFast Food
            </span>
          </div>
        </div>
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll scroll">
        {catalogo.map((producto) => (
          <CardProduct key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
