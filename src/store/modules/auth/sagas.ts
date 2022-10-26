import {put, call} from 'redux-saga/effects';
import {navigate} from '../../../routes/navigation/navigate';
import {signInWithEmailPassoword} from '../../../services/Firebase/auth/signInWithEmailPassword';
import {createAccountWithEmailPassword} from './../../../services/Firebase/auth/createAccountWithEmailPassword';
import {authActions} from './actions';

type authAction = {
  type: string;
  payload: {
    email: string;
    password: string;
  };
};

export function* authRegister(action: authAction) {
  navigate('Loading');

  yield put(authActions.attProgressLoading(5));

  yield call(timeOutTwoSecond);

  yield put(authActions.attProgressLoading(25));

  yield call(timeOutTwoSecond);

  const email = action.payload.email;
  const password = action.payload.password;

  yield put(authActions.attProgressLoading(55));

  yield call(timeOutTwoSecond);

  yield put(authActions.attProgressLoading(85));

  try {
    yield put(authActions.attProgressLoading(97));

    yield call(createAccountWithEmailPassword, email, password);

    yield put(authActions.attProgressLoading(100));
  } catch (err) {
    console.log(err, 'sou um erro');
  }
}

export function* authLogin(action: authAction) {
  navigate('Loading');

  yield put(authActions.attProgressLoading(5));

  const userInfo = {
    email: action.payload.email,
    password: action.payload.password,
  };

  yield call(timeOutTwoSecond);

  yield put(authActions.attProgressLoading(63));

  yield call(timeOutTwoSecond);

  yield put(authActions.attProgressLoading(97));

  try {
    yield call(signInWithEmailPassoword, userInfo.email, userInfo.password);
  } catch (err) {
    console.log(err);
  }

  yield put(authActions.attProgressLoading(100));
}

export function* authLogout() {}

function timeOutTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12);
    }, 2000);
  });
}
