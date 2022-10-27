import React from 'react';
import {Dimensions} from 'react-native';
import * as S from './styles';

import {logout} from '../../services/Firebase/auth/logout';

import LottieView from 'lottie-react-native';

export const Home: React.FC = () => {
  const {width} = Dimensions.get('window');
  const handleLogout = async () => {
    await logout();
  };

  return (
    <S.Container>
      <S.Title>Hello World! </S.Title>
      <LottieView
        source={require('../../assets/animations/welcome.json')}
        autoPlay
        style={{
          width: width * 0.7,
        }}
      />
      <S.Button onPress={handleLogout}>
        <S.ButtonTitle>Logout</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
};
