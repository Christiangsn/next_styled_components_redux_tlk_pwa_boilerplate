import { ErrorApi } from 'types/errorApi'

export const errorApi = (e: ErrorApi) => {
  const errorCode = e.response?.status

  const genericError =
    'Desculpe, ocorreu uma falha e não foi possível prosseguir com a sua solicitação. Por favor, verifique a sua conexão com a internet e caso o erro persista, tente novamente mais tarde.'
  const error500 =
    'Desculpe, serviços temporariamente indisponíveis. Por favor, tente de novo dentro de alguns instantes.'
  const error403 = 'Limite de consultas excedido.'
  const error400 = 'Este usuário não existe.'

  if (errorCode === undefined) return genericError
  if (errorCode >= 500) return error500
  if (errorCode === 403) return error403
  if (errorCode >= 400) return error400
  return genericError
}
