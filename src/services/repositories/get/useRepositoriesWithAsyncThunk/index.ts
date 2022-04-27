import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRepositoriesInTheGithub } from '../api'

export const fetchRepositories = createAsyncThunk(
  'repositories/getRepositories',
  async (user: string) => await getRepositoriesInTheGithub(user)
)
