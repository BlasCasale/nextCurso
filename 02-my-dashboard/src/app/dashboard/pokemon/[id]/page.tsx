import { Pokemon } from "@/pokemons";
import PokemonInfo from "@/pokemons/components/PokemonInfo";
import { Metadata } from 'next';
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const static151Pokemons = Array.from({ length: 151 }).map((_, i) => `${i++}`)

  return static151Pokemons.map(id => ({ id }))
}

export const getMetadata = async ({ params }: Props): Promise<Metadata> => {

  try {
    const { id, name } = await getPokemon((await params).id)

    return {
      title: `${id} - ${name}`,
      description: `This page is about pokemon ${name}`
    }

  } catch (error) {
    return {
      title: 'Pokemon no encontrado',
      description: 'Página del pokemon no encontrado'
    }
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { next: { revalidate: 60 * 60 * 30 * 6 } })

  if (!result.ok) notFound()
  return result.json()
}

export default async function PokemonPageId({ params }: Props) {

  const pokemon = await getPokemon((await params).id);

  return (
    <PokemonInfo pokemon={pokemon} />
  );
}