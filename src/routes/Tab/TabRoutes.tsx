import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Search} from '../../screens/Search';
import {CodePost} from '../../screens/CodePost';
import {Profile} from '../../screens/Profile';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  const theme = useTheme();
  const translateX = useSharedValue(35);

  const rSelectedRoute = useAnimatedStyle(() => {
    return {
      left: translateX.value,
    };
  });

  const attAnimatedValue = (position: number) => {
    translateX.value = withTiming(35 + getWidth() * position, {
      duration: 500,
    });
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            bottom: 15,
            paddingBottom: theme.metrics.bottomSpaceheight,
            marginHorizontal: 20,
            backgroundColor: theme.colors.shape,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.backgroundDark,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          listeners={{
            tabPress: () => attAnimatedValue(0),
          }}
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
          name="CodePost"
          component={CodePost}
          listeners={{
            tabPress: () => attAnimatedValue(1),
          }}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="code"
                size={25}
                color={
                  focused ? theme.colors.backgroundDark : theme.colors.black50
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Empty"
          component={EmptyScreen}
          options={{
            tabBarButton: props => (
              <View {...props} onLayout={() => null}>
                <TouchableOpacity
                  onPress={() => null}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 500,
                    backgroundColor: theme.colors.backgroundDark,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: 30,
                    zIndex: 2,
                    elevation: 5,
                    borderWidth: 2,
                    borderColor: theme.colors.shape,
                    shadowColor: theme.colors.black,
                  }}>
                  <MaterialIcons name="add" size={40} color={'#fff'} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          listeners={{
            tabPress: () => attAnimatedValue(3),
          }}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="search"
                size={25}
                color={
                  focused ? theme.colors.backgroundDark : theme.colors.black50
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          listeners={{
            tabPress: () => attAnimatedValue(4),
          }}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="person"
                size={25}
                color={
                  focused ? theme.colors.backgroundDark : theme.colors.black50
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
      <Animated.View
        style={[
          rSelectedRoute,
          {
            width: getWidth() - 30,
            height: 2,
            backgroundColor: theme.colors.backgroundDark,
            position: 'absolute',
            borderRadius: getWidth(),
            bottom: 75,
          },
        ]}></Animated.View>
    </>
  );
};

export const EmptyScreen = () => {
  return <View />;
};

const getWidth = () => {
  let width = Dimensions.get('window').width;

  width = width - 40;

  return width / 5;
};
