import auth from '@react-native-firebase/auth';

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
    .then(({user}) => {
      console.log(user);

      userSignIn = {
        email: user.email!,
        uid: user.uid,
      };
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
          return (errorSignIn = 'Email is invalid');

        case 'auth/user-not-found':
          return (errorSignIn = 'User not found');

        case 'auth/wrong-password':
          return (errorSignIn = 'Password is incorrect');

        default:
          return (errorSignIn = 'Error login account, please try again later');
      }
    });

  return {userSignIn, errorSignIn};
};
