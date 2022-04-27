import { setChangeExample } from '.'
import { useTypedDispatch, useTypedSelector } from '../useHelpers'

export const useExampleSimple = () => {
  const dispatch = useTypedDispatch()
  const exampleSimple = useTypedSelector(state => state.exampleSimple.toggle)

  const setState = {
    setChangeExample: () => dispatch(setChangeExample())
  }

  return { exampleSimple, ...setState }
}
