import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useTypedSelector } from 'store/configStore'
import { setChangeExample } from 'store/slices/exampleSlice'
import * as S from './styles'
import * as C from 'components'
import { Logo } from 'components/Svg'

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { changeExample } = useTypedSelector(state => state)

  const handleChangeExample = () => dispatch(setChangeExample())

  return (
    <S.Container>
      <C.HeadPage title="Página Inicial" />

      <C.TitleSection title="Acessibilidade Web" />

      <br />

      <Logo width={50} height={50} />

      <br />

      <h1>{changeExample.toggle ? 'ativado' : 'desativado'}</h1>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Altera Estado Global"
          aria-label="Altera Estado Global"
          className="btn"
          onClick={handleChangeExample}
        />
      </S.BtnGroup>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Página Exemplo"
          aria-label="Página Exemplo"
          className="btn"
          onClick={() => router.push('pagina_exemplo')}
          onMouseEnter={() => router.prefetch('pagina_exemplo')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Página Exemplo 2"
          aria-label="Página Exemplo 2"
          className="btn"
          onClick={() => router.push('pagina_exemplo2')}
          onMouseEnter={() => router.prefetch('pagina_exemplo2')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}
