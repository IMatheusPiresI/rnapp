import React from 'react';
import * as S from './styles';

import loginRNImage from '../../assets/images/loginRN.png';

type WelcomeImageProps = {
  title?: string;
};

export const WelcomeImage: React.FC<WelcomeImageProps> = ({ title }) => {
  return (
    <S.WelcomeWrapper>
      <S.ImageHeader source={loginRNImage} resizeMode="contain" />
      {!!title && (
        <S.WelcomeToRN>
          <S.WelcomeTitle>{title}</S.WelcomeTitle>
        </S.WelcomeToRN>
      )}
    </S.WelcomeWrapper>
  );
};
