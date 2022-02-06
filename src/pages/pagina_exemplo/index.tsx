import { useRouter } from 'next/router'
import { LayoutExample } from 'layouts'
import * as S from './styles'
import * as C from 'components'

export default function PageExample() {
  const router = useRouter()

  return (
    <S.Container as="section">
      <C.HeadPage title="Página Exemplo" />

      <C.TitleSection title="Página Exemplo" />

      <br />

      <C.TitleAnimation />

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

PageExample.Layout = LayoutExample
