import React from 'react';
import {StepInfo} from '../../@types/mocks/StepOnboarding';
import * as S from './styles';

interface StepOnboardingProps {
  page: StepInfo;
}

export const StepOnboarding: React.FC<StepOnboardingProps> = ({page}) => {
  return (
    <S.Container>
      <S.WrapperContent>
        <S.Title>{page.title}</S.Title>
        <S.ImageTec source={page.image} resizeMode="contain" />
        <S.BoxDescription>
          <S.Description>{page.description}</S.Description>
        </S.BoxDescription>
      </S.WrapperContent>
    </S.Container>
  );
};
