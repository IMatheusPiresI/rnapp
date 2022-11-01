import {Formik} from 'formik';
import React from 'react';
import {Button} from '../../components/Button';
import {InputText} from '../../components/Forms/InputText';
import {HeaderProfile} from '../../components/HeaderProfile';
import {schemaEditProfile} from '../../schemas/editProfile';
import * as S from './styles';

export const Settings: React.FC = () => {
  const handleConfirmChangeProfile = () => {};

  return (
    <S.Container>
      <S.KeyboardView>
        <HeaderProfile edit />
        <Formik
          validationSchema={schemaEditProfile}
          initialValues={{name: ''}}
          onSubmit={handleConfirmChangeProfile}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <S.InputsChangeContainer>
                <S.InputsWrapper>
                  <S.CurrentEmailWrapper>
                    <S.Label>Email</S.Label>
                    <S.Value>matheuspdsousa@gmail.com</S.Value>
                  </S.CurrentEmailWrapper>

                  <S.BoxInput>
                    <InputText
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values['name']}
                      label={'Name'}
                      errors={errors['name']}
                    />
                  </S.BoxInput>
                </S.InputsWrapper>
              </S.InputsChangeContainer>
              <S.ButtonSubmit>
                <Button title="Confirm" onPress={handleSubmit} />
              </S.ButtonSubmit>
            </>
          )}
        </Formik>
      </S.KeyboardView>
    </S.Container>
  );
};
