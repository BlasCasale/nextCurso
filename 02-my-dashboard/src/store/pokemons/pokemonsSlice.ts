import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsFav {
  [key: string]: string
}

const getInitialState = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}')
  return favorites
}

const initialState: PokemonsFav = {
  ...getInitialState()
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id, name } = action.payload
      if (!!state[id]) {
        delete state[id]
        return
      }

      state[id] = name
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer