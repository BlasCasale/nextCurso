import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsFav {
  favorites: { [key: string]: string }
}

const initialState: PokemonsFav = {
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritesPokemons(state, action: PayloadAction<{ [key: string]: string }>) {
      state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id, name } = action.payload
      if (!!state.favorites[id]) {
        delete state.favorites[id]
        return
      }

      state.favorites[id] = name
    }
  }
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer