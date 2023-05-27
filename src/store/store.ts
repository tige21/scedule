import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { type } from 'os'
import storage from 'redux-persist/lib/storage'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../api/api'
import { userSlice } from './users/user.slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'
import { authSlice } from './auth/authSlice'



const rootReducer = combineReducers({
	auth: authSlice.reducer,
	[api.reducerPath]: api.reducer
})

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
		  immutableCheck: false,
          serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
        }).concat(
          api.middleware
        ),
})
setupListeners(store.dispatch)


export const persistor = persistStore(store)

export default store;
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

