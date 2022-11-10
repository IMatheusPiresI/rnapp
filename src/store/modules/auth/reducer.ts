import { authTypes } from './types';

type Action = {
  type: string;
  payload: Partial<InitialValueProps>;
};

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

function authReducer(state = initialValue, action: Action) {
  switch (action.type) {
    case authTypes.AUTH_SETUSER:
      return (state = {
        progressLoading: state.progressLoading,
        loading: state.loading,
        user: action.payload.user!,
      });

    case authTypes.AUTH_APPLY_LOADING:
      return (state = {
        user: state.user,
        progressLoading: state.progressLoading,
        loading: true,
      });

    case authTypes.AUTH_RESET_LOADING:
      return (state = {
        user: state.user,
        progressLoading: state.progressLoading,
        loading: false,
      });

    case authTypes.AUTH_ATT_PROGRESS_LOADING:
      return (state = {
        loading: false,
        progressLoading: action.payload.progressLoading!,
        user: state.user,
      });

    default:
      return state;
  }
}

export default authReducer;
