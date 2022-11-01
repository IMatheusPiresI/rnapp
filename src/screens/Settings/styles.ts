import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-bottom: ${({theme}) => theme.metrics.bottomSpaceheight + 20}px;
`;

export const KeyboardView = styled(KeyboardAwareScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
})``;

export const InputsChangeContainer = styled.View`
  padding: 20px 20px 0px 20px;
  flex: 1;
  flex-grow: 1;
`;

export const InputsWrapper = styled.View`
  margin-bottom: 20px;
`;

export const CurrentEmailWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.shapeDark};
  border-bottom-width: 1px;
  border-right-width: 1px;

  border-color: ${({theme}) => theme.colors.backgroundDark};

  border-radius: 7px;
  padding: 6px 19px;

  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  font-size: ${RFValue(11)}px;
  color: ${({theme}) => theme.colors.black50};
`;

export const Value = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.black50};
  bottom: 2px;
`;

export const BoxInput = styled.View`
  margin-bottom: 10px;
`;

export const ButtonSubmit = styled.View`
  padding: 0 20px;
`;

export const ButtonTitle = styled.Text``;
