import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SidemenuState {
  firstTime: boolean
}

const initialState: SidemenuState = {
  firstTime: false,
}

export const firstTimeAnimationSlice = createSlice({
  name: 'firstTimeAnimation',
  initialState,
  reducers: {
    setFirstTimeAnimation: (state, action: PayloadAction<boolean>) => {
      state.firstTime = action.payload
    },
  },
})

export const { setFirstTimeAnimation } = firstTimeAnimationSlice.actions
export default firstTimeAnimationSlice.reducer