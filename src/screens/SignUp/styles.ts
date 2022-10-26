import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding-top: ${({theme}) => theme.metrics.statusBarHeight}px;
  background-color: ${({theme}) => theme.colors.background};
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: ${({theme}) => theme.metrics.bottomSpaceheight + 20}px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  top: 20px;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  border-radius: 20px;
  padding: 5px;
`;

export const WrapperForm = styled.View`
  flex: 1;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const FormTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryBold};
  color: ${({theme}) => theme.colors.backgroundDark};
  font-size: 28px;

  margin-bottom: 10px;
`;

export const BoxInput = styled.View`
  margin-bottom: 20px;
`;

export const BoxBtnSingUp = styled.View``;

export const LineSpace = styled.View`
  height: 1px;
  background-color: ${({theme}) => theme.colors.black20};
  border-radius: 1px;
  margin: 20px 0px;
`;
