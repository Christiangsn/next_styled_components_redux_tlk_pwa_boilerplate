import { ToggleType } from './exampleSimple/types'
import { TextType } from './exampleWithPayload/types'

export type RootState = {
  exampleSimple: ToggleType
  exampleWithPayload: TextType
}
