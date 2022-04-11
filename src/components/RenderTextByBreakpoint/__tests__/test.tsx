import { screen } from '@testing-library/react'
import T from 'theme'
import { renderWithProviders } from 'utils'
import RenderTextByBreakpoint from '..'

let size: number = T.windowSizes.sm
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: query === `(min-width: ${size}px)`
}))

describe('[Component] RenderTextByBreakpoint', () => {
  it('should render the heading', () => {
    const { container } = renderWithProviders(<RenderTextByBreakpoint />)
    expect(container).toBeInTheDocument()
  })

  it('should render the text específico para o breakpoint sm', () => {
    renderWithProviders(<RenderTextByBreakpoint />)

    const mobile = screen.queryByText('Breakpoint Mobile, "sm": 0px - 599px')
    expect(mobile).toBeInTheDocument()
  })

  it('should render the text específico para o breakpoint md', () => {
    size = T.windowSizes.md
    renderWithProviders(<RenderTextByBreakpoint />)

    const tablet = screen.queryByText('Breakpoint Tablet, "md": 600px - 1023px')
    expect(tablet).toBeInTheDocument()
  })

  it('should render the text específico para o breakpoint lg', () => {
    size = T.windowSizes.lg
    renderWithProviders(<RenderTextByBreakpoint />)

    const desktop = screen.queryByText('Breakpoint Desktop, "lg": 1024px - ∞px')
    expect(desktop).toBeInTheDocument()
  })
})
