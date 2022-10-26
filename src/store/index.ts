import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './modules/rootReducer';

import rootSaga from './modules/rootSaga';

export type ApplicationState = {
  authReducer: {
    user: {
      email: string;
      uid: string;
    };
  };
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export {store};