import {put, call, CallEffect} from 'redux-saga/effects';
import {navigate} from '../../../routes/navigation/navigate';
import {createAccountWithEmailPassword} from './../../../services/Firebase/auth/createAccountWithEmailPassword';
import {authActions} from './actions';

type authRegisterAction = {
  type: string;
  payload: {
    email: string;
    password: string;
  };
};

export function* authRegister(action: authRegisterAction) {
  navigate('Loading');

  yield put(authActions.attProgressLoading(5));

  yield put(authActions.attProgressLoading(15));

  const email = action.payload.email;
  const password = action.payload.password;

  yield put(authActions.attProgressLoading(55));

  yield put(authActions.attProgressLoading(85));

  try {
    const userInfo: {
      userCreated: {email: string; uid: string};
      errorOnCreated: string;
    } = yield call(createAccountWithEmailPassword, email, password);

    
  } catch (err) {
    console.log(err, 'sou um erro');
  }

  yield put(authActions.attProgressLoading(100));
}

export function* authLogin() {
  console.log('cheguei aqui');
}

export function* authLogout() {}

// function newValueGet(value: number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, 2000);
//   });
// }

// export function* goLoading() {
//   console.log('entrei');
//   let myNumber: number = 0;
//   yield put(authActions.attProgressLoading(5));

//   myNumber = yield call(newValueGet, 25);

//   yield put(authActions.attProgressLoading(myNumber));

//   myNumber = yield call(newValueGet, 75);

//   yield put(authActions.attProgressLoading(myNumber));

//   myNumber = yield call(newValueGet, 100);

//   yield put(authActions.attProgressLoading(myNumber));
// }
