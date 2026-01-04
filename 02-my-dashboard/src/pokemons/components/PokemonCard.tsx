'use client'
import Image from 'next/image'
import Link from 'next/link'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice'

interface Props {
    pokemon: SimplePokemon
}

export default function PokemonCard({ pokemon }: Props) {

    const { name, img, id } = pokemon

    const isFavorite = useAppSelector(state => {
        return !!state.pokemons.favorites[id]
    })

    const dispatch = useAppDispatch()

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    }

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center p-6 bg-gray-800 border-b">
                    <Image src={img} alt={name} className="rounded-full" height={100} width={100} priority={false} />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link href={`pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100" >
                            Más info
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={onToggle} className="px-4 py-2 hover:bg-gray-100 flex items-center hover:cursor-pointer">
                        <div className="text-red-600">
                            {
                                isFavorite
                                    ? (<IoHeart />)
                                    : (<IoHeartOutline />)
                            }
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {
                                    isFavorite
                                        ? 'Quitar de favoritos'
                                        : 'Agregar a favoritos'
                                }
                            </p>
                            <p className='text-xs text-gray-500'>Click para cambiar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}