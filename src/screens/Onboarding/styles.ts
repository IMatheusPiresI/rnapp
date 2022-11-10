import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
`;

export const FlatListOnboarding = styled(
  Animated.FlatList,
)`` as unknown as typeof FlatList;

export const Footer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpaceheight + 30}px;
  flex-direction: row;
`;

export const BoxButtonStep = styled.View`
  width: 70px;
`;

export const BoxButtonStart = styled(Animated.View)`
  width: 100%;
  position: absolute;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
`;

export const WrapperStepButtons = styled(Animated.View)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
`;
