import { windowSizes } from './windowSizes'

const device = (value: number) => `@media screen and (min-width: ${value}px)`

export const breakpoints = {
  mobile: device(windowSizes.xs),
  tablet: device(windowSizes.sm),
  desktop: device(windowSizes.md),
  custom: (value: number) => device(value)
}
