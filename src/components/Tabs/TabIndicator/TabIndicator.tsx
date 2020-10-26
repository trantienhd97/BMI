import React, {PropsWithChildren} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

/**
 * File: TabIndicator.tsx
 * @created 2020-10-22 00:56:25
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<TabIndicatorProps>>}
 */
function TabIndicator(props: PropsWithChildren<TabIndicatorProps>) {
  const {style} = props;
  return (
    <>
      <Animated.View style={[StyleSheet.flatten([styles.indicator, style])]}>
        <Animated.View style={[styles.indicatorInner]} />
      </Animated.View>
    </>
  );
}

export interface TabIndicatorProps {
  style?: Animated.AnimatedComponent<typeof View>['prototype']['props'];
}

TabIndicator.defaultProps = {
  //
};

TabIndicator.propTypes = {
  //
};

export default React.memo(TabIndicator);

const styles = StyleSheet.create({
  indicator: {
    position: 'relative',
    top: 2.5,
    height: 5,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 0,
    paddingBottom: 0,
  },
  indicatorInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
