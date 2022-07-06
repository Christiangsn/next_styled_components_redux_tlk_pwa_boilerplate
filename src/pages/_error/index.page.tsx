import Head from 'next/head'
import * as S from './styles'
import * as C from 'ui/components'

export default function CustomError() {
  return (
    <S.Container role="main">
      <Head>
        <title>Page not found</title>
      </Head>

      <S.Title>Page not found!</S.Title>
    </S.Container>
  )
}

CustomError.Template = C.ErrorTemplate
