import React, {useEffect} from 'react';
import * as S from './styles';

import {useRoute} from '@react-navigation/native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useAppSelector from '../../hooks/useAppSelector';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../../store/modules/auth/actions';

type ParamsProps = {
  title: string;
};

export const Loading: React.FC = () => {
  const progressAnimation = useSharedValue(0);
  const progress = useSelector(
    (state: any) => state.authReducer.progressLoading,
  );
  const dispatch = useDispatch();

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
