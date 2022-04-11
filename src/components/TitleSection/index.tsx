import { TitleProps } from './types'
import * as S from 'components/TitleSection/styles'

const TitleSection = ({ title }: TitleProps) => (
  <S.TitleSection>{title}</S.TitleSection>
)

export default TitleSection
