import { MessageSquareQuote, Star } from "lucide-react";
import Image from "next/image";

export default function BoxComentarios() {
  return (
    <div className="flex w-72 h-60 shadow-xl rounded-xl bg-slate-900 mt-8">
      <div className="m-4">
        <MessageSquareQuote color="white" size={35} strokeWidth={1} />
        <p className="text-[12px] text-white my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ullam ratione repellendus atque quidem.
        </p>
        <div className="flex gap-2">
          <Star color="yellow" size={20} strokeWidth={1} />
          <Star color="yellow" size={20} strokeWidth={1} />
          <Star color="yellow" size={20} strokeWidth={1} />
          <Star color="yellow" size={20} strokeWidth={1} />
          <Star color="yellow" size={20} strokeWidth={1} />
        </div>

        <div className="flex mt-4 gap-1">
          <Image
            src="/persona.png"
            width="80"
            height="80"
            alt="icono persona"
            className="w-12 h-12"
          />
          <h1 className="text-sm font-medium text-white mt-1">
            Santiago Contreras
          </h1>
        </div>
      </div>
    </div>
  );
}
