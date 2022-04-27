import { createSlice } from '@reduxjs/toolkit'
import { getRepositoriesInTheGithubTypes } from 'services/repositories/get/fetch/types'
import { PayloadType } from './types'

const initialState: getRepositoriesInTheGithubTypes = {
  isLoading: false,
  repositories: [],
  error: ''
}

const exampleAsyncSlice = createSlice({
  name: 'exampleAsync',
  initialState,
  reducers: {
    repositoriesLoading(state) {
      state.isLoading = true
      state.repositories = []
      state.error = ''
    },
    getRepositories(state, { payload }: PayloadType) {
      return { ...state, ...payload }
    }
  }
})

export const { repositoriesLoading, getRepositories } =
  exampleAsyncSlice.actions

export const exampleAsync = exampleAsyncSlice.reducer
