import { createSlice } from '@reduxjs/toolkit'
import { fetchRepositories } from 'services'
import { getRepositoriesInTheGithubTypes } from 'services/repositories/get/fetch/types'
import { PayloadType } from 'store/exampleAsyncThunk/types'

const initialState: getRepositoriesInTheGithubTypes = {
  isLoading: false,
  repositories: [],
  error: ''
}

const exampleAsyncThunkSlice = createSlice({
  name: 'exampleAsyncThunk',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRepositories.pending, state => {
        state.isLoading = true
        state.repositories = []
        state.error = ''
      })
      .addCase(
        fetchRepositories.fulfilled,
        (state, { payload }: PayloadType) => ({ ...state, ...payload })
      )
  }
})

export const exampleAsyncThunk = exampleAsyncThunkSlice.reducer
