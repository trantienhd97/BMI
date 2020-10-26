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
  app: 'home',
  bmi: 'bmi',
  rockPaperScissor: 'rockPaperScissor',
  readPaper: 'readPaper',
  homeNewspaper: 'homeNewspaper',
  detailNews: 'detailNews',
};

/**
 * Global ref of navigation tree
 *
 * @type {RefObject<NavigationContainerRef>}
 */
export const navigationRef: RefObject<NavigationContainerRef> = React.createRef<
  NavigationContainerRef
>();
