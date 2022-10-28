import {authTypes} from './types';
type AuthActionPayload = {
  email: string;
  password: string;
};

type User = {
  email: string;
  uid: string;
};

type googleSignInActionPayload = {
  googleTokenCredential: string;
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

const signInWithGoogle = () => {
  return {
    type: authTypes.ASYNC_AUTH_LOGIN_WITH_GOOGLE,
  };
};

const setUser = (payload: User | null) => {
  return {
    type: authTypes.AUTH_SETUSER,
    payload: {
      user: payload,
    },
  };
};

const attProgressLoading = (payload: number) => {
  return {
    type: authTypes.AUTH_ATT_PROGRESS_LOADING,
    payload: {
      progressLoading: payload,
    },
  };
};

const authActions = {
  signUp,
  signIn,
  signInWithGoogle,
  setUser,
  attProgressLoading,
};

export {authActions};
