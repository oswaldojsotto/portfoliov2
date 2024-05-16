import { createSlice } from '@reduxjs/toolkit'

export interface sidemenuSlice {
  sideMenuState: boolean
  languageSelectorState: boolean
}

const initialState: sidemenuSlice = {
  sideMenuState: false,
  languageSelectorState:false
}

export const sidemenuSlice = createSlice({
  name: 'sidemenu',
  initialState,
  reducers: {
    setSideMenu: (state, action) => {
           state.sideMenuState = action.payload
    },
    setLanguageSelectorMenu: (state, action) => {
      state.languageSelectorState = action.payload
},
   
  },
})

export const { setSideMenu, setLanguageSelectorMenu } = sidemenuSlice.actions
export default sidemenuSlice.reducer