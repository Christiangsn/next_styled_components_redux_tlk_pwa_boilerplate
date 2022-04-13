import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: false
}

const changeExampleSlice = createSlice({
  name: 'changeExample',
  initialState,
  reducers: {
    setChangeExample(state) {
      state.toggle = !state.toggle
    }
  }
})

export const { setChangeExample } = changeExampleSlice.actions

export default changeExampleSlice.reducer
