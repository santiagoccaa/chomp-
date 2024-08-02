import { BadgePercent, EyeIcon, FilePenLine, Store, Trash2 } from "lucide-react";
import Image from "next/image";

export default function Admin() {
  return (
    <div className="h-screen w-full">
      <nav className="h-16 bg-red-600 flex items-center justify-between">
        <h1 className="text-white text-xl mx-8 uppercase">pizza</h1>
        <button className="mx-8 flex items-center gap-2 border-b-[1px] p-1 rounded-sm text-white text-lg">
          <Store size={30} color="white" strokeWidth={1} />
          Ver tienda
        </button>
      </nav>

      <div className="flex w-full h-full bg-slate-800">
        <ul className="w-60 h-full bg-slate-700">
          <li className="w-full h-12 flex items-center justify-center border-2 border-slate-700 bg-slate-900 text-white text-sm font-bold">
            Productos
          </li>
          <li className="w-full h-12 flex items-center justify-center border-2 border-slate-700 bg-slate-900 text-white text-sm font-bold">
            Descuentos
          </li>
          <li className="w-full h-12 flex items-center justify-center border-2 border-slate-700 bg-slate-900 text-white text-sm font-bold">
            Agotados
          </li>
          <li className="w-full h-12 flex items-center justify-center border-2 border-slate-700 bg-slate-900 text-white text-sm font-bold">
            Ventas
          </li>
        </ul>

        <div className="flex flex-col mt-4">
          <div className="grid grid-cols-3 gap-4 mx-4 w-full h-5/6 overflow-auto">
            <div className="w-80 h-60 bg-white shadow-lg border-sm flex rounded-lg overflow-hidden">
              <div className="w-auto h-full flex flex-col justify-center gap-y-4 mx-2">
                <button className="text-sm font-medium p-2 border-2 border-slate-800 rounded-sm flex items-center gap-2 hover:bg-gray-600 hover:text-white duration-300 ">
                  <EyeIcon size={20} strokeWidth={1} />
                  Ver
                </button>
                <button className="text-sm font-medium p-2 border-2 border-slate-800 rounded-sm flex items-center gap-2 hover:bg-amber-500 hover:text-white duration-300 ">
                  <BadgePercent size={20}  strokeWidth={1} />
                  Descuento
                </button>
                <button className="text-sm font-medium p-2 border-2 border-slate-800 rounded-sm flex items-center gap-2 hover:bg-sky-600 hover:text-white duration-300 ">
                  <FilePenLine size={20} strokeWidth={1} /> Editar
                </button>
                <button className="text-sm font-medium p-2 border-2 border-slate-800 rounded-sm flex items-center gap-2 hover:bg-red-600 hover:text-white duration-300 ">
                  <Trash2 size={20} strokeWidth={1} /> Eliminar
                </button>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <Image
                  src="/burrito.png"
                  width="200"
                  height="200"
                  alt="burrito"
                  className="w-32 h-32"
                />

                <h1 className="text-slate-900 text-sm">Burrito de Carne</h1>
                <p>$20.000</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
