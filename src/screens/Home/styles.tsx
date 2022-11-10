import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpaceheight + 40}px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: ${({ theme }) => theme.colors.backgroundDark};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: 10px 20px;
`;
export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`;
