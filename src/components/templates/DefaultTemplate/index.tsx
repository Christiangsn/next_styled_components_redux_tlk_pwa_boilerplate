import * as S from './styles'
import { DefaultProps } from './types'

const Default = ({ children }: DefaultProps) => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Default</S.Header>
      <div>{children}</div>
    </S.Grid>
  )
}

export default Default
