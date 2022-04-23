import { useTypedDispatch, useTypedSelector } from 'store/useHelpers'
import { setRemoveText, setAddText } from '.'
import { ExemploTextProp } from './types'

export const useExampleWithPayload = () => {
  const dispatch = useTypedDispatch()
  const { exampleWithPayload } = useTypedSelector(state => state)

  const setState = {
    setRemoveText: () => dispatch(setRemoveText()),
    setAddText: (exemploText: ExemploTextProp) => {
      dispatch(setAddText(exemploText))
    }
  }

  return { exampleWithPayload, ...setState }
}
