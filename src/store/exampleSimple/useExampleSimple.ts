import { useDispatch } from 'react-redux'
import { useTypedSelector } from 'store/configStore'
import { setChangeExample } from '.'

export const useExampleSimple = () => {
  const dispatch = useDispatch()
  const { exampleSimple } = useTypedSelector(state => state)

  const setState = {
    setChangeExample: () => dispatch(setChangeExample())
  }

  return { exampleSimple, ...setState }
}
