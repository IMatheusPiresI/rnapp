import auth from '@react-native-firebase/auth';

interface UserCreated {
  email: string;
  uid: string;
}

export const createAccountWithEmailPassword = async (
  email: string,
  password: string,
) => {
  let userCreated = {} as UserCreated;
  let errorOnCreated = '';

  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      userCreated = {
        email: user.email!,
        uid: user.uid,
      };
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          return (errorOnCreated =
            'The email address is already in use by another account.');

        case 'auth/invalid-email':
          return (errorOnCreated = 'This email address is invalid');

        default:
          return (errorOnCreated =
            'Error creating account, please try again later');
      }
    });

  return {userCreated, errorOnCreated};
};
