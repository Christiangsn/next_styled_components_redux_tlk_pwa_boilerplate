import dynamic from 'next/dynamic'

export const DefaultTemplate = dynamic(() => import('./DefaultTemplate'), {
  loading: () => <h1>Carregando Template...</h1>
})

export const ErrorTemplate = dynamic(() => import('./ErrorTemplate'), {
  loading: () => <h1>Carregando Template...</h1>
})

export const ExampleTemplate = dynamic(() => import('./ExampleTemplate'), {
  loading: () => <h1>Carregando Template...</h1>
})
