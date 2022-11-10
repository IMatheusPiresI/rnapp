import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width: PAGE_WIDTH, height: PAGE_HEIGHT } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  width: ${PAGE_WIDTH}px;
  height: ${PAGE_HEIGHT}px;
  padding-top: ${({ theme }) => theme.metrics.statusBarHeight}px;

  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;

export const WrapperContent = styled.View`
  width: ${({ theme }) => theme.metrics.screenWidth}px;
  height: ${({ theme }) => theme.metrics.screenHeight * 0.6}px;

  align-items: center;

  padding: 0 20px;
`;

export const ImageTec = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBoldItalic};
  font-size: 25px;
  color: ${({ theme }) => theme.colors.black50};
`;

export const BoxDescription = styled.View`
  padding: 0 20px;
`;
export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryRegular};
  font-size: 15px;
  text-align: center;
`;
