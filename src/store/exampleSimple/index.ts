import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: false
}

const changeExampleSimpleReducer = createSlice({
  name: 'exampleSimple',
  initialState,
  reducers: {
    setChangeExample(state) {
      state.toggle = !state.toggle
    }
  }
})

export const { setChangeExample } = changeExampleSimpleReducer.actions

export const exampleSimple = changeExampleSimpleReducer.reducer
