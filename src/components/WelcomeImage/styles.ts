import styled from 'styled-components/native';

export const WelcomeWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageHeader = styled.Image`
  height: 180px;
`;

export const WelcomeToRN = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.backgroundDark};
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  border-radius: 20px;
  padding: 5px 20px;

  position: absolute;
  bottom: 5px;
`;

export const WelcomeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.shape};
`;
