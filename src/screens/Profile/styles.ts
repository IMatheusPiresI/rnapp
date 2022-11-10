import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import Material from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;

  padding-bottom: 75px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: 22px;
`;

export const InfoContainer = styled.View`
  padding: 0 20px;
  height: ${RFValue(60)}px;
  background-color: ${({ theme }) => theme.colors.shape};

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black20};
`;

export const InfoWrapper = styled.View`
  align-items: center;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryRegular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.black};
  top: 3px;
`;

export const NameInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryRegular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.black50};
  bottom: 3px;
`;

export const ActionsContainer = styled.View`
  padding: 20px;
  flex: 1;
`;

export const LastPostContainer = styled.View``;

export const LastPostWrapper = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;

  overflow: hidden;

  flex-direction: row;
`;

export const TitleSection = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.black50};

  margin: 5px 0;
`;

export const LastPostImageWrapper = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;

  border-radius: 5px;
`;

export const LastPostInfoWrapper = styled.View`
  padding: 5px 10px;
  flex: 1;
`;

export const TitlePost = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.black70};
`;

export const DescriptionPost = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.black50};
`;

export const EmptyPostWrapper = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  padding: 10px;

  align-items: center;
  justify-content: center;
`;

export const EmptyPostDescription = styled.Text`
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.black50};
`;

export const MaterialIcons = styled(Material)``;
