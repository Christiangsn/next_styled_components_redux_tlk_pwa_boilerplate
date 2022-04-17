import * as S from './styles'
import { DefaultProps } from './types'

export const Default = ({ children }: DefaultProps) => {
  return (
    <S.Grid>
      <h1>Layout Default</h1>
      <div>{children}</div>
    </S.Grid>
  )
}
