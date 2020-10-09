import {translate} from '@react3l/react3l/helpers/i18n';
import {RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import React from 'reactn';

export interface NavigationScreenMapper {
  [key: string]: string | NavigationScreenMapper;
}

/**
 * Navigation screen paths
 *
 * @types {NavigationScreenMapper}
 */
export const navigationScreens = {
  app: translate('screens.app'),
  bmi: translate('screens.bmi'),
};

/**
 * Global ref of navigation tree
 *
 * @type {RefObject<NavigationContainerRef>}
 */
export const navigationRef: RefObject<NavigationContainerRef> = React.createRef<
  NavigationContainerRef
>();
