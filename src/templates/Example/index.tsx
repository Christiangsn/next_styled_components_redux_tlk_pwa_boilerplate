import * as S from './styles'
import { ExampleProps } from './types'

export const Example = ({ children }: ExampleProps) => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Example</S.Header>
      <div>{children}</div>
    </S.Grid>
  )
}
