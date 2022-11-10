import React, { useRef, useState } from 'react';
import * as S from './styles';

import { FlatList, StatusBar } from 'react-native';
import { StepOnboarding } from '../../components/StepOnboarding';

import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import metrics from '../../styles/theme/metrics';
import { Paginator } from '../../components/Paginator';
import { page } from '../../mocks/Onboarding';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export const Onboarding: React.FC = () => {
  const [disabledStepButton, setDisabledStepButton] = useState<boolean>(false);
  const [disabledStartButton, setDisabledStartButton] = useState<boolean>(true);
  const translateX = useSharedValue<number>(0);
  const scrollRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const handleNavigateSign = () => {
    navigation.navigate('SignIn');
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / metrics.screenWidth);
  });

  const disabledButton = (value: number) => {
    if (value === 2) {
      setDisabledStepButton(true);
      setDisabledStartButton(false);
    } else {
      setDisabledStepButton(false);
      setDisabledStartButton(true);
    }
  };

  const updateCurrentIndex = () => {
    const currentIndex = activeIndex.value;
    disabledButton(currentIndex);
  };

  const nextStep = () => {
    const nextSlide = activeIndex.value + 1;
    const offset = nextSlide * metrics.screenWidth;
    scrollRef.current?.scrollToOffset({ offset: offset });
    disabledButton(nextSlide);
  };

  const rStartedButtonStyle = useAnimatedStyle(() => {
    const currentIndex = translateX.value / metrics.screenWidth;
    return {
      transform: [
        { translateY: interpolate(currentIndex, [0, 1.5, 2], [100, -50, 0]) },
      ],
      opacity: interpolate(currentIndex, [0, 1.5, 2], [-1, -1, 1]),
    };
  });

  const rActionButtonStyle = useAnimatedStyle(() => {
    const currentIndex = translateX.value / metrics.screenWidth;

    return {
      transform: [
        {
          translateY: interpolate(
            currentIndex,
            [0, 1, 1.5, 2],
            [0, 0, -50, 100],
          ),
        },
      ],
      opacity: interpolate(currentIndex, [0, 1, 1.5], [1, 1, 0]),
    };
  });

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <S.FlatListOnboarding
        data={page}
        ref={scrollRef}
        horizontal
        onMomentumScrollEnd={updateCurrentIndex}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={scrollHandler}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <StepOnboarding page={item} />}
      />
      <S.Footer>
        <S.BoxButtonStart style={rStartedButtonStyle}>
          <Button
            title="Get Started"
            disabled={disabledStartButton}
            onPress={handleNavigateSign}
          />
        </S.BoxButtonStart>
        <S.WrapperStepButtons style={rActionButtonStyle}>
          <S.BoxButtonStep>
            <Button
              title="Skip"
              disabled={disabledStepButton}
              onPress={handleNavigateSign}
            />
          </S.BoxButtonStep>
          <Paginator activeDot={activeIndex} />
          <S.BoxButtonStep>
            <Button
              title="Next"
              onPress={nextStep}
              disabled={disabledStepButton}
            />
          </S.BoxButtonStep>
        </S.WrapperStepButtons>
      </S.Footer>
    </S.Container>
  );
};
