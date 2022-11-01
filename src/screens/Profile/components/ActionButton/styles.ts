import styled from 'styled-components/native';
import Material from 'react-native-vector-icons/MaterialIcons';
import {RFValue} from 'react-native-responsive-fontsize';

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  border-radius: 10px;

  margin-bottom: 10px;
  padding: 10px 20px;
  elevation: 10;

  justify-content: space-between;

  background-color: ${({theme}) => theme.colors.shape};
`;

export const IconInfoWrapper = styled.View`
  flex-direction: row;
`;

export const MaterialIcons = styled(Material)`
  color: ${({theme}) => theme.colors.black50};
`;

export const ActionButtonText = styled.Text`
  margin-left: 10px;
  color: ${({theme}) => theme.colors.black50};
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primaryRegular};
`;
