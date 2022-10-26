import React from 'react';
import {logout} from '../../services/Firebase/auth/logout';
import * as S from './styles';

export const Home: React.FC = () => {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <S.Container>
      <S.Title>Hello World!!</S.Title>
      <S.Button onPress={handleLogout}>
        <S.ButtonTitle>Logout</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
};
