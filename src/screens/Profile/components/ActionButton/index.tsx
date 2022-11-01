import React from 'react';
import * as S from './styles';

import {TouchableOpacityProps} from 'react-native';

type Props = {
  iconName: string;
  name: string;
} & TouchableOpacityProps;

export const ActionButton: React.FC<Props> = ({iconName, name, ...rest}) => {
  return (
    <S.ActionButton {...rest}>
      <S.IconInfoWrapper>
        <S.MaterialIcons name={iconName} size={23} />
        <S.ActionButtonText>{name}</S.ActionButtonText>
      </S.IconInfoWrapper>
      <S.MaterialIcons name="chevron-right" size={25} />
    </S.ActionButton>
  );
};
