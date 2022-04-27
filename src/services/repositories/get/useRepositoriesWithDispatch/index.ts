import { useExampleAsyncSlice } from 'store/exampleAsyncSlice/useExampleAsyncSlice'
import { getRepositoriesInTheGithub } from '../fetch'

export const useFetchRepositories = () => {
  const { getRepositories, repositoriesLoading } = useExampleAsyncSlice()

  const getFetchRepositories = async (user: string) => {
    repositoriesLoading()
    const repositories = await getRepositoriesInTheGithub(user)
    getRepositories(repositories)
  }

  return { getFetchRepositories }
}
