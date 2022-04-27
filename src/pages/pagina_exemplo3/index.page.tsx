import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import { useSearchRepositoriesInTheGithub } from 'services'
import { Example } from 'templates'
import * as S from './styles'
import * as C from 'components'

export default function PageExample3() {
  const router = useRouter()
  const refInput = useRef<HTMLInputElement>(null)
  const { getRepositoriesGithub, repositoriesGithub } =
    useSearchRepositoriesInTheGithub()

  const searchRepositories = useCallback(async () => {
    const { value } = refInput.current!
    if (value) await getRepositoriesGithub(value)
  }, [getRepositoriesGithub])

  if (repositoriesGithub?.isLoading) return <h1>Carregando...</h1>

  return (
    <S.Container as="section">
      <C.HeadPage title="Página Exemplo 3" />
      <C.TitleSection title="Buscar Repositórios do Github" />
      <C.TitleSection title="Com Hook em Services" />

      <S.WrapperRepositories>
        {repositoriesGithub?.repositories?.map(repository => (
          <span key={repository.name}>{repository.name}</span>
        ))}

        {repositoriesGithub?.error && <b>{repositoriesGithub.error}</b>}
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

PageExample3.Template = Example
