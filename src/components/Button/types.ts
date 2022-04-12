import { ButtonHTMLAttributes, ReactNode } from 'react'

export type SizeProps = 'small' | 'medium' | 'large' | 'xLarge'

export type ColorProps = 'gray' | 'blue' | 'red'

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  text?: string
  size: SizeProps
  color: ColorProps
  fullWidth?: boolean
}