import Image from "next/image";

export default function Info() {
  return (
    <div className="relative h-96 overflow-hidden">
      <div className="parallax bg-fixed bg-center bg-cover w-full h-[400px]"></div>

      <div className="mx-4 absolute top-8 right-0 md:right-32 md:w-2/6 h-auto">
        <h1 className="text-2xl text-white font-bold uppercase">OBTENGA UN 20% DE DESCUENTO EN ALIMENTOS ESPECIALES</h1>
        <p className="text-lg font-light text-red-600">Para Ti!</p>

        <p className="mt-4 font-extralight text-sm text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque optio sed esse ex at error dicta, voluptatem facilis maiores tempora qui placeat eos odio autem impedit quisquam obcaecati nisi sequi?</p>

        <div className="flex gap-8 items-center mt-8">
            <button className="p-2 text-white text-sm bg-red-600 hover:shadow-lg hover:shadow-red-700 duration-300 rounded-2xl px-4">Ordenar Ahora</button>

            <h1 className="flex text-red-600 font-medium gap-2 text-lg">$30.000 <span className="text-white line-through">20.000</span></h1>
        </div>
      </div>
    </div>
  );
}
