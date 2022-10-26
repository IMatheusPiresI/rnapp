import * as yup from 'yup';

const schemaSignIn = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter valid email')
    .lowercase('Only lowercase letters'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Minimum of 8 characters, One uppercase letter, One lowercase letter, One number:',
    ),
});

export {schemaSignIn};
