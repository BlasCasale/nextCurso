'use client'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { Pokemon } from '../interfaces/pokemon'

export const PokemonContainer = () => {

  const favorites = useAppSelector(state => state.pokemons)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [error, setError] = useState("")

  const [pokemons, setPokemons] = useState<SimplePokemon[]>([])

  const pokemonsToRender = pokemons

  useEffect(() => {
    const getPokemons = async () => {
      if (!favorites || Object.keys.length === 0) {
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        const keys = Object.keys(favorites)
        const promises = keys.map(key => fetch(`https://pokeapi.co/api/v2/pokemon/${key}`).then(res => res.json()))
        const result: Pokemon[] = await Promise.all(promises)
        const data = result.map((pokemon) => {
          const id = pokemon.species.url.split('/').at(-2)!
          return {
            id,
            name: pokemon.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
        })
        setPokemons(data)
      } catch (error) {
        setError("Error al buscar los favoritos")
      } finally {
        setIsLoading(false)
      }
    }

    getPokemons()
  }, [])

  if (error) return <h2>{error}</h2>

  if (isLoading) return <h2>Cargando pokemons...</h2>

  return (
    <>
      {
        pokemons.length
          ? <PokemonGrid pokemons={pokemonsToRender} />
          : <h2>No tenes favoritos</h2>
      }
    </>
  )
}
