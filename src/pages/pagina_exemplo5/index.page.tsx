import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import { useExampleAsyncThunk } from 'store/exampleAsyncThunk/useExampleAsyncThunk'
import { Example } from 'templates'
import * as S from './styles'
import * as C from 'components'

export default function PageExample5() {
  const router = useRouter()
  const refInput = useRef<HTMLInputElement>(null)
  const { exampleAsyncThunk, setFetchRepositories } = useExampleAsyncThunk()

  const searchRepositories = useCallback(() => {
    const { value } = refInput.current!
    if (value) setFetchRepositories(value)
  }, [setFetchRepositories])

  if (exampleAsyncThunk?.isLoading) return <h1>Carregando...</h1>

  return (
    <S.Container as="section">
      <C.HeadPage title="Página Exemplo 5" />
      <C.TitleSection title="Buscar Repositórios do Github" />
      <C.TitleSection title="Com createAsyncThunk" />

      <S.WrapperRepositories>
        {exampleAsyncThunk?.repositories?.map(repository => (
          <span key={repository.name}>{repository.name}</span>
        ))}

        {exampleAsyncThunk?.error && <b>{exampleAsyncThunk.error}</b>}
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

PageExample5.Template = Example
