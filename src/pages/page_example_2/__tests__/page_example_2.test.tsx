import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'tests/providers'
import PageExample2 from '../index.page'
import { mockedPush, mockedPrefetch } from 'tests/mocks'

describe('[Page] PageExample2', () => {
  it('should go to another page by clicking the button', () => {
    renderWithProviders(<PageExample2 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    fireEvent.click(btn)
    userEvent.hover(btn)

    expect(mockedPush).toHaveBeenCalledTimes(1)
    expect(mockedPrefetch).toHaveBeenCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
