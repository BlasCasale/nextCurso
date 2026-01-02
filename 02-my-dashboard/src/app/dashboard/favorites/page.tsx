import React from 'react'
import { Metadata } from 'next'
import { PokemonContainer } from '@/pokemons/components/PokemonContainer'

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de Pokemons favoritos'
}

export default async function PokemonPage() {

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>Listado de pokemon <small>favoritos</small></span>
      <PokemonContainer />
    </div>
  )
}
