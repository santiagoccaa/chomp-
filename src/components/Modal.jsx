import Modal from "react-modal";
import useShop from "@/hook/useShop";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    borderRadius: "10px",
    overflow: "visible",
    width: "800px",
    height: "500px",
  },
};

export default function OpenModal() {
  const { modal, handleClickmodal, productSelect } = useShop();

  return (
    <Modal
      isOpen={modal}
      style={customStyles}
      contentLabel="Modal Product"
      ariaHideApp={false}
    >
      <div className="flex h-full relative">
        <button
          onClick={() => handleClickmodal()}
          className="h-10 w-10 rounded-full bg-white absolute top-0 -right-14 flex items-center justify-center hover:-rotate-90 duration-300"
        >
          {" "}
          <X size={30} />
        </button>
        <div className="w-1/2">
          <Image
            src={`/img/${productSelect.img}.jpg`}
            width="500"
            height="500"
            alt="imagen"
            className="w-full h-full rounded-tl-[10px] rounded-bl-[10px]"
          />
        </div>

        <div className="w-1/2">
          <div className="m-4">
            <h1 className="text-2xl font-medium">{productSelect.nombre}</h1>

            <p className="text-justify font-light text-sm my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              nulla nesciunt eaque? Aperiam, necessitatibus impedit voluptate
              fugiat officiis possimus autem cupiditate!
            </p>

            <h1 className="text-xl font-medium mb-2">Ingredientes</h1>

            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center">
                <input type="checkbox" id="ingredient1" className="hidden" />
                <label
                  htmlFor="ingredient1"
                  className="relative flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block rounded-full border border-gray-400"></span>
                  <span className="ml-2">Ingrediente 1</span>
                </label>
              </li>

              <li className="flex items-center">
                <input type="checkbox" id="ingredient2" className="hidden" />
                <label
                  htmlFor="ingredient2"
                  className="relative flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block rounded-full border border-gray-400"></span>
                  <span className="ml-2">Ingrediente 2</span>
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="ingredient3" className="hidden" />
                <label
                  htmlFor="ingredient3"
                  className="relative flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block rounded-full border border-gray-400"></span>
                  <span className="ml-2">Ingrediente 2</span>
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="ingredient4" className="hidden" />
                <label
                  htmlFor="ingredient4"
                  className="relative flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block rounded-full border border-gray-400"></span>
                  <span className="ml-2">Ingrediente 2</span>
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="ingredient5" className="hidden" />
                <label
                  htmlFor="ingredient5"
                  className="relative flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block rounded-full border border-gray-400"></span>
                  <span className="ml-2">Ingrediente 2</span>
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="ingredient6" className="hidden" />
                <label
                  htmlFor="ingredient6"
                  className="relative flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block rounded-full border border-gray-400"></span>
                  <span className="ml-2">Ingrediente 2</span>
                </label>
              </li>
            </ul>
            <h1 className="text-xl font-medium my-4">Cantidad</h1>

            <div className="flex items-center gap-x-4">
              <button className=" rounded-md border-[1px] border-slate-900 flex items-center justify-center"><Minus size={25} /></button>
              <span className="text-lg font-bold">01</span>
              <button className=" rounded-md border-[1px] border-slate-900 flex items-center justify-center"><Plus size={25} /></button>
            </div>

            <h1 className="text-2xl font-medium mb-2 my-4">$ 20.000</h1>

            <div className="grid grid-cols-2 items-center absolute bottom-8 w-1/2">
              <button className="w-5/6 h-10 rounded-sm bg-amber-500 flex items-center justify-center text-white">Comprar</button>
              <button className="w-5/6 h-10 rounded-sm bg-red-500 flex items-center justify-center text-white">Añadir al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
