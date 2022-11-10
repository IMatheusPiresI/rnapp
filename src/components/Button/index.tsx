import React from 'react';
import * as S from './styles';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import googleImage from '../../assets/images/google.png';

type ButtonProps = {
  title: string;
  variant?: 'google' | null;
} & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = null,
  ...rest
}) => {
  return (
    <S.Container {...rest} style={styles.shadow} variant={variant}>
      {variant && <S.ImageGoogle source={googleImage} />}
      <S.TitleButton variant={variant}>{title}</S.TitleButton>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
