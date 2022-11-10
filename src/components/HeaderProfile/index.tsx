import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import * as S from './styles';

type Props = {
  edit?: boolean;
};

export const HeaderProfile: React.FC<Props> = ({ edit = false }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <S.Header>
      <S.AvatarContainer>
        <S.AvatarWrapper>
          <S.ImageAvatar
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
          />
        </S.AvatarWrapper>
        {edit && (
          <S.ButtonEditImageWrapper>
            <S.MaterialIcons
              name="add-a-photo"
              size={15}
              color={theme.colors.black70}
            />
          </S.ButtonEditImageWrapper>
        )}
      </S.AvatarContainer>
      {!edit ? (
        <>
          <S.UserName>Matheus Pires de Sousa</S.UserName>
        </>
      ) : (
        <S.GoBackWrapper>
          <S.ButtonGoBack onPress={handleGoBack}>
            <S.MaterialIcons
              name="arrow-back"
              size={32}
              color={theme.colors.shape}
            />
          </S.ButtonGoBack>
        </S.GoBackWrapper>
      )}
    </S.Header>
  );
};
