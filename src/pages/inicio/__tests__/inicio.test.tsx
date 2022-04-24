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

  it('should alternate the text displayed in two h1 each time the button is clicked', () => {
    renderWithProviders(<Home />)

    const btn = screen.getByRole('button', { name: 'Altera Estado Global' })
    const titleSectionStateExample1 = screen.getByRole('heading', {
      name: 'Estado Exemplo do Redux: false'
    })
    const titleSectionPayload1 = screen.getByRole('heading', {
      name: 'Payload: Vazio'
    })

    expect(titleSectionStateExample1).toBeInTheDocument()
    expect(titleSectionPayload1).toBeInTheDocument()

    fireEvent.click(btn)

    const titleSectionStateExample2 = screen.getByRole('heading', {
      name: 'Estado Exemplo do Redux: true'
    })
    const titleSectionPayload2 = screen.getByRole('heading', {
      name: 'Payload: Texto de Exemplo'
    })

    expect(titleSectionStateExample2).toBeInTheDocument()
    expect(titleSectionPayload2).toBeInTheDocument()

    fireEvent.click(btn)

    const titleSectionStateExample3 = screen.getByRole('heading', {
      name: 'Estado Exemplo do Redux: false'
    })
    const titleSectionPayload3 = screen.getByRole('heading', {
      name: 'Payload: Vazio'
    })

    expect(titleSectionStateExample3).toBeInTheDocument()
    expect(titleSectionPayload3).toBeInTheDocument()
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

  it('should go to another page by clicking the button 3 and it should preload the next page with the onMouseEnter event', () => {
    renderWithProviders(<Home />)

    const btn = screen.getByRole('button', { name: 'Página Exemplo 3' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('pagina_exemplo3')
    expect(mockedPrefetch).toHaveBeenCalledWith('pagina_exemplo3')
  })
})
