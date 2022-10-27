import auth from '@react-native-firebase/auth';
import {authActions} from '../../../store/modules/auth/actions';
import {navigate} from '../../../routes/navigation';
import {showToast} from '../../../utils/toastMessage';

export const createAccountWithEmailPassword = async (
  email: string,
  password: string,
) => {
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      authActions.setUser({
        email: user.email!,
        uid: user.uid,
      });
      setTimeout(() => {
        showToast.success({
          text1: 'Sucess create account',
          text2: 'Welcome to RNApp, enjoy the experience',
        });
      }, 2000);
    })
    .catch(error => {
      let errorOnCreated: string;

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorOnCreated =
            'The email address is already in use by another account.';
          break;

        case 'auth/invalid-email':
          errorOnCreated = 'This email address is invalid';
          break;

        default:
          errorOnCreated = 'Error creating account, please try again later';
      }
      navigate('SignUp');

      showToast.error({
        text1: 'Erro create account',
        text2: errorOnCreated,
      });
    });
};
