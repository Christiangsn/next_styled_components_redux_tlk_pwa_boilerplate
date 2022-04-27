import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample5 from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__'

describe('[Page] PageExample4', () => {
  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample5 />)
    expect(container).toBeInTheDocument()
  })

  it('should render list of repositories when clicking "Search Repository" button if user in text field exists', () => {
    const useRefInput = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: { value: 'everton-dgn' } })

    renderWithProviders(<PageExample5 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })

    fireEvent.click(btn)

    expect(useRefInput).toBeCalledTimes(5)
  })

  it('should go to another page by clicking the button', () => {
    renderWithProviders(<PageExample5 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
