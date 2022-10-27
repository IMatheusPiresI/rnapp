import React from 'react';
import * as S from './styles';
import {Formik} from 'formik';

import {WelcomeImage} from '../../components/WelcomeImage';
import {InputText} from '../../components/Forms/InputText';
import {Button} from '../../components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {schemaSignUp} from '../../schemas/signup';
import {ValuesSignUp} from '../../@types/components/Forms/signup';
import {createAccountWithEmailPassword} from '../../services/Firebase/auth/createAccountWithEmailPassword';

import {useDispatch} from 'react-redux';
import {authActions} from '../../store/modules/auth/actions';
import {showToast} from '../../utils/toastMessage';

const initialValue: ValuesSignUp = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUp: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSignUp = async (values: ValuesSignUp) => {
    try {
      dispatch(
        authActions.signUp({
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

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Header>
        <WelcomeImage title="Welcome to RNApp" />
        <S.GoBackButton onPress={handleGoBack}>
          <MaterialIcons
            name="arrow-back"
            size={25}
            color={theme.colors.shape}
          />
        </S.GoBackButton>
      </S.Header>

      <Formik
        initialValues={initialValue}
        onSubmit={handleSignUp}
        validationSchema={schemaSignUp}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <S.WrapperForm>
              <S.FormTitle>Sign Up</S.FormTitle>
              <S.BoxInput>
                <InputText
                  value={values['fullName']}
                  label={'Full Name'}
                  onChangeText={handleChange('fullName')}
                  autoCapitalize="none"
                  errors={errors['fullName']}
                />
              </S.BoxInput>

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
                  errors={errors['password']}
                  secret
                />
              </S.BoxInput>
              <S.BoxInput>
                <InputText
                  value={values['confirmPassword']}
                  label={'Confirm Password'}
                  onChangeText={handleChange('confirmPassword')}
                  nameIcon={'lock-outline'}
                  errors={errors['confirmPassword']}
                  secret
                />
              </S.BoxInput>
              <S.BoxBtnSingUp>
                <Button title="Sign up" onPress={handleSubmit} />
              </S.BoxBtnSingUp>
            </S.WrapperForm>
          </>
        )}
      </Formik>
    </S.Container>
  );
};
