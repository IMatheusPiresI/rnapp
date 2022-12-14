import React, { useEffect } from 'react';
import * as S from './styles';
import { Formik } from 'formik';

import { WelcomeImage } from '../../components/WelcomeImage';
import { InputText } from '../../components/Forms/InputText';
import { ValuesSignIn } from '../../@types/components/Forms/sign';
import { schemaSignIn } from '../../schemas/signin';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/modules/auth/actions';
import { showToast } from '../../utils/toastMessage';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

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
      showToast.error({
        text1: 'Error submit form',
        text2: 'An unexpected error occurred, please try again.',
      });
    }
  };

  const handleGoSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleGoogleSignIn = () => {
    dispatch(authActions.signInWithGoogle());
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '801540359218-1oq1dqqgbng1e8sdodggp24gh49i14v7.apps.googleusercontent.com',
    });
  }, []);

  return (
    <S.KeyboardScrollView>
      <S.Container>
        <S.Header>
          <WelcomeImage title="Welcome to RNApp" />
        </S.Header>

        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmitForm}
          validationSchema={schemaSignIn}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <S.WrapperForm>
              <S.FormTitle>Sign In</S.FormTitle>
              <S.BoxInput>
                <InputText
                  value={values.email}
                  label={'Email'}
                  onChangeText={handleChange('email')}
                  nameIcon={'mail-outline'}
                  autoCapitalize="none"
                  errors={errors.email}
                />
              </S.BoxInput>
              <S.BoxInput>
                <InputText
                  value={values.password}
                  label={'Password'}
                  onChangeText={handleChange('password')}
                  nameIcon={'lock-outline'}
                  errors={errors.password}
                  secret
                />
              </S.BoxInput>
              <S.BoxBtnLogin>
                <Button title="Login" onPress={handleSubmit} />
              </S.BoxBtnLogin>
              <S.LineSpace />
              <S.BoxBtnLogin>
                <Button
                  title="Login with Google"
                  variant="google"
                  onPress={handleGoogleSignIn}
                />
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
    </S.KeyboardScrollView>
  );
};
