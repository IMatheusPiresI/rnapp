import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          paddingBottom: theme.metrics.bottomSpaceheight,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.backgroundDark,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="home"
              size={25}
              color={
                focused ? theme.colors.backgroundDark : theme.colors.black50
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Homee"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="groups"
              size={25}
              color={
                focused ? theme.colors.backgroundDark : theme.colors.black50
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
