/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import * as S from './styles';

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useAppSelector from '../../hooks/useAppSelector';

export const Loading: React.FC = () => {
  const progressAnimation = useSharedValue(0);
  const progress = useAppSelector((state) => state.authReducer.progressLoading);

  const rProgressStyle = useAnimatedStyle(() => {
    return {
      width: progressAnimation.value + '%',
    };
  });

  useEffect(() => {
    progressAnimation.value = withTiming(progress);
  }, [progress]);
  return (
    <S.Container>
      <S.WrapperLottie>
        <S.LottieViewAnimation
          source={require('../../assets/animations/global-connect.json')}
          autoPlay
        />
        <S.BoxTitle>
          <S.Title>
            Wait a minute, we're {'\n'}
            loading your data
          </S.Title>
        </S.BoxTitle>
      </S.WrapperLottie>

      <S.WrapperProgressLoading>
        <S.ProgressCount style={rProgressStyle} />
      </S.WrapperProgressLoading>
    </S.Container>
  );
};
