import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils'
import CustomError from '../index.page'

describe('[Page] CustomError', () => {
  it('should an error page', () => {
    const { container } = renderWithTheme(<CustomError />)
    expect(container).toBeInTheDocument()
  })

  it('should the following section title: Ops, página não encontrada!', () => {
    renderWithTheme(<CustomError />)

    const titleSection = screen.getByRole('heading', {
      name: 'Ops, página não encontrada!'
    })
    expect(titleSection).toBeInTheDocument()
  })
})
