import { Eye } from "lucide-react";
import useShop from "@/hook/useShop";
import Image from "next/image";

export default function CardProduct({ producto }) {
  const { img, nombre, precio } = producto;
  const { handleClickmodal, handleClickInforProduct, ClickAgregar } = useShop();

  return (
    <div className="relative overflow-hidden flex gap-4 h-44 w-auto bg-slate-800 text-white border-2 border-slate-600 rounded-lg shadow-lg m-2 group">
      <Image
        src={`/img/${img}.jpg`}
        width="400"
        height="400"
        alt="Imagen del producto"
        className="w-40 h-full"
        priority
      />
      <div className="flex flex-col md:justify-center">
        <h1 className="text-md font-bold mt-4 md:mt-0">{nombre}</h1>
        <p className="hidden md:flex text-sm font-light my-4 w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex flex-col md:flex-row gap-2 md:text-sm text-md">
          <p className="font-bold text-red-500">${precio}</p>
          <p className="font-bold text-white line-through">20% OFF</p>
        </div>
      </div>

      <button
        onClick={() => {
          handleClickmodal();
          handleClickInforProduct(producto);
        }}
        type="button"
        className="absolute top-0 -left-40 w-40 h-full flex items-center justify-center bg-red-600 opacity-70 duration-300 group-hover:left-0"
      >
        <Eye size={40} color="#fff" strokeWidth={1.5} />
      </button>

      <button
        onClick={() => ClickAgregar(producto)}
        type="button"
        className="absolute bottom-4 right-4 p-2 flex text-sm px-4 items-center justify-center rounded-2xl border-red-600 bg-red-600 hover:text-red-600 hover:bg-white duration-300"
      >
        Comprar
      </button>
    </div>
  );
}
