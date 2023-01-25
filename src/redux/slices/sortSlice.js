import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk('sort/fetchItems', async (params) => {
  const { linkType, linkSort } = params
  const { data } = await axios.get(`https://62fe842e41165d66bfc1aab6.mockapi.io/Items?${linkType}&${linkSort}`)
  // https://62fe842e41165d66bfc1aab6.mockapi.io/Items?${linkType}&${linkSort}&limit=9&${linkPage}
  return data
})

export const itemsPerPage = 9
 
const initialState = {
  items: [],
  searchValue: '',
  categoryId: 0,
  sortId: 0,
  status: 'loading',
  currentPage: 1,
  fromItem: 0,
  toItem: itemsPerPage
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
      state.fromItem = 0
      state.toItem = itemsPerPage
      state.currentPage = 1
    },
    setSortId: (state, action) => {
      state.sortId = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
      state.fromItem = (itemsPerPage * (action.payload - 1))
      state.toItem = (itemsPerPage * action.payload)
    },
    minusCurrentPage: (state) => {
      state.currentPage = state.currentPage-=1
      state.fromItem = state.fromItem -=itemsPerPage
      state.toItem = state.toItem -=itemsPerPage
    },
    plusCurrentPage: (state) => {
      state.currentPage = state.currentPage+=1
      state.fromItem = state.fromItem +=itemsPerPage
      state.toItem = state.toItem +=itemsPerPage
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