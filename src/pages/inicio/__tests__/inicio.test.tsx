import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import Home from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__'

describe('[Page] Home', () => {
  beforeEach(() => {
    jest.resetModules()
    mockedPush.mockClear()
    mockedPrefetch.mockClear()
  })

  it('should an Home page', () => {
    const { container } = renderWithProviders(<Home />)
    expect(container).toBeInTheDocument()
  })

  it('should go to another page by clicking the button 1 and it should preload the next page with the onMouseEnter event', () => {
    renderWithProviders(<Home />)

    const btn = screen.getByRole('button', { name: 'Página Exemplo' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('pagina_exemplo')
    expect(mockedPrefetch).toHaveBeenCalledWith('pagina_exemplo')
  })

  it('should go to another page by clicking the button 2 and it should preload the next page with the onMouseEnter event', () => {
    renderWithProviders(<Home />)

    const btn = screen.getByRole('button', { name: 'Página Exemplo 2' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('pagina_exemplo2')
    expect(mockedPrefetch).toHaveBeenCalledWith('pagina_exemplo2')
  })

  it('should change the text displayed when clicking the button', () => {
    renderWithProviders(<Home />)

    const btn = screen.getByRole('button', { name: 'Altera Sidebar' })
    const titleSectionBefore = screen.getByRole('heading', {
      name: 'Sidebar desativada'
    })

    expect(titleSectionBefore).toBeInTheDocument()

    fireEvent.click(btn)

    const titleSectionAfter = screen.getByRole('heading', {
      name: 'Sidebar ativada'
    })

    expect(titleSectionAfter).toBeInTheDocument()
  })
})
