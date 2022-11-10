import React from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';
import * as S from './styles';

interface DotProps {
  activeDot: Animated.SharedValue<number>;
  index: number;
}

export const Dot: React.FC<DotProps> = ({ activeDot, index }) => {
  const theme = useTheme();
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDot.value === index;

    return {
      backgroundColor: withTiming(
        isActive ? theme.colors.backgroundDark : theme.colors.black70,
      ),
      width: withTiming(isActive ? 25 : 8),
    };
  });

  return (
    <S.DotWrapper>
      <S.Dot style={rDotStyle} />
    </S.DotWrapper>
  );
};
