import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cart'
import { analyticsSlice } from './slices/analytics'

export const store = configureStore({
  reducer: {
    analytics: analyticsSlice.reducer,
    cart: cartSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})