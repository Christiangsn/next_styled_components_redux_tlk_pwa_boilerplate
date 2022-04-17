import Head from 'next/head'
import { Error } from 'templates/Error'
import * as S from './styles'

export default function CustomError() {
  return (
    <S.Container>
      <Head>
        <title>Página Não encontrada</title>
      </Head>

      <S.Title>Ops, página não encontrada!</S.Title>
    </S.Container>
  )
}

CustomError.Template = Error
