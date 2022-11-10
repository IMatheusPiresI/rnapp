import { Dimensions, Platform } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const { width: PAGE_WIDTH, height: PAGE_HEIGHT } = Dimensions.get('window');

export default {
  screenWidth: PAGE_WIDTH,
  screenHeight: PAGE_HEIGHT,
  statusBarHeight: Platform.OS === 'ios' ? getStatusBarHeight() : 25,
  bottomSpaceheight: Platform.OS === 'ios' ? getBottomSpace() : 0,
};
