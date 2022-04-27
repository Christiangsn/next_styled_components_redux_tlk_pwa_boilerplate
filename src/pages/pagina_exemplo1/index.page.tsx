import { useRouter } from 'next/router'
import { Example } from 'templates'
import * as S from './styles'
import * as C from 'components'

export default function PageExample1() {
  const router = useRouter()

  return (
    <S.Container as="section">
      <C.HeadPage title="Página Exemplo 1" />

      <C.TitleSection title="Página Exemplo 1" />

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

PageExample1.Template = Example
