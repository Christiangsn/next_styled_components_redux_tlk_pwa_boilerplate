import { useRouter } from 'next/router'
import { useExampleSimple } from 'store/exampleSimple/useExampleSimple'
import { useExampleWithPayload } from 'store/exampleWithPayload/useExampleWithPayload'
import * as S from './styles'
import * as C from 'components'

export default function Home() {
  const { exampleSimple, setChangeExample } = useExampleSimple()
  const { exampleWithPayload, setAddText, setRemoveText } =
    useExampleWithPayload()
  const router = useRouter()

  const handleChange = () => {
    setChangeExample()

    exampleWithPayload.text
      ? setRemoveText()
      : setAddText({ exemploText: 'Texto de Exemplo' })
  }

  return (
    <S.Container>
      <C.HeadPage title="Página Inicial" />

      <C.TitleSection title="Acessibilidade Web" />

      <br />

      <C.Logo width={50} height={50} />

      <br />

      <h1>
        Estado Exemplo do Redux:
        {exampleSimple.toggle ? ' true' : ' false'}
      </h1>

      <br />

      <h1>Payload: {exampleWithPayload.text || 'Vazio'}</h1>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Altera Estado Global"
          aria-label="Altera Estado Global"
          className="btn"
          onClick={handleChange}
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

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Página Exemplo 3"
          aria-label="Página Exemplo 3"
          className="btn"
          onClick={() => router.push('pagina_exemplo3')}
          onMouseEnter={() => router.prefetch('pagina_exemplo3')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}
