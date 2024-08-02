import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="relative overflow-hidden h-auto flex flex-col items-center justify-center border-t-2 border-slate-900">
        <Image
          width="400"
          height="400"
          src="/lechuga.png"
          alt="Lechuga"
          className="hidden md:flex absolute -bottom-4 rotate-12 -left-24 w-60 h-60"
        />
        <div className="w-4/6 flex flex-col md:flex-row items-center border-b-2 border-slate-800 gap-8">
          <div className="md:border-r-2 my-2 md:my-8 border-slate-800 flex items-center justify-center h-28">
            <h1 className="text-xl font-bold text-white mr-4">Chomp </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-y-4 justify-between w-full">
            <div className="flex gap-2">
              <span className="h-12 w-12 rounded-full flex items-center justify-center bg-red-600">
                <MapPin color="#fff" size={25} strokeWidth={1.5} />
              </span>
              <div className="text-sm text-white font-light">
                <h3 className="font-bold">Location</h3>
                <h2>Calle 34 K #40B 34</h2>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="h-12 w-12 rounded-full flex items-center justify-center bg-red-600">
                <Phone color="#fff" size={25} strokeWidth={1.5} />
              </span>
              <div className="text-sm text-white font-light">
                <h3 className="font-bold">Attention lines</h3>
                <h3>+57 313 4475 274</h3>
              </div>
            </div>

            <div className="flex gap-2 mb-4 md:mb-0">
              <span className="h-12 w-12 rounded-full flex items-center justify-center bg-red-600">
                <Mail color="#fff" size={25} strokeWidth={1.5} />
              </span>
              <div className="text-sm text-white font-light">
                <h3 className="font-bold">Email</h3>
                <h3>Correo@gmail.com</h3>
                <h2>Chomp @hotmail.com</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/6 flex flex-col md:flex-row justify-between gap-8 mb-6">
          <ul className="w-full md:w-[25%] text-white text-sm">
            <h1 className="font-bold my-2">About Restaurant</h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-red-600 to-slate-700 via-red-500"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptatum amet recusandae..
            </p>
            <div className="flex gap-2 my-4">
              <span className="p-1 rounded-full border-[1px] border-white">
                <Facebook size={20} color="#fff" strokeWidth={1} />
              </span>
              <span className="p-1 rounded-full border-[1px] border-white">
                <Twitter size={20} color="#fff" strokeWidth={1} />
              </span>
              <span className="p-1 rounded-full border-[1px] border-white">
                <Youtube size={20} color="#fff" strokeWidth={1} />
              </span>
              <span className="p-1 rounded-full border-[1px] border-white">
                <Instagram size={20} color="#fff" strokeWidth={1} />
              </span>
            </div>
          </ul>

          <ul className="w-full md:w-[25%] text-white text-sm">
            <h1 className="font-bold my-2">Quick Links</h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-red-600 to-slate-700 via-red-500"></div>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} /> Home
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Shop
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Blog
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Favoritos
            </li>
          </ul>
          <ul className="w-full md:w-[25%] text-white text-sm">
            <h1 className="font-bold my-2">Our Menu</h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-red-600 to-slate-700 via-red-500"></div>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} /> Papas
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Chomp 
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Burrito
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Burguer
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Tacos
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Alitas
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <MoveRight size={12} />
              Hot Dog
            </li>
          </ul>

          <ul className="w-full md:w-[25%] text-white text-sm ">
            <h1 className="font-bold my-2">Our Menu</h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-red-600 to-slate-700 via-red-500"></div>
            <p>Subscribete para resivir todas las noticias</p>
            <input
              className="w-full p-2 rounded-2xl text-white bg-slate-800 my-2 text-sm outline-none hover:outline-1 hover:outline-red-600"
              type="text"
              placeholder="Email"
            />
            <button className="w-full p-2 rounded-2xl text-white bg-red-600 dont-bold">
              Subscribir
            </button>
          </ul>
        </div>
      </div>

      <div className="w-full h-auto md:h-12 bg-red-600 text-white text-sm font-light flex items-center justify-between">
        <h1 className="ml-12">Todos los derechosr reservados para Chomp </h1>
        <div className="mr-12 flex items-center gap-4">
          <h1>Politicas</h1>
          <span>/</span>
          <h1>terminos y condiciones</h1>
        </div>
      </div>
    </>
  );
}
