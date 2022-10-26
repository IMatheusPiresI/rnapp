import React from 'react';
import Animated from 'react-native-reanimated';
import {page} from '../../mocks/Onboarding';
import {Dot} from '../Dot';
import * as S from './styles';

interface PaginatorProps {
  activeDot: Animated.SharedValue<number>;
}

export const Paginator: React.FC<PaginatorProps> = ({activeDot}) => {
  return (
    <S.Container>
      {page.map((_, index) => (
        <Dot key={index.toString()} activeDot={activeDot} index={index} />
      ))}
    </S.Container>
  );
};
