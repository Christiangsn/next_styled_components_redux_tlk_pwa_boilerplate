import { fetchRepositories } from '.'
import { useTypedDispatch, useTypedSelector } from '../useHelpers'

export const useExampleAsyncThunk = () => {
  const dispatch = useTypedDispatch()

  const exampleAsyncThunk = useTypedSelector(state => state.exampleAsyncThunk)

  const setState = {
    setFetchRepositories: (user: string) => dispatch(fetchRepositories(user))
  }

  return { exampleAsyncThunk, ...setState }
}
