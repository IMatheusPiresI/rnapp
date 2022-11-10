import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const DotWrapper = styled.View`
  width: 30px;
  height: 5px;

  align-items: center;
  justify-content: center;
`;

export const Dot = styled(Animated.View)`
  width: 25px;
  height: 8px;
  border-radius: 8px;
`;
