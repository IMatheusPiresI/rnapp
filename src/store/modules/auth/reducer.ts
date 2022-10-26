import {number} from 'yup';
import {authTypes} from './types';

const initialValue = {
  loading: false,
  progressLoading: 0,
  user: {
    uid: '',
    email: '',
  },
};

const authReducer = (state = initialValue, action: any) => {
  switch (action.type) {
    case authTypes.AUTH_SETUSER:
      return (state = {
        ...state,
        user: {
          email: action.payload.email,
          uid: action.payload.uid,
        },
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
