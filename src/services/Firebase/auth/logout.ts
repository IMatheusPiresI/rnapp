import auth from '@react-native-firebase/auth';

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (err) {
    console.log(err);
  }
};
