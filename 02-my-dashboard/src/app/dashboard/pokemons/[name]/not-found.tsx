import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen text-slate-300 selection:bg-blue-600 selection:text-white">

      <div className="flex">

        <Sidebar />

        <div className="w-full text-slate-900">
          <main className="h-full w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12">
              Pokemon no encontrado
            </div>
            <button className="mt-5">
              <Link href='/dashboard/pokemons'
                className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
              >
                <span
                  className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <span>Listado de pokemons</span>
                </span>
              </Link>
            </button>
          </main>
        </div>

      </div>

    </div>
  )
}