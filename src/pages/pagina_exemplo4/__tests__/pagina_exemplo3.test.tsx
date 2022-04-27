import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample4 from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__'

describe('[Page] PageExample4', () => {
  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample4 />)
    expect(container).toBeInTheDocument()
  })

  it('should render list of repositories when clicking "Buscar Repositório" button if user in text field exists', () => {
    const useRefInput = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: { value: 'everton-dgn' } })

    renderWithProviders(<PageExample4 />)

    const btn = screen.getByRole('button', { name: /buscar repositórios/i })

    fireEvent.click(btn)

    expect(useRefInput).toBeCalledTimes(1)
  })

  it('should go to another page by clicking the button', () => {
    renderWithProviders(<PageExample4 />)

    const btn = screen.getByRole('button', { name: 'Voltar' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
