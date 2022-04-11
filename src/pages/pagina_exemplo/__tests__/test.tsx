import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils'
import PageExample from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__/nextRouter'

describe('[Page] PageExample', () => {
  it('should an Home page', () => {
    const { container } = renderWithTheme(<PageExample />)
    expect(container).toBeInTheDocument()
  })

  it('should go to another page by clicking the button', () => {
    renderWithTheme(<PageExample />)

    const btn = screen.getByRole('button', { name: 'Voltar' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
