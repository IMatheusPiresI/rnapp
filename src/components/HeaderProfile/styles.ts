import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import Material from 'react-native-vector-icons/MaterialIcons';

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  width: 100%;
  height: ${RFPercentage(31)}px;
  padding-left: 20px;
  padding-right: 20px;

  align-items: center;
  justify-content: center;

  padding-top: ${({ theme }) => theme.metrics.statusBarHeight}px;
`;

export const UserName = styled.Text`
  margin-top: 10px;
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  color: ${({ theme }) => theme.colors.shape};
`;

export const AvatarContainer = styled.View``;

export const AvatarWrapper = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;

  background-color: ${({ theme }) => theme.colors.background};

  border-width: 2px;
  border-radius: 100px;
  border-color: ${({ theme }) => theme.colors.shape};

  overflow: hidden;

  elevation: 10;
  shadow-color: ${({ theme }) => theme.colors.black50};
`;

export const ImageAvatar = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ButtonEditImageWrapper = styled.TouchableOpacity`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.shape};
  bottom: 10px;
  right: 0px;
  padding: 8px;

  border-radius: 30px;
`;

export const MaterialIcons = styled(Material)``;

export const GoBackWrapper = styled.View`
  position: absolute;

  top: 35px;
  left: 20px;

  align-items: center;
  justify-content: center;
`;

export const ButtonGoBack = styled.TouchableOpacity``;
