import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import Animated from 'react-native-reanimated';

export const InputWrapper = styled.View`
  width: 100%;
  justify-content: center;
`;

export const InputMask = styled(TextInputMask)`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 50px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.backgroundDark};
  color: ${({theme}) => theme.colors.black70};
  font-size: 14px;
`;

export const LabelText = styled(Animated.Text)`
  position: absolute;
  color: ${({theme}) => theme.colors.black50};
  left: 20px;
`;
