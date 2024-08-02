import BoxImage from "@/layouts/BoxImage";
import { Droplets, HandCoins, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-auto md:h-screen bg-slate-800">
      <div className="md:flex items-center justify-center">
        {/* CAJAS DE COMIDA ----------------- */}
        <div className="w-full md:w-1/2 h-auto flex justify-center md:justify-end mt-4">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 w-auto h-96 gap-x-4">
            <div className="flex flex-col gap-y-2">
              <BoxImage
                parametros={{
                  imga: "/hamburguesa.jpg",
                  width: "w-60",
                  height: "h-48",
                }}
              />

              <div className="flex w-full gap-2 justify-between">
                <BoxImage
                  parametros={{
                    imga: "/mesa.avif",
                    width: "w-40",
                    height: "h-44",
                  }}
                />

                <BoxImage
                  parametros={{
                    imga: "/coca.jpg",
                    width: "w-16",
                    height: "h-44",
                  }}
                />
              </div>
            </div>

            <div className="hidden md:flex md:flex-col justify-center gap-y-2">
              <BoxImage
                parametros={{
                  imga: "/sostiene.avif",
                  width: "w-48",
                  height: "h-40",
                }}
              />

              <BoxImage
                parametros={{
                  imga: "/pizza.avif",
                  width: "w-48",
                  height: "h-32",
                }}
              />
            </div>
          </div>
        </div>

        {/* INFORMACION ----------------- */}
        <div className="w-full md:w-1/2 justify-center mt-4">
          <div className="w-11/12 m-4 md:m-0 md:w-96">
            <h1 className="text-sm font-bold text-red-600">Sobre Nosotros</h1>
            <h1 className="text-xl md:text-xl font-bold text-white">
              Lorem ipsum dolor sit amet, consectetur.
            </h1>

            <p className="text-sm font-light text-gray-200 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              numquam ipsum quo eius consequatur quae possimus iusto nihil
              explicabo molestias-
            </p>

            <div className="flex w-auto gap-16 uppercase mt-4 text-sm font-extralight text-white">
              <div>
                <Sparkles size={40} strokeWidth={1} color="#dc2626" />
                <p>Deliciosos</p>
              </div>
              <div>
                <Droplets size={40} strokeWidth={1} color="#dc2626" />
                <p>Frescos</p>
              </div>
              <div>
                <HandCoins size={40} strokeWidth={1} color="#dc2626" />
                <p>Economicos</p>
              </div>
            </div>

            <button className="flex items-center px-4 bg-red-600 mt-2 md:mt-14 p-2 text-sm text-white font-medium rounded-full gap-12 shadow-lg ">
              Saber Mas
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-4  w-full h-auto md:h-44 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white">
        {/*------------ Caja de hamburguesa ----------------*/}
        <div className="relative overflow-hidden bg-[#eb0029] h-32 w-80 rounded-lg shadow-lg hover:shadow-red-500 duration-300 group">
          <Image
            src="/hojas.png"
            width="200"
            height="200"
            alt="Hojas decoracion"
            className="absolute -top-1 -left-1 w-16 h-16"
          />

          <Image
            src="/cajas/img1.png"
            width="200"
            height="200"
            alt="Hojas decoracion"
            className="absolute -top-8 -right-6 w-48 h-48  group-hover:rotate-12 duration-500"
          />

          <div className="absolute top-4 left-12">
            <p className="text-xl font-bold uppercase">burguer</p>

            <p className=" text-[12px] font-extralight text">
              Obtenla x 20% de Descuento
            </p>

            <h1 className=" text-[12px] font-extralight text">Ordenalo Ahora</h1>

            <button className="text-[12px] font-medium border-b-2 border-white">
              Comprar
            </button>
          </div>
        </div>

        {/*------------ Caja de papitas ----------------*/}
        <div className="relative overflow-hidden bg-[#ff9d2e] h-32 w-80 rounded-lg shadow-lg  hover:shadow-amber-500 duration-300 group">
          <Image
            src="/hojas.png"
            width="200"
            height="200"
            alt="Hojas decoracion"
            className="absolute -top-1 -left-1 w-16 h-16"
          />

          <Image
            src="/cajas/img2.png"
            width="200"
            height="200"
            alt="Hojas decoracion"
            className="absolute -top-2 -right-6 w-40 h-36 group-hover:rotate-12 duration-500"
          />

          <div className="absolute top-4 left-12">
            <p className="text-xl font-bold uppercase">french fry</p>

            <p className=" text-[12px] font-extralight text">
              Obtenla x 20% de Descuento
            </p>

            <h1 className=" text-[12px] font-extralight text">Ordenalo Ahora</h1>

            <button className="text-[12px] font-medium border-b-2 border-white">
              Comprar
            </button>
          </div>
        </div>

        {/*------------ Caja de pizza ----------------*/}
        <div className="relative overflow-hidden bg-[#219554] h-32 w-80 rounded-lg shadow-lg  hover:shadow-green-500 duration-300 mb-4 md:mb-0 group">
          <Image
            src="/hojas.png"
            width="200"
            height="200"
            alt="Hojas decoracion"
            className="absolute -top-1 -left-1 w-16 h-16"
          />

          <Image
            src="/cajas/img3.png"
            width="200"
            height="200"
            alt="Hojas decoracion"
            className="absolute -top-6 -right-6  w-44 h-44  group-hover:rotate-12 duration-500"
          />

          <div className="absolute top-4 left-12">
            <p className="text-xl font-bold uppercase">Italian pizza</p>

            <p className=" text-[12px] font-extralight text">
              Obtenla x 20% de Descuento
            </p>

            <h1 className=" text-[12px] font-extralight text">Ordenalo Ahora</h1>

            <button className="text-[12px] font-medium border-b-2 border-white">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
