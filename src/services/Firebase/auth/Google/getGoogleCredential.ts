import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';
import {showToast} from '../../../../utils/toastMessage';

export const getGoogleCredential = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return googleCredential;
  } catch (error: ReturnType<typeof statusCodes>) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return null;
    } else {
      showToast.error({
        text1: 'Google Error',
        text2: 'There was an error try again.',
      });
    }
  }
};
