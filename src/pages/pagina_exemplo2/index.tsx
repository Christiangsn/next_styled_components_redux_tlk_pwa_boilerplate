import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useWindowSize } from 'hooks'
import { LayoutExample } from 'layouts'
import * as S from './styles'
import * as C from 'components'

export default function PageExample2() {
  const router = useRouter()
  const { windowSize } = useWindowSize()

  const renderTextByBreakpoint = useCallback(() => {
    if (windowSize.md) return 'Breakpoint Desktop, "md": 1024px - ∞px'
    if (windowSize.sm) return 'Breakpoint Tablet, "sm": 600px - 1023px'
    if (windowSize.xs) return 'Breakpoint Mobile, "xs": 0px - 599px'
  }, [windowSize.md, windowSize.sm, windowSize.xs])

  return (
    <S.Container as="section">
      <C.HeadPage title="Página Exemplo 2" />

      <C.TitleSection title="Página Exemplo 2" />

      <br />

      <h3>
        Redimencione a janela do navegador para visualizar o texto renderizado
        para cada breakpoint!
      </h3>

      <br />

      <h1>{renderTextByBreakpoint()}</h1>

      <S.Column>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Voltar"
          className="btn"
          aria-label="Voltar"
          onClick={() => router.push('/')}
          onMouseEnter={() => router.prefetch('/')}
        />
      </S.Column>
    </S.Container>
  )
}

PageExample2.Layout = LayoutExample
