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
      'Min 8 letters, one: uppercase, lowercase, number',
    ),
});

export {schemaSignIn};
