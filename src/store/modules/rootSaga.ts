import { all, takeLatest } from 'redux-saga/effects';
import {
  authRegister,
  authLogin,
  authLogout,
  authLogingWithGoogle,
} from './auth/sagas';
import { authTypes } from './auth/types';

export default function* rootSaga() {
  yield all([
    takeLatest(authTypes.ASYNC_AUTH_REGISTER, authRegister),
    takeLatest(authTypes.ASYNC_AUTH_LOGIN, authLogin),
    takeLatest(authTypes.ASYNC_AUTH_LOGOUT, authLogout),
    takeLatest(authTypes.ASYNC_AUTH_LOGIN_WITH_GOOGLE, authLogingWithGoogle),
  ]);
}
