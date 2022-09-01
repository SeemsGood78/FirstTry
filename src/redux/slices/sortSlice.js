import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
}

// const ...

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
        state.searchValue = action.payload
    }
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    //   console.log(action, state.value)
    // },
  },
})


export const { setSearchValue } = sortSlice.actions

export default sortSlice.reducer