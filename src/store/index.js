import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'

export const store = configureStore({
  reducer: {
      counter: counterSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})