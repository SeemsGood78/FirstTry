import { createSlice } from '@reduxjs/toolkit'
import { calculateTotalPrice } from '../../utils/calculatePrice'


const initialState = {
  items: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }

      state.totalPrice = state.items.reduce((acc, item) => {
        return (item.price * item.count) + acc
      }, 0)
    },
    clearCart(state) {
      state.items = []
      state.totalPrice = 0
    },
    removeItem (state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalPrice = state.items.reduce((acc, item) => {
        return (item.price * item.count) + acc
      }, 0)
    },
    minusItem (state, action) {
      const findItem = state.items.find(item => item.id === action.payload)
      findItem.count--
      state.totalPrice = calculateTotalPrice(state.items)
      console.log(calculateTotalPrice(state.items))
    },
    plusItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload)
      findItem.count++
      state.totalPrice = state.items.reduce((acc, item) => {
        return (item.price * item.count) + acc
      }, 0)
    }
  }
})


export const { addItem, clearCart, removeItem, minusItem, plusItem } = cartSlice.actions

export default cartSlice.reducer