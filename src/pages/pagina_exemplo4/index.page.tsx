import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import { useFetchRepositories } from 'services'
import { useExampleAsyncSlice } from 'store/exampleAsyncSlice/useExampleAsyncSlice'
import { Example } from 'templates'
import * as S from './styles'
import * as C from 'components'

export default function PageExample4() {
  const router = useRouter()
  const refInput = useRef<HTMLInputElement>(null)
  const { exampleAsyncSlice } = useExampleAsyncSlice()
  const { getFetchRepositories } = useFetchRepositories()

  const searchRepositories = useCallback(async () => {
    const { value } = refInput.current!
    if (value) await getFetchRepositories(value)
  }, [getFetchRepositories])

  if (exampleAsyncSlice?.isLoading) return <h1>Carregando...</h1>

  return (
    <S.Container as="section">
      <C.HeadPage title="Página Exemplo 4" />
      <C.TitleSection title="Buscar Repositórios do Github" />
      <C.TitleSection title="Com Hook em Services" />

      <S.WrapperRepositories>
        {exampleAsyncSlice?.repositories?.map(repository => (
          <span key={repository.name}>{repository.name}</span>
        ))}

        {exampleAsyncSlice?.error && <b>{exampleAsyncSlice.error}</b>}
      </S.WrapperRepositories>

      <br />

      <C.Input
        ref={refInput}
        name="searchRepositoriesInTheGithub"
        placeholder="Nome de usuário"
        aria-describedby="Nome de usuário"
      />
      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Buscar Repositórios"
          className="btn"
          aria-label="Buscar Repositórios"
          onClick={searchRepositories}
        />

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
      </S.BtnGroup>
    </S.Container>
  )
}

PageExample4.Template = Example
