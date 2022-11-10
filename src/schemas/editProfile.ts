import * as yup from 'yup';

const schemaEditProfile = yup.object({
  name: yup.string().required('Name is required').trim('Field cannot be empty'),
});

export { schemaEditProfile };
