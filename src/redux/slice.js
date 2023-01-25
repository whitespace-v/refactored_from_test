import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: {
    loadTxt: 'Загрузка',
    loadGreat: {}
  },
  success: 'Success',
  error:{}
}

export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dataFunc: (state, action) =>{
        state.loading.loadGreat = action.payload
    },
    errFunc: (state, action) =>{
        state.error = action.payload
    }
  },
})
export const { dataFunc, errFunc } = dataSlice.actions

export default dataSlice.reducer