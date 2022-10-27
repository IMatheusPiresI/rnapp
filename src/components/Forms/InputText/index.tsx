import React, {useRef} from 'react';
import * as S from './styles';
import {TextInput, TextInputProps} from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components';
import {FormikErrors} from 'formik';
import {ValuesSignIn} from '../../../@types/components/Forms/sign';

interface InputTextProps extends TextInputProps {
  value: string;
  label: string;
  errors?: string;
  nameIcon?: string;
  masked?: boolean;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  masked = false,
  value,
  nameIcon,
  errors,
  ...rest
}) => {
  const inputTextRef = useRef<TextInput>(null);
  const labelAnimate = useSharedValue(0);
  const theme = useTheme();
  const handleFocus = () => {
    labelAnimate.value = withTiming(-17, {
      duration: 200,
    });
  };

  const handleBlur = () => {
    if (value !== '') return;
    labelAnimate.value = withTiming(0, {
      duration: 200,
    });
  };

  const handleClickLabelFocus = () => {
    inputTextRef.current?.focus();
  };

  const rLabelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: labelAnimate.value},
        {translateX: interpolate(labelAnimate.value, [0, -17], [0, -5])},
      ],
      fontSize: interpolate(labelAnimate.value, [0, -17], [12, 9]),
    };
  });

  return (
    <S.InputWrapper>
      <S.BoxInput>
        <S.InputText
          ref={inputTextRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          autoCorrect={false}
          {...rest}
        />

        <S.LabelText style={rLabelStyle} onPress={handleClickLabelFocus}>
          {label}
        </S.LabelText>
        {nameIcon && (
          <S.BoxIcon>
            <MaterialIcons
              name={nameIcon}
              size={23}
              color={theme.colors.backgroundDark}
            />
          </S.BoxIcon>
        )}
      </S.BoxInput>
      {errors && <S.ErrorMessage>{errors}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};
