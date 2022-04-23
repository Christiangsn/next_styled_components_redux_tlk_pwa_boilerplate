import { api } from 'libs'
import { ErrorApi } from 'types/errorApi'
import { errorApi } from 'utils'
import { RepositoriesTypes } from './types'

export const searchRepositoriesInTheGithub = async (
  user: string
): Promise<RepositoriesTypes> => {
  try {
    const { data } = await api.get(`/users/${user}/repos`)

    return {
      data,
      error: '',
      loading: false
    }
  } catch (e) {
    return {
      data: [],
      error: errorApi(e as ErrorApi),
      loading: false
    }
  }
}
