import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const name = 'counter'

interface CounterState {
  count: number
  isReady: boolean
}

const initialState: CounterState = {
  count: 5,
  isReady: false
}

const counterSlice = createSlice({
  name,
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return
      state.count = action.payload
      state.isReady = true
    },
    addOne(state) {
      state.count++
    },
    substractOne(state) {
      if (state.count === 0) return
      state.count--
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (state.count > 0 && action.payload > 0 && action.payload !== state.count) state.count = action.payload
    }
  }
});

export const { addOne, substractOne, resetCounter, initCounterState } = counterSlice.actions

export default counterSlice.reducer