import { configureStore } from '@reduxjs/toolkit'
import sidemenuSlice from './sidemenuSlice'

export const store = configureStore({
  reducer: {sidemenu: sidemenuSlice},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch