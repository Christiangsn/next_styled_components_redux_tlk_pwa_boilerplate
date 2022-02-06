import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { render, RenderResult } from '@testing-library/react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store/configStore'

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
