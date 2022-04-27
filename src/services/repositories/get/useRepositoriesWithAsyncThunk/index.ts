import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRepositoriesInTheGithub } from '../fetch'

export const fetchRepositories = createAsyncThunk(
  'repositories/getRepositories',
  async (user: string) => await getRepositoriesInTheGithub(user)
)
