import { configureStore } from '@reduxjs/toolkit';
import { registerSlice } from './reducers/auth/register';
import { loginSlice } from './reducers/auth/login';
import { accountSlice } from './reducers/account';
import { dashboardSlice } from './reducers/dashboard';
import { sidebarSlice } from './reducers/sidebar';
import { combineReducers } from 'redux';

import {
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const transferPersistConfig = {
//   key: 'transfer',
//   storage,
//   blacklist: ['error', 'success', 'loading'],
// };
// const persistConfig = {
//   key: 'root',
//   blacklist: ['account', 'login', 'register'],
//   version: 1,
//   storage,
// };

const reducer = combineReducers({
  // transfer: persistReducer(transferPersistConfig, transferSlice.reducer),
  register: registerSlice.reducer,
  login: loginSlice.reducer,
  sidebar: sidebarSlice.reducer,
  account: accountSlice.reducer,
  dashboard: dashboardSlice.reducer,
});

// const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
