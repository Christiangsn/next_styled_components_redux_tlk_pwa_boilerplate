import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import { useGetRepositoriesWithRedux } from 'data'
import { useIsLoading } from 'infra/store/isLoading/useAdapter'
import * as S from './styles'
import * as C from 'ui/components'

export default function PageExample3() {
  const router = useRouter()
  const refInput = useRef<HTMLInputElement>(null)
  const { getFetchRepositories, exampleAsyncSlice } =
    useGetRepositoriesWithRedux()
  const { isLoading } = useIsLoading()

  const searchRepositories = useCallback(async () => {
    const user = refInput.current?.value
    if (user) await getFetchRepositories(user)
  }, [getFetchRepositories])

  if (isLoading) return <h1>loading...</h1>

  return (
    <S.Container role="main">
      <C.HeadPage title="Page Example 4" />
      <C.TitleSection title="Search Github Repositories" />
      <C.TitleSection title="With Hook in Services saving data in the Store" />

      <S.WrapperRepositories>
        {exampleAsyncSlice?.data?.map(repository => (
          <span key={repository.name}>{repository.name}</span>
        ))}

        {!!exampleAsyncSlice?.error && <b>{exampleAsyncSlice.error}</b>}
      </S.WrapperRepositories>

      <br />

      <C.Input
        ref={refInput}
        name="searchRepositoriesInTheGithub"
        placeholder="User name"
        aria-describedby="User name"
      />
      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Search Repositories"
          className="btn"
          aria-label="Search Repositories"
          onClick={searchRepositories}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Return"
          className="btn"
          aria-label="Return"
          onClick={() => router.push('/')}
          onMouseEnter={() => router.prefetch('/')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}

PageExample3.Template = C.ExampleTemplate
