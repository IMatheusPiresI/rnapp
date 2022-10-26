import {createStackNavigator} from '@react-navigation/stack';
import {Loading} from '../../screens/Loading';
import {Onboarding} from '../../screens/Onboarding';
import {SignIn} from '../../screens/SignIn';
import {SignUp} from '../../screens/SignUp';

const Stack = createStackNavigator();

export const TabRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Loading" component={Loading} />
    </Stack.Navigator>
  );
};
