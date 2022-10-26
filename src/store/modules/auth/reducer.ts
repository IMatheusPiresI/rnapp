import {number} from 'yup';
import {authTypes} from './types';

type InitialValueProps = {
  loading: boolean;
  progressLoading: number;
  user: {
    uid: string;
    email: string;
  } | null;
};

const initialValue: InitialValueProps = {
  loading: false,
  progressLoading: 0,
  user: null,
};

const authReducer = (state = initialValue, action: any) => {
  switch (action.type) {
    case authTypes.AUTH_SETUSER:
      return (state = {
        ...state,
        user: action.payload,
      });

    case authTypes.AUTH_APPLY_LOADING:
      return (state = {
        ...state,
        loading: true,
      });

    case authTypes.AUTH_RESET_LOADING:
      return (state = {
        ...state,
        loading: false,
      });

    case authTypes.AUTH_ATT_PROGRESS_LOADING:
      return (state = {
        ...state,
        progressLoading: action.payload,
      });

    default:
      return state;
  }
};

export default authReducer;
