import React, {PropsWithChildren, ReactElement} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
  Pressable,
  Text,
} from 'react-native';
import TabIndicator from './TabIndicator/TabIndicator';
import {TabPaneProps} from './TabPane/TabPane';

/**
 * File: Tabs.tsx
 * @created 2020-10-22 00:53:18
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<TabsProps>>}
 */
function Tabs(props: PropsWithChildren<TabsProps>) {
  const {
    titleStyle,
    defaultActiveIndex,
    style,
    headerStyle,
    animationMethod,
    animationDuration,
  } = props;

  const screenWidth: number = Dimensions.get('screen').width;

  const children = React.useMemo(() => React.Children.toArray(props.children), [
    props.children,
  ]);

  const [activeIndex, setActiveIndex] = React.useState<number>(
    defaultActiveIndex,
  );

  const indicatorAnimation: Animated.Value = React.useRef<Animated.Value>(
    new Animated.Value(0),
  ).current;

  const indicatorWidth: number = React.useMemo(() => {
    return Math.floor(Dimensions.get('screen').width / children.length);
  }, [children.length]);

  const handleChangeTab = React.useCallback(
    (newActiveIndex: number) => {
      return () => {
        indicatorAnimation.stopAnimation(() => {
          (animationMethod === 'spring'
            ? Animated.spring(indicatorAnimation, {
                speed: 10,
                toValue: newActiveIndex,
                useNativeDriver: true,
              })
            : Animated.timing(indicatorAnimation, {
                toValue: newActiveIndex,
                duration:
                  children.length > 1
                    ? // @ts-ignore
                      (animationDuration *
                        Math.abs(newActiveIndex - activeIndex)) /
                      (children.length - 1)
                    : 0,
                useNativeDriver: true,
              })
          ).start(() => {
            setActiveIndex(newActiveIndex);
          });
        });
      };
    },
    [
      activeIndex,
      animationDuration,
      animationMethod,
      children.length,
      indicatorAnimation,
    ],
  );

  const tabs: ReactElement<TabPaneProps>[] = React.useMemo(
    () =>
      React.Children.toArray(children).map(
        // @ts-ignore
        (child: ReactElement<TabPaneProps>, index: number) => {
          const {title} = child.props;

          return (
            <Pressable
              key={index}
              style={styles.title}
              onPress={handleChangeTab(index)}>
              <Text key={index} style={[styles.titleText, titleStyle]}>
                {title}
              </Text>
            </Pressable>
          );
        },
      ),
    [children, titleStyle, handleChangeTab],
  );

  React.useEffect(() => {
    return function cleanup() {
      indicatorAnimation.stopAnimation();
    };
  }, [indicatorAnimation]);

  const indicatorMarginLeft = indicatorAnimation.interpolate({
    inputRange: [0, children.length],
    outputRange: [0, children.length * indicatorWidth],
  });

  return (
    <View style={StyleSheet.flatten([styles.tabContainer, style])}>
      <View style={[styles.tabHeader, StyleSheet.flatten(headerStyle)]}>
        <View style={[styles.tabIndicators]}>{tabs}</View>
        <TabIndicator
          style={[
            {
              width: indicatorWidth,
              transform: [
                {
                  translateX: indicatorMarginLeft,
                },
              ],
            },
          ]}
        />
      </View>
      <View style={styles.tabs}>
        {children.map((...[, index]) => {
          const marginLeft = indicatorAnimation.interpolate({
            inputRange: [0, children.length],
            outputRange: [
              index * screenWidth,
              (index - children.length) * screenWidth,
            ],
          });
          return (
            <Animated.View
              key={index}
              style={[
                styles.tabView,
                {
                  transform: [
                    {
                      translateX: marginLeft,
                    },
                  ],
                },
              ]}>
              {children[index]}
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

export interface TabsProps {
  defaultActiveIndex?: any;

  animationDuration?: number;

  animationMethod?: 'timing' | 'spring';

  children?: any;

  style?: StyleProp<ViewStyle>;

  titleStyle?: StyleProp<TextStyle>;

  headerStyle?: StyleProp<ViewStyle>;
}

Tabs.defaultProps = {
  //
};

Tabs.propTypes = {
  defaultActiveIndex: PropTypes.number,
  animationDuration: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  titleStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  headerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default React.memo(Tabs);

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  tabHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  tabs: {
    width: '100%',
    flexGrow: 1,
  },
  tabIndicators: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: 9,
    paddingRight: 9,
    paddingBottom: 0,
    paddingTop: 0,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 40,
    color: 'white',
  },
  tabView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
