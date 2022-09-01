import { configureStore } from '@reduxjs/toolkit'
import sortSlice from './slices/sortSlice'
import  testSlice  from './slices/testSlice'

export const store = configureStore({
  reducer: {
    testSlice,
    sort: sortSlice
  },
})

