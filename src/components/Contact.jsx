import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative h-auto md:h-[450px]">
      <div>
        <Image
          src="/comida.jpg"
          width="500"
          height="500"
          alt="Comida"
          className="h-full w-full md:w-2/6"
        />
      </div>

      <div className="absolute md:top-16 md:left-4 left-0 top-12 mx-4 md:mx-0 flex flex-col items-center md:h-[350px] md:w-[400px] w-80 h-96 bg-slate-800 rounded-lg ">
        <h1 className="text-white font-medium text-xl mt-4">Horario</h1>
        <span className="w-5/6 h-[1px] bg-red-600 mt-2"></span>

        <div className="w-auto md:w-5/6 mt-4">
          <div className="flex items-center mt-3 justify-between text-sm md:text-[15px] text-slate-200 font-white font-light border-b-[1px] border-slate-500 w-full">
            <h1>Lunes - Martes</h1>
            <h2>08:00 am - 05:00 pm</h2>
          </div>

          <div className="flex items-center mt-3 justify-between text-sm md:text-[15px] text-slate-200 font-white font-light border-b-[1px] border-slate-500 w-full">
            <h1>Miercoles</h1>
            <h2>08:00 am - 05:00 pm</h2>
          </div>

          <div className="flex items-center mt-3 justify-between text-sm md:text-[15px] text-slate-200 font-white font-light border-b-[1px] border-slate-500 w-full">
            <h1>Jueves</h1>
            <h2>08:00 am - 05:00 pm</h2>
          </div>

          <div className="flex items-center mt-3 justify-between text-sm md:text-[15px] text-slate-200 font-white font-light border-b-[1px] border-slate-500 w-full">
            <h1>Viernes - Sabado</h1>
            <h2>08:00 am - 05:00 pm</h2>
          </div>
        </div>

        <h1 className="text-white font-medium text-xl mt-4">Linea de Atencion</h1>
        <span className="w-2/6 h-[1px] bg-red-600"></span>
        <h1 className="text-red-600 font-medium text-lg mt-2">
          +57 316 7264 847
        </h1>
      </div>

      <div className="md:absolute top-8 right-32 mx-4 md:mx-0 md:w-3/6 h-auto flex flex-col items-center">
        <h1 className="text-white font-medium text-lg">
          Reserva Una Mesa <span className="text-red-600"> Ahora</span>
        </h1>
        <p className="text-sm font-extralight text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam
          eligendi, sit, repellendus commodi quo aperiam consequatur.
        </p>

        <div className="w-full grid grid-cols-3 gap-4 mt-8">
          <input
            type="text"
            className="rounded-2xl p-1 bg-transparent border-2 outline-none border-red-600 text-white text-sm font-light"
            placeholder="Nombre..."
          />
          <input
            type="date"
            className="rounded-2xl p-1 bg-transparent border-2 outline-none border-red-600 text-white text-sm font-light"
          />
          <input
            type="number"
            className="rounded-2xl p-1 bg-transparent border-2 outline-none border-red-600 text-white text-sm font-light"
            placeholder="Numero Telefonico"
          />
        </div>

        <textarea className="mt-4 outline-none p-2 bg-transparent border-2 border-red-600 rounded-lg w-full h-32  text-white text-sm font-light"></textarea>

        <button className="p-2 mt-8 mb-4 mmd:mb-0 text-white text-sm bg-red-600 hover:shadow-lg hover:shadow-red-700 duration-300 rounded-2xl px-4">
          Enviar Peticion
        </button>
      </div>
    </div>
  );
}
