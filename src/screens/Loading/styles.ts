import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

import LottieView from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  padding: 20px 40px;
`;

export const WrapperLottie = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LottieViewAnimation = styled(LottieView)`
  width: ${({theme}) => theme.metrics.screenWidth * 0.65}px;
`;

export const BoxTitle = styled.View`
  margin: 20px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.primaryBold};
  font-size: 18px;
  color: ${({theme}) => theme.colors.shape};
`;

export const WrapperProgressLoading = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
  height: 20px;
  overflow: hidden;

  border-radius: 10px;
  border-width: 3px;
  border-color: ${({theme}) => theme.colors.shape};
`;

export const ProgressCount = styled(Animated.View)`
  background-color: ${({theme}) => theme.colors.shape};
  height: 20px;
`;
