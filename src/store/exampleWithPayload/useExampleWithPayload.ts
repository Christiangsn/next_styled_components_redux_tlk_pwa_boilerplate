import { useDispatch } from 'react-redux'
import { useTypedSelector } from 'store/configStore'
import { setRemoveText, setAddText } from '.'
import { ExemploTextProp } from './types'

export const useExampleWithPayload = () => {
  const dispatch = useDispatch()
  const { exampleWithPayload } = useTypedSelector(state => state)

  const setState = {
    setRemoveText: () => dispatch(setRemoveText()),
    setAddText: (exemploText: ExemploTextProp) => {
      dispatch(setAddText(exemploText))
    }
  }

  return { exampleWithPayload, ...setState }
}
