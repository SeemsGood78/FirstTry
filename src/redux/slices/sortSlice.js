import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk('sort/fetchItems', async (params) => {
  const { linkType, linkSort, currentPage } = params
  const { data } = await axios.get(`https://62fe842e41165d66bfc1aab6.mockapi.io/Items?${linkType}&${linkSort}&limit=9&page=${currentPage}`)
  return data
})

const initialState = {
  items: [],
  searchValue: '',
  categoryId: 0,
  sortId: 0,
  status: 'loading',
  currentPage: 1,
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
    setSortId: (state, action) => {
      state.sortId = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    minusCurrentPage: (state) => {
      state.currentPage = state.currentPage-=1
    },
    plusCurrentPage: (state) => {
      state.currentPage = state.currentPage+=1
    },
  },
  extraReducers: {
    //get items from api
    [fetchItems.pending]: (state) => {
      state.items = []
      state.status = 'loading'
    },
    [fetchItems.fulfilled]: (state, action) => {
      // state.items = action.payload
      const available = action.payload.filter(item => item.isAvailable)
      const unAvailable = action.payload.filter(item => !item.isAvailable)
      state.items = [...available, ...unAvailable]
      state.status = 'loaded'
    },
    [fetchItems.rejected]: (state) => {
      state.items = []
      console.warn('Error')
      state.status = 'error'
    },
  }
})


export const { setSearchValue, setCategoryId, setSortId, addToStorage, setCurrentPage, minusCurrentPage ,plusCurrentPage } = sortSlice.actions

export default sortSlice.reducer