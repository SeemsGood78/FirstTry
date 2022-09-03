import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0 ,
}



export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
        state.searchValue = action.payload
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
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


export const { setSearchValue, setCategoryId } = sortSlice.actions

export default sortSlice.reducer