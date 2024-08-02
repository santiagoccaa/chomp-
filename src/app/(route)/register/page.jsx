import Link from "next/link"

const Register = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">

        <form className="mx-4 relative h-auto flex flex-col items-center justify-center gap-y-4 w-96 bg-white shadow-lg shadow-gray-200 rounded-lg" action="">

          <div className="flex gap-2 items-center justify-center mt-8 mb-8">
            <span className="w-12 bg-red-500 h-[2px]"></span>
            <h1 className="text-2xl  font-bold text-gray-600">Crear <span className="text-red-500 font-medium">Cuenta</span></h1>
            <span className="w-12 bg-red-500 h-[2px]"></span>
          </div>

          <input className="bg-gray-100 outline-none w-10/12 rounded-sm p-2  text-sm font-medium text-gray-800" type="text" placeholder="Nombre de Usuario..." />
          <input className="bg-gray-100 outline-none w-10/12 rounded-sm p-2  text-sm font-medium text-gray-800" type="text" placeholder="Ciudad" />
          <input className="bg-gray-100 outline-none w-10/12 rounded-sm p-2  text-sm font-medium text-gray-800" type="text" placeholder="Direccion" />
          <input className="bg-gray-100 outline-none w-10/12 rounded-sm p-2  text-sm font-medium text-gray-800" type="email" placeholder="Correo" />
          <input className="bg-gray-100 outline-none w-10/12 rounded-sm p-2  text-sm font-medium text-gray-800" type="password" placeholder="Contraseña..." />
          <input className="bg-gray-100 outline-none w-10/12 rounded-sm p-2  text-sm font-medium text-gray-800" type="password" placeholder="Repetir Contraseña..." />

          <input className="p-1 uppercase bg-red-500 w-10/12 rounded-sm mt-8 mb-24 text-white font-bold cursor-pointer border-[1px] border-red-500 hover:bg-white hover:text-red-500 transition-all duration-500" type="submit" value='Crear' />


          <div className="absolute bottom-4 left-8 text-sm flex items-center gap-2">
            <p>Ya tienes cuenta?...</p>
            <Link href='/login' className="font-bold text-red-500 hover:underline underline-offset-1 cursor-pointer">Inicia Sesion</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register