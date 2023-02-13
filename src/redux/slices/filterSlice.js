import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minPrice: 0,
  maxPrice: 400,
  volume: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterPrice: (state, action) => {
      state.minPrice = action.payload.min
      state.maxPrice = action.payload.max
    },
    setFilterVolume: (state, action) => {
      if (!state.volume.includes(action.payload)) {
        state.volume = [...state.volume, action.payload]
      } else {
        state.volume = state.volume.filter((el) => el !== action.payload)
      }
    },
    reset: () => initialState
  },
})
export const { setFilterPrice, setFilterVolume, reset } = filterSlice.actions

export default filterSlice.reducer