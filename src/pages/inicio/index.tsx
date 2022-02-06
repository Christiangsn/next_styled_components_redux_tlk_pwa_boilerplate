import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useTypedSelector } from 'store/configStore'
import { setChangeSideBar } from 'store/slices/changeSideBar'
import * as S from './styles'
import * as C from 'components'
import { Logo } from 'components/Svg'

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { changeSideBar } = useTypedSelector(state => state)

  return (
    <S.Container>
      <C.HeadPage title="Página Inicial" />

      <C.TitleSection title="Acessibilidade Web" />

      <br />

      <Logo width={50} height={50} />

      <br />

      <h1>
        Sidebar
        <span>{changeSideBar.toggleBtnNav ? ' ativada' : ' desativada'}</span>
      </h1>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Altera Sidebar"
          aria-label="Altera Sidebar"
          className="btn"
          onClick={() => dispatch(setChangeSideBar())}
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
