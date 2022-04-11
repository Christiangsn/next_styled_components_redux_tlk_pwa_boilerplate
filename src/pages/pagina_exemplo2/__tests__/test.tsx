import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils'
import PageExample2 from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__/nextRouter'

describe('[Page] PageExample2', () => {
  it('should an Home page', () => {
    const { container } = renderWithTheme(<PageExample2 />)
    expect(container).toBeInTheDocument()
  })

  it('should go to another page by clicking the button', () => {
    renderWithTheme(<PageExample2 />)

    const btn = screen.getByRole('button', { name: 'Voltar' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
