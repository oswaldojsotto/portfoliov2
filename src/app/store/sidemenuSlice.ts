import { createSlice } from '@reduxjs/toolkit'

export interface sidemenuSlice {
  open: boolean
}

const initialState: sidemenuSlice = {
  open: false,
}

export const sidemenuSlice = createSlice({
  name: 'sidemenu',
  initialState,
  reducers: {
    setSideMenu: (state, action) => {
           state.open = action.payload
    },
   
  },
})

export const { setSideMenu } = sidemenuSlice.actions
export default sidemenuSlice.reducer