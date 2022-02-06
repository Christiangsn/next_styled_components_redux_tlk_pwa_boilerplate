const device = (value: number) => `@media screen and (min-width: ${value}px)`

export const breakpoints = {
  tablet: device(600),
  desktop: device(1024),
  custom: (value: number) => device(value)
}
