import React from 'react';
import * as S from './styles';

import Animated from 'react-native-reanimated';
import { page } from '../../mocks/Onboarding';
import { Dot } from '../Dot';

interface PaginatorProps {
  activeDot: Animated.SharedValue<number>;
}

export const Paginator: React.FC<PaginatorProps> = ({ activeDot }) => {
  return (
    <S.Container>
      {page.map((_, index) => (
        <Dot key={index.toString()} activeDot={activeDot} index={index} />
      ))}
    </S.Container>
  );
};
