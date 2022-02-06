import { renderHook, act } from '@testing-library/react-hooks'
import { useWindowSize } from 'hooks'
import T from 'theme'

let size: number = T.windowSizes.xs

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: query === `(min-width: ${size}px)`,
  media: '',
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  dispatchEvent: jest.fn()
}))

describe('[Hooks] useWindowSize', () => {
  it('should return xs to screen size up until T.windowSizes.xs', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.xs).toBeTruthy()
  })

  it('should return sm to screen size up until T.windowSizes.sm', () => {
    size = T.windowSizes.sm
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.sm).toBeTruthy()
  })

  it('should return md to screen size up until T.windowSizes.md', () => {
    size = T.windowSizes.md
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.md).toBeTruthy()
  })
})
