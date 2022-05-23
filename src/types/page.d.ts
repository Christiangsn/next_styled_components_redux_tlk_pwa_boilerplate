import { ComponentType, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type Page<P = object> = NextPage<P> & {
  getTemplate?: (page: ReactElement) => ReactNode
  Template?: ComponentType
}
