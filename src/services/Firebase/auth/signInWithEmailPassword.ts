import {showToast} from './../../../utils/toastMessage/index';
import auth from '@react-native-firebase/auth';
import {navigate} from '../../../routes/navigation';

interface UserSingIn {
  email: string;
  uid: string;
}

export const signInWithEmailPassoword = async (
  email: string,
  password: string,
) => {
  let userSignIn = {} as UserSingIn;
  let errorSignIn: string = '';
  await auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
          errorSignIn = 'Email is invalid';
          break;

        case 'auth/user-not-found':
          errorSignIn = 'User not found';
          break;

        case 'auth/wrong-password':
          errorSignIn = 'Password is incorrect';
          break;

        default:
          errorSignIn = 'Error login account, please try again later';
      }
      navigate('SignIn');
      showToast.error({text1: 'Error sign in account', text2: errorSignIn});
    });

  return {userSignIn, errorSignIn};
};
