import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CompanyType } from '../types/type'

export type InitialState = {
  companyList: CompanyType[]
  loading: boolean
  error: null | string
  SearchTerm:number,
}

const initialState: InitialState = {
  companyList: [],
  loading: true,
  error: null,
  SearchTerm:0,
 
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
    },
    searchCompany:(state , action )=>{
      state.SearchTerm = action.payload;


    }
  }
  
})

//  reducer
const companyReducer = companySlice.reducer
export default companyReducer

// action
export const {searchCompany} = companySlice.actions;
export const companyAction = companySlice.actions
