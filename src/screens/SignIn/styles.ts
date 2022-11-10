import styled from 'styled-components/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Container = styled.View`
  flex: 1;
  padding-top: ${({ theme }) => theme.metrics.statusBarHeight}px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpaceheight + 20}px;
`;

export const KeyboardScrollView = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const WrapperForm = styled.View`
  margin-top: 15px;
`;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.backgroundDark};
  font-size: 28px;

  margin-bottom: 10px;
`;

export const BoxInput = styled.View`
  margin-bottom: 28px;
`;

export const BoxBtnLogin = styled.View``;

export const LineSpace = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black20};
  border-radius: 1px;
  margin: 20px 0px;
`;

export const WrapperChangeSignUp = styled.View`
  margin-top: 20px;
`;

export const WrapperText = styled.View`
  justify-content: flex-end;
  flex-direction: row;
`;

export const TextSingup = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryRegular};
  color: ${({ theme }) => theme.colors.black70};
  font-size: 13px;
`;

export const ButtonGoSignUp = styled.TouchableOpacity``;

export const LinkSignUp = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  color: ${({ theme }) => theme.colors.backgroundDark};
  font-size: 13px;
  margin-left: 5px;
`;
