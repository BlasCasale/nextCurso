import { titleFont } from '@/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-200 w-full justify-center items-center align-middle'>

      <div className='text-center px-5 mx-5'>
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className='font-semibold text-xl'>Oooops! No encontrado</p>
        <p className='font-light'>
          <span>Puedes regresar al</span>
          <Link href={'/'} className='font-normal hover:underline transition-all'> Home</Link>
        </p>
      </div>

      <div className='px-5 mx-5'>
        <Image alt='Imágen de error' src={'/imgs/starman.png'} className='p-5 sm:p-0' width={550} height={550} />

      </div>
    </div>
  )
}
