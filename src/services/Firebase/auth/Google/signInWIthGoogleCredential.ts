import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { navigate } from '../../../../routes/navigation';
import { showToast } from '../../../../utils/toastMessage';

export const signInWIthGoogleCredential = async (
  credential: FirebaseAuthTypes.AuthCredential,
) => {
  try {
    await auth().signInWithCredential(credential);
  } catch (err) {
    navigate('SignIn');
    showToast.error({
      text1: 'Erro Google Sing in',
      text2: 'Failled to sign in with Google',
    });
  }
};
