import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample2 from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__'

describe('[Page] PageExample2', () => {
  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample2 />)
    expect(container).toBeInTheDocument()
  })

  it('should go to another page by clicking the button', () => {
    renderWithProviders(<PageExample2 />)

    const btn = screen.getByRole('button', { name: 'Voltar' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
