import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import { persistedReducer } from './persistConfig'
import { RootState } from './rootState'

export const isDevelopment = process.env.NODE_ENV === 'development'
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devTools: isDevelopment
})

export const persistor = persistStore(store)
