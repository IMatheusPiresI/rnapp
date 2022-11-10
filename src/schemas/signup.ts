import * as yup from 'yup';

const schemaSignUp = yup.object({
  fullName: yup.string().required('Email is required'),
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
  confirmPassword: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Min 8 letters, one: uppercase, lowercase, number',
    )
    .oneOf([yup.ref('password')], 'Your passwords do not match'),
});

export { schemaSignUp };
