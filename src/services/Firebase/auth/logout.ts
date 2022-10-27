import {showToast} from './../../../utils/toastMessage/index';
import auth from '@react-native-firebase/auth';

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (err) {
    showToast.error({
      text1: 'Error sing out account',
      text2: 'An unexpected error occurred, please try again.',
    });
  }
};
