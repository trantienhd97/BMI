import React, {PropsWithChildren} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {navigationScreens} from '../../../../config/navigation';
import NewPaperIcon from '../../../../icon/NewPaperIcon';
import {COLORS} from '../../../../styles/common-variables';
import {StyleSheet, View} from 'react-native';
import TabBarIcon from '../TabBarIcon/TabBarIcon';
import HomeIcon from '../../../../icon/HomeIcon';
import HomeIconActive from '../../../../icon/HomeIconActive';

/**
 * File: TabBar.tsx
 * @created 2020-10-17 10:48:52
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<TabBarProps>>}
 */
function TabBar(props: PropsWithChildren<TabBarProps>) {
  const {navigation, route} = props;
  const tabs: {
    routeName?: string;
    icon?: any;
    activeIcon?: any;
    onPress(): any;
  }[] = React.useMemo(() => {
    return [
      {
        routeName: navigationScreens.readPaper,
        icon: <HomeIcon color={COLORS.RED} />,
        activeIcon: <HomeIconActive color={COLORS.RED} />,
        onPress: () => {
          navigation.navigate(navigationScreens.readPaper);
        },
      },
      {
        routeName: navigationScreens.homeNewspaper,
        icon: <NewPaperIcon color={COLORS.RED} />,
        activeIcon: <NewPaperIcon color={COLORS.RED} />,
        onPress: () => {
          navigation.navigate(navigationScreens.homeNewspaper);
        },
      },
      {
        // routeName: navigationScreens.homeNewspaper,
        icon: <NewPaperIcon color={COLORS.RED} />,
        activeIcon: <NewPaperIcon color={COLORS.RED} />,
        onPress: () => {
          navigation.navigate(navigationScreens.homeNewspaper);
        },
      },
      {
        // routeName: navigationScreens.homeNewspaper,
        icon: <NewPaperIcon color={COLORS.RED} />,
        activeIcon: <NewPaperIcon color={COLORS.RED} />,
        onPress: () => {
          navigation.navigate(navigationScreens.homeNewspaper);
        },
      },
    ];
  }, [navigation]);
  return (
    <View style={[styles.bottomTabContainer]}>
      <View style={[styles.bottomTabs]}>
        {tabs.map((tab, index: number) => (
          <TabBarIcon
            key={index}
            onPress={tab.onPress}
            icon={tab.icon}
            activeIcon={tab.activeIcon}
            isActive={route?.name === tab.routeName}
          />
        ))}
      </View>
      {props.children}
    </View>
  );
}

export interface TabBarProps extends StackScreenProps<any> {
  //
}

export default React.memo(TabBar);

const styles = StyleSheet.create({
  bottomTabs: {
    backgroundColor: '#fff',
    width: '100%',
    height: 72,
    borderRadius: 36,
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomTabContainer: {
    width: '100%',
    height: 0,
    padding: 16,
  },
});
