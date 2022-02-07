import { useCallback } from 'react'
import { useWindowSize } from 'hooks'
import * as S from './styles'

const RenderTextByBreakpoint = () => {
  const { windowSize } = useWindowSize()

  const renderTextByBreakpoint = useCallback(() => {
    if (windowSize.md) return 'Breakpoint Desktop, "md": 1024px - ∞px'
    if (windowSize.sm) return 'Breakpoint Tablet, "sm": 600px - 1023px'
    if (windowSize.xs) return 'Breakpoint Mobile, "xs": 0px - 599px'
  }, [windowSize.md, windowSize.sm, windowSize.xs])

  return (
    <S.Wrapper>
      <h3>
        Redimensione a janela do navegador para visualizar o texto renderizado
        para cada breakpoint!
      </h3>

      <br />
      <h1>{renderTextByBreakpoint()}</h1>
    </S.Wrapper>
  )
}

export default RenderTextByBreakpoint
