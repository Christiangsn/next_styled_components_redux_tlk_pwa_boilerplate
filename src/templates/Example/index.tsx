import * as S from './styles'
import { ExampleProps } from './types'

export const Example = ({ children }: ExampleProps) => {
  return (
    <S.Grid>
      <h1>Layout Example</h1>
      <div>{children}</div>
    </S.Grid>
  )
}
