import useShop from "@/hook/useShop";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

//------------------------------------
export default function ItemProduct({ item }) {
  const { ClickEliminar,ClickAgregar } = useShop();

  return (
    <div className="relative max-w-full flex items-center gap-2 h-auto border-b-2">
      <Image
        src={item.img}
        width="200"
        height="200"
        alt="img pedido"
        className="w-24 h-24 rounded-full ml-2"
      />
      <div className="h-20 text-sm font-medium flex flex-col justify-between">
        <h2>{item.nombre}</h2>
        <h2>{item.precio}</h2>
        <div className="relative text-xs font-medium text-white ">
          <div className="flex items-center gap-2">
            <button onClick={() => ClickEliminar(item.id)} className="p-[1px] rounded-full border-[1px] border-white">
              <Minus size={15} />
            </button>

            <p className="w-4 flex justify-center">{item.cantidad}</p>

            <button onClick={() => ClickAgregar(item)} className="p-[1px] rounded-full border-[1px] border-white">
              <Plus size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
