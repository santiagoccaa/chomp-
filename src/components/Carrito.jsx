import useShop from "@/hook/useShop";
import { MapPin, ShoppingCart, TimerReset, X } from "lucide-react";
import ItemProduct from "./ItemProduct";

export default function Carrito() {
  
  const { carrito, handleClickCarrito, itemCarrito } = useShop();

  const totalPrecio = itemCarrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);

  const totalNeto = totalPrecio + 10000 ;

  return (
    <div
      className={`${
        carrito ? "right-4" : "-right-[110%]"
      } top-6 z-50 fixed h-[95%] w-80 md:w-96 rounded-xl bg-slate-700 duration-500 border-2 border-slate-900 text-white overflow-hidden`}
    >
      <button
        className="absolute top-[2px] left-[2px] p-1 bg-slate-900 rounded-full group"
        onClick={() => handleClickCarrito()}
      >
        <X
          color="#fff"
          strokeWidth={2}
          size={25}
          className="group-hover:-rotate-90 duration-300"
        />
      </button>

      <div className="mx-4 h-80">
        <div className="h-20 rounded-lg bg-slate-500 mt-2 text-center">
          <h1 className="text-md uppercase m-4 font-medium">
            Detalles de la entrega
          </h1>
          <div className="flex mx-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin size={20} color="#fff" />
              <h2 className="text-sm font-extralight">Calle 31C # 42B - 32</h2>
            </div>

            <div className="flex items-center gap-2">
              <TimerReset size={20} color="#fff" />
              <h2 className="text-sm font-extralight">30 min</h2>
            </div>
          </div>
        </div>

        <div className="my-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingCart size={25} color="#fff" />
            <h2 className="text-sm font-medium uppercase">Carrito</h2>
          </div>
          <h2 className="text-sm font-extralight">Pedido ID #00001</h2>
        </div>

        <div className="overflow-hidden h-48 overflow-y-auto scroll flex flex-col gap-y-2">
          {itemCarrito?.length > 0 ? (
            itemCarrito.map((item) => <ItemProduct key={item.id} item={item} />)
          ) : (
            <p>No hay elementos para mostrar.</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="w-12 h-12 bg-slate-900 rounded-full -ml-6"></span>
        <span className="w-72 border-slate-900 border-t-2 border-dashed"></span>
        <span className="w-12 h-12 bg-slate-900 rounded-full -mr-6"></span>
      </div>

      <div className="mx-4 flex flex-col h-44 rounded-xl">
        <div className="flex items-center justify-between text-lg">
          <h2>Sub Total:</h2>
          <span>$ {" "}{totalPrecio}</span>
        </div>
        <div className="flex items-center justify-between text-lg">
          <h2>Costo de Envio:</h2>
          <span>$0</span>
        </div>

        <div className="flex mt-4 items-center justify-between text-lg font-bold border-t-2 border-white uppercase">
          <h2 className="mt-2">total:</h2>
          <span>$ {totalPrecio === 0 ? '0' : totalPrecio + 10000 }</span>
        </div>

        <div className="flex items-center justify-center my-4">
          <button className="w-60 rounded-xl bg-slate-900 shadow-lg text-white font-bold p-2">
            Confirmar Orden
          </button>
        </div>
      </div>
    </div>
  );
}
