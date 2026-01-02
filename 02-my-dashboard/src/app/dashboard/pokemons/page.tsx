import { PokemonGrid } from '@/pokemons/components/PokemonGrid'
import React from 'react'
import { PokemonsResponse, SimplePokemon } from '@/pokemons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Listado de Pokemons',
  description: 'Listado de Pokemons usando SSG'
}

const getPokemons = async (limit = 50, offset = 0): Promise<SimplePokemon[]> => {
  const res: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())

  const data = res.results.map((pokemon) => {
    const id = pokemon.url.split('/').at(-2)!
    return {
      id,
      name: pokemon.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }
  })

  return data
}

export default async function PokemonPage() {

  const pokemons = await getPokemons(151)

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>Listado de pokemon <small>estático</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
