import { forwardRef } from 'react'
import { BtnProps } from './types'
import * as S from 'components/Button/styles'

const Button = forwardRef<HTMLButtonElement, BtnProps>(
  ({ icon, text, ...props }, ref) => (
    <S.Container {...props} ref={ref}>
      {icon}
      {!!text && <span>{text}</span>}
    </S.Container>
  )
)

export default Button
