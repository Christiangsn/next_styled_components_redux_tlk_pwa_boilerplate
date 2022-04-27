import { getRepositoriesInTheGithubTypes } from 'services/repositories/get/api/types'
import { getRepositories, repositoriesLoading } from '.'
import { useTypedDispatch, useTypedSelector } from '../useHelpers'

export const useExampleAsyncSlice = () => {
  const dispatch = useTypedDispatch()
  const exampleAsyncSlice = useTypedSelector(state => state.exampleAsync)

  const setState = {
    repositoriesLoading: () => dispatch(repositoriesLoading()),
    getRepositories: (repositories: getRepositoriesInTheGithubTypes) =>
      dispatch(getRepositories(repositories))
  }

  return { exampleAsyncSlice, ...setState }
}
