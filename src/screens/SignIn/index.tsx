import React from 'react';
import * as S from './styles';
import {Formik} from 'formik';

import {WelcomeImage} from '../../components/WelcomeImage';
import {InputText} from '../../components/Forms/InputText';
import {ValuesSignIn} from '../../@types/components/Forms/sign';
import {schemaSignIn} from '../../schemas/signin';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {authActions} from '../../store/modules/auth/actions';

const initialValue: ValuesSignIn = {
  email: '',
  password: '',
};

export const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmitForm = async (values: ValuesSignIn) => {
    try {
      dispatch(
        authActions.signIn({
          email: values.email,
          password: values.password,
        }),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <S.Container>
      <S.Header>
        <WelcomeImage title="Welcome to RNApp" />
      </S.Header>

      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmitForm}
        validationSchema={schemaSignIn}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <S.WrapperForm>
            <S.FormTitle>Sign In</S.FormTitle>
            <S.BoxInput>
              <InputText
                value={values['email']}
                label={'Email'}
                onChangeText={handleChange('email')}
                nameIcon={'mail-outline'}
                autoCapitalize="none"
                errors={errors['email']}
              />
            </S.BoxInput>
            <S.BoxInput>
              <InputText
                value={values['password']}
                label={'Password'}
                onChangeText={handleChange('password')}
                nameIcon={'lock-outline'}
                secureTextEntry={true}
                errors={errors['password']}
              />
            </S.BoxInput>
            <S.BoxBtnLogin>
              <Button title="Login" onPress={handleSubmit} />
            </S.BoxBtnLogin>
            <S.LineSpace />
            <S.BoxBtnLogin>
              <Button title="Login with Google" variant="google" />
            </S.BoxBtnLogin>
            <S.WrapperChangeSignUp>
              <S.WrapperText>
                <S.TextSingup>Don't have an account?.</S.TextSingup>
                <S.ButtonGoSignUp onPress={handleGoSignUp}>
                  <S.LinkSignUp>Create account</S.LinkSignUp>
                </S.ButtonGoSignUp>
              </S.WrapperText>
            </S.WrapperChangeSignUp>
          </S.WrapperForm>
        )}
      </Formik>
    </S.Container>
  );
};
