import React from 'react';
import * as S from './styles';

import { StepInfo } from '../../@types/mocks/StepOnboarding';

interface StepOnboardingProps {
  page: StepInfo;
}

export const StepOnboarding: React.FC<StepOnboardingProps> = ({ page }) => {
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
