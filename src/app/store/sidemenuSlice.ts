import { createSlice } from '@reduxjs/toolkit'

export interface sidemenuSlice {
  sideMenuState: boolean
  languageSelectorState: boolean
  firstTimeLoading: boolean
}

const initialState: sidemenuSlice = {
  sideMenuState: false,
  languageSelectorState: false,
  firstTimeLoading: false
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
    setFirstTimeLoading: (state, action) => {
      state.firstTimeLoading = action.payload
},
   
  },
})

export const { setSideMenu, setLanguageSelectorMenu, setFirstTimeLoading } = sidemenuSlice.actions
export default sidemenuSlice.reducer