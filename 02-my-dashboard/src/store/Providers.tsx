'use client'
import React, { useEffect } from 'react'
import { store } from './index';
import { Provider } from 'react-redux';
import { setFavoritesPokemons } from './pokemons/pokemonsSlice';

interface Props {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}')
    store.dispatch(setFavoritesPokemons(favorites))
  }, [])

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providers