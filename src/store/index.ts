import {createStore, applyMiddleware, Store, AnyAction} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './modules/rootReducer';

import rootSaga from './modules/rootSaga';

export type ApplicationState = {
  authReducer: {
    loading: boolean;
    progressLoading: number;
    user: {
      email: string;
      uid: string;
    } | null;
  };
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export {store};
