import React, { useRef } from 'react';
import * as S from './styles';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface InputTextProps extends TextInputMaskProps {
  value: string;
  label: string;
}

export const InputTextMask: React.FC<InputTextProps> = ({ label, ...rest }) => {
  const inputMaskRef = useRef<TextInputMask>(null);
  const labelAnimate = useSharedValue(0);

  const handleFocus = () => {
    labelAnimate.value = withTiming(-17, {
      duration: 200,
    });
  };

  const handleBlur = () => {
    labelAnimate.value = withTiming(0, {
      duration: 200,
    });
  };

  const rLabelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: labelAnimate.value },
        { translateX: interpolate(labelAnimate.value, [0, -17], [0, -5]) },
      ],
      fontSize: interpolate(labelAnimate.value, [0, -17], [12, 9]),
    };
  });

  return (
    <S.InputWrapper>
      <S.InputMask
        ref={inputMaskRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <S.LabelText style={rLabelStyle}>{label}</S.LabelText>
    </S.InputWrapper>
  );
};
