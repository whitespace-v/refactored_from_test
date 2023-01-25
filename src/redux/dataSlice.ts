import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Idata} from "../models/Idata";

interface IDataStore {
  data: Idata,
  loading: boolean,
  error: boolean
}

const initialState: IDataStore = {
  data: {
    id: 0,
    name: ''
  },
  loading: false,
  error: false
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataFetching: state => {
      state.loading = true
      state.error = false
    },
    dataFetchingSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = false
      state.data = action.payload
    },
    dataFetchingError: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = true
      state.data = action.payload
    }
  },
})
export default dataSlice.reducer