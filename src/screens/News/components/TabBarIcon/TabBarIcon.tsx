import React, {PropsWithChildren} from 'react';
// @ts-ignore
// import styles from './TabBarIcon.scss';
import {Pressable, PressableProps, StyleSheet, View} from 'react-native';

/**
 * File: TabBarIcon.tsx
 * @created 2020-10-20 16:20:53
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<TabBarIconProps>>}
 */
function TabBarIcon(props: PropsWithChildren<TabBarIconProps>) {
  const {style, activeIcon, icon, isActive, ...restProps} = props;
  return (
    <Pressable
      {...restProps}
      style={[styles.tabIconContainer, StyleSheet.flatten(style)]}>
      <View style={[styles.tabIcon, isActive && styles.active]}>
        {!isActive && icon}
        {isActive && activeIcon}
      </View>
    </Pressable>
  );
}

export interface TabBarIconProps extends PressableProps {
  icon?: any;

  activeIcon?: any;

  isActive?: boolean;

  style?: any;
}

TabBarIcon.defaultProps = {
  //
};

TabBarIcon.propTypes = {
  //
};

export default React.memo(TabBarIcon);

const styles = StyleSheet.create({
  tabIconContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabIcon: {
    width: 48,
    height: 48,
    display: 'flex',
    borderRadius: 24,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  active: {
    backgroundColor: '#28abb9',
  },
});
