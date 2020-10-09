import {Dimensions, StyleProp, StyleSheet} from 'react-native';
import {COLORS} from './common-variables';

const SCREEN_WIDTH = Dimensions.get('window').width;
export const commonStyles: Record<string, StyleProp<any>> = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeAreaView: {
    width: '100%',
    height: '100%',
  },
  outerContainer: {
    backgroundColor: COLORS.PRIMARY,
  },
  banner: {
    width: SCREEN_WIDTH - 32,
    height: ((SCREEN_WIDTH - 32) / 343) * 206,
  },
});
