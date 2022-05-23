import Head from 'next/head'
import { Error } from 'templates/Error'
import * as S from './styles'

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

CustomError.Template = Error
