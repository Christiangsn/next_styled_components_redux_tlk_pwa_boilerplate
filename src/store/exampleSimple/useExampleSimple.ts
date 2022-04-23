import { useTypedDispatch, useTypedSelector } from 'store/useHelpers'
import { setChangeExample } from '.'

export const useExampleSimple = () => {
  const dispatch = useTypedDispatch()
  const { exampleSimple } = useTypedSelector(state => state)

  const setState = {
    setChangeExample: () => dispatch(setChangeExample())
  }

  return { exampleSimple, ...setState }
}
