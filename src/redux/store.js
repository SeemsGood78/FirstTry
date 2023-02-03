import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import sortSlice from './slices/sortSlice'
import filterSlice from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    sort: sortSlice,
    cart: cartSlice,
    filter: filterSlice,
  },
})

