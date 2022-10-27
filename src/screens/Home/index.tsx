import React from 'react';
import * as S from './styles';

import {logout} from '../../services/Firebase/auth/logout';
import {showToast} from '../../utils/toastMessage';

export const Home: React.FC = () => {
  const handleLogout = async () => {
    await logout();
  };

  const handleShowToast = () => {
    showToast.success({
      text1: 'asdsadsa',
      text2: 'adasdsadasdassadasdasdsadsadsadsadasdsaddasdsadsadsadsad',
    });
  };

  return (
    <S.Container>
      <S.Title>Hello World!!</S.Title>
      <S.Button onPress={handleLogout}>
        <S.ButtonTitle>Logout</S.ButtonTitle>
      </S.Button>
      <S.Button onPress={handleShowToast}>
        <S.ButtonTitle>toast</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
};
