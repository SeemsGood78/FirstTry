import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  minPrice: 0,
  maxPrice: 400,
  volume: undefined,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterPrice: (state, action) => {
      state.minPrice = action.payload.min
      state.maxPrice = action.payload.max
    }, 
    setFilterVolume : (state,action) => {
      state.volume = action.payload
    },
    reset: () => initialState
  },
})
export const { setFilterPrice,setFilterVolume,reset } = filterSlice.actions

export default filterSlice.reducer