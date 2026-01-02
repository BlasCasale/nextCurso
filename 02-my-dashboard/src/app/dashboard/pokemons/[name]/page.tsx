import React from 'react'
import { Metadata } from 'next'
import { Pokemon, PokemonsResponse } from '@/pokemons'
import { notFound } from 'next/navigation'
import PokemonInfo from '@/pokemons/components/PokemonInfo'

interface Props {
  params: Promise<{ name: string }>
}

export async function generateStaticParams() {
  const res: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then((res) => res.json())

  const static151Pokemons = res.results.map((pokemon) => ({ name: pokemon.name }))

  return static151Pokemons.map(({ name }) => ({ name }))
}

export const getMetadata = async ({ params }: Props): Promise<Metadata> => {

  try {
    const { id, name } = await getPokemon((await params).name)

    return {
      title: `Página de ${name}`,
      description: `This page is about pokemon ${name} with id ${id}`
    }
  } catch (error) {
    return {
      title: 'Pokemon no encontrado',
      description: 'Página del pokemon no encontrado'
    }
  }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { next: { revalidate: 60 * 60 * 30 * 6 } })

  if (!result.ok) notFound()
  return result.json()
}

const PokemonPageName = async ({ params }: Props) => {
  const pokemon = await getPokemon((await params).name);

  return (
    <PokemonInfo pokemon={pokemon} />
  )
}

export default PokemonPageName