import { User, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-white">
      <h1 className="uppercase text-2xl text-red-500 font-bold">Chomp </h1>

      <ul className="hidden md:flex items-center gap-6 text-sm font-bold uppercase">
        <li className="flex items-center gap-[1px] cursor-pointer hover:text-red-600 duration-300">
          Inicio <ChevronDown size={12} strokeWidth={3} color="#dc2626" />
        </li>
        <li className="flex items-center gap-[1px] cursor-pointer hover:text-red-600 duration-300">
          Tienda <ChevronDown size={12} strokeWidth={3} color="#dc2626" />
        </li>
        <li className="flex items-center gap-[1px] cursor-pointer hover:text-red-600 duration-300">
          Blog <ChevronDown size={12} strokeWidth={3} color="#dc2626" />
        </li>
        <li className="flex items-center gap-[2px] cursor-pointer hover:text-red-600 duration-300">
          Favoritos <ChevronDown size={12} strokeWidth={3} color="#dc2626" />
        </li>
      </ul>

      <div className="flex gap-2 items-center justify-center group">
        <div className="p-2 rounded-full bg-gray-600 group-hover:bg-sky-500 duration-300">
          <User size={20} color="#fff" strokeWidth={2} />
        </div>
        <div className="flex items-center text-sm gap-1 font-light">
          <Link href='/login' className="border-b-2 border-transparent  hover:border-sky-500 duration-300">Iniciar</Link>
          <h1>/</h1>
          <Link href='/register' className="border-b-2 border-transparent  hover:border-sky-500 duration-300">Registro</Link>
        </div>
      </div>
    </nav>
  );
}
