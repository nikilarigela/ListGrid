import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const persistConfig = {
  key: 'ListGridv1',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

if (__DEV__) {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
