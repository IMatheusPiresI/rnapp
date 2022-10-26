import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const InputWrapper = styled.View`
  width: 100%;
  justify-content: center;
`;

export const BoxInput = styled.View`
  width: 100%;
  justify-content: center;
`;

export const InputText = styled.TextInput`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 50px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-color: ${({theme}) => theme.colors.backgroundDark};
  color: ${({theme}) => theme.colors.black70};
  font-size: 14px;
`;

export const LabelText = styled(Animated.Text)`
  position: absolute;
  color: ${({theme}) => theme.colors.black50};
  font-family: ${({theme}) => theme.fonts.primaryRegular};
  left: 20px;
`;

export const BoxIcon = styled.View`
  position: absolute;
  right: 15px;
`;

export const ErrorMessage = styled(Animated.Text)`
  color: ${({theme}) => theme.colors.error};
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  font-size: 13px;
  margin-top: 3px;
  margin-left: 5px;
`;
