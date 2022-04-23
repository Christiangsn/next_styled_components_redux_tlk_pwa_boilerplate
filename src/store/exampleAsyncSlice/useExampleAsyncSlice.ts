import { useTypedDispatch, useTypedSelector } from 'store/useHelpers'
import { AsyncSlice } from '.'

export const useExampleAsyncSlice = () => {
  const dispatch = useTypedDispatch()
  const { exampleAsyncSlice } = useTypedSelector(state => state)

  const setState = {
    setRemoveText2: () => dispatch(AsyncSlice())
  }

  return { exampleAsyncSlice, ...setState }
}
