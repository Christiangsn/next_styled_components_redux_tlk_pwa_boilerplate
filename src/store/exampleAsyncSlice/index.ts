import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: ''
}

const changeExampleAsyncSliceReducer = createSlice({
  name: 'exampleAsyncSlice',
  initialState,
  reducers: {
    AsyncSlice(state) {
      state.text = ''
    }
  }
})

export const { AsyncSlice } = changeExampleAsyncSliceReducer.actions

export const exampleAsyncSlice = changeExampleAsyncSliceReducer.reducer
