import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';
import {Easing} from 'react-native';
import {Profile} from '../../screens/Profile';

const Stack = createStackNavigator();

type ConfigStackAnimationProps = {
  open: TransitionSpec;
  close: TransitionSpec;
};

const configStackAnimation: ConfigStackAnimationProps = {
  open: {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  },
  close: {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  },
};

export const StackProfile = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        transitionSpec: {
          open: configStackAnimation.open,
          close: configStackAnimation.close,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="ProfileStack" component={Profile} />
    </Stack.Navigator>
  );
};
