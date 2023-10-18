import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CompanyType } from '../types/type'

export type InitialState = {
  companyList: CompanyType[]
  loading: boolean
  error: null | string
}

const initialState: InitialState = {
  companyList: [],
  loading: true,
  error: null
}

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<CompanyType[]>) => {
      state.companyList = action.payload
      state.loading = false
    },
    getError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

//  reducer
const companyReducer = companySlice.reducer
export default companyReducer

// action
export const companyAction = companySlice.actions
