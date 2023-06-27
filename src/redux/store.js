// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';

// import { filtersReducer } from './filtersSlice';


// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer, 
//     filter: filtersReducer,
//     // auth: authReducer,
//   },  
// });

import {  configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filtersSlice';
import { authReducer } from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// ----------------!Обов'язково combineReducers!---------//
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filtersReducer,
//   auth: persistedAuthReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: persistedAuthReducer,
},

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);