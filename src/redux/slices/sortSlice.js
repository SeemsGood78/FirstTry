import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk('sort/fetchItems', async (params) => {
  const {linkType, linkSort} = params
  const { data } = await axios.get(`https://62fe842e41165d66bfc1aab6.mockapi.io/Items?${linkType}&${linkSort}`)
  return data
})

const initialState = {
  items: [],
  searchValue: '',
  categoryId: 0,
  status: 'loading'
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
  },
  extraReducers: {
    //get items from api
    [fetchItems.pending]: (state) => {
      state.items = []
      state.status = 'loading'
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'loaded'
    },
    [fetchItems.rejected]: (state) => {
      state.items = []
      console.warn('Error')
      state.status = 'error'
    },
  }
})


export const { setSearchValue, setCategoryId } = sortSlice.actions

export default sortSlice.reducer