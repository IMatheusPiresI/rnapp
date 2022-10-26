import {authTypes} from './types';
type AuthActionPayload = {
  email: string;
  password: string;
};

type User = {
  email: string;
  uid: string;
};

const signIn = (payload: AuthActionPayload) => {
  return {
    type: authTypes.ASYNC_AUTH_LOGIN,
    payload,
  };
};

const signUp = (payload: AuthActionPayload) => {
  return {
    type: authTypes.ASYNC_AUTH_REGISTER,
    payload,
  };
};

const setUser = (payload: User | null) => {
  return {
    type: authTypes.AUTH_SETUSER,
    payload,
  };
};

const attProgressLoading = (payload: number) => {
  return {
    type: authTypes.AUTH_ATT_PROGRESS_LOADING,
    payload,
  };
};

const authActions = {
  signUp,
  signIn,
  setUser,
  attProgressLoading,
};

export {authActions};
