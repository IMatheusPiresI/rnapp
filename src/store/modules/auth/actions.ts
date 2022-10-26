import {authTypes} from './types';
type AuthActionPayload = {
  email: string;
  password: string;
};

const signUp = (payload: AuthActionPayload) => {
  return {
    type: authTypes.ASYNC_AUTH_REGISTER,
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
  attProgressLoading,
};

export {authActions};
