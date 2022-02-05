import { useRouter } from 'next/router'
import * as S from './styles'
import * as C from 'components'

export default function Home() {
  const router = useRouter()

  return (
    <S.Container>
      <C.HeadPage title="Página Inicial" />

      <C.TitleSection title="Acessibilidade Web" />

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Página Exemplo"
          aria-label="Página Exemplo"
          className="btn"
          onClick={() => router?.push('pagina_exemplo')}
          onMouseEnter={() => router?.prefetch('pagina_exemplo')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}
