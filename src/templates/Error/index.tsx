import * as S from './styles'
import { ErrorProps } from './types'

export const Error = ({ children }: ErrorProps) => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Error</S.Header>
      <div>{children}</div>
    </S.Grid>
  )
}
