import { screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import CustomError from '../index.page'

describe('[Page] CustomError', () => {
  it('should an error page', () => {
    const { container } = renderWithProviders(<CustomError />)
    expect(container).toBeInTheDocument()
  })

  it('should the following section title: Ops, página não encontrada!', () => {
    renderWithProviders(<CustomError />)

    const titleSection = screen.getByRole('heading', {
      name: 'Ops, página não encontrada!'
    })
    expect(titleSection).toBeInTheDocument()
  })
})
