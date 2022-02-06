import { useEffect, useState } from 'react'
import T from 'theme'

type useWindowSizeType = {
  xs: boolean
  sm: boolean
  md: boolean
}

export const getWindowSize = () => {
  const minWidth = (size: number) =>
    window.matchMedia(`(min-width: ${size}px)`).matches
  return {
    xs: minWidth(T.windowSizes.xs),
    sm: minWidth(T.windowSizes.sm),
    md: minWidth(T.windowSizes.md)
  }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<useWindowSizeType>(
    getWindowSize()
  )

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', changeWindowSize)
    return () => window.removeEventListener('resize', changeWindowSize)
  }, [])

  return { windowSize }
}
