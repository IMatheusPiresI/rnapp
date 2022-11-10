import styled from 'styled-components/native';

interface VariantGoogle {
  variant?: 'google' | null;
}

export const Container = styled.TouchableOpacity<VariantGoogle>`
  background-color: ${({ theme, variant }) =>
    variant ? theme.colors.shape : theme.colors.backgroundDark};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 13px 0px;
  width: 100%;
`;

export const TitleButton = styled.Text<VariantGoogle>`
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: 13px;
  color: ${({ theme, variant }) =>
    variant ? theme.colors.black : theme.colors.shape};
`;

export const ImageGoogle = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;

  left: 40px;
`;

export const WrapperButton = styled.View``;
