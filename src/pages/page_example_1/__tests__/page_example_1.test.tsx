import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'tests/providers'
import PageExample1 from '../index.page'
import { mockedPush, mockedPrefetch } from 'tests/mocks'

describe('[Page] PageExample1', () => {
  it('should go to another page by clicking the button', async () => {
    const user = userEvent.setup({ delay: null })

    renderWithProviders(<PageExample1 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    await user.click(btn)
    await user.hover(btn)

    expect(mockedPush).toHaveBeenCalledTimes(1)
    expect(mockedPrefetch).toHaveBeenCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
