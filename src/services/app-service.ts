import {
  ImageStyle,
  StatusBar,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'reactn';
import {Language, translationService} from '@react3l/react3l/services';
// @ts-ignore
import vi from '../i18n/vi.json';
import {enableScreens} from 'react-native-screens';
import {globalStateRepository} from '../repositories/global-state-repository';
import {DMSGlobalState} from '../config/global';

export const appService = {
  useStyle<T extends TextStyle | ViewStyle>(baseStyle: T, ...params: T[]): T {
    return React.useMemo(() => {
      let result: T = baseStyle;
      params.forEach((style: T) => {
        if (typeof style === 'object' && style !== null) {
          result = {
            ...result,
            ...(style as any),
          };
        }
      });
      return result;
    }, [params, baseStyle]);
  },

  useStatusBarLightContent() {
    StatusBar.setBarStyle('light-content');
  },

  transformTextStyle(
    textStyle: TextStyle,
    fontScale: number | undefined,
  ): TextStyle {
    if (textStyle?.hasOwnProperty('fontSize')) {
      return {
        ...textStyle,
        // @ts-ignore
        fontSize: textStyle.fontSize / fontScale,
      };
    }
    return textStyle;
  },

  transformStyles<T>(styles: T, fontScale: number | undefined): T {
    let resultStyles: T = StyleSheet.create({}) as any;
    Object.entries(styles).forEach(([key, value]) => {
      if (value.hasOwnProperty('fontSize')) {
        resultStyles = {
          ...resultStyles,
          [key]: this.transformTextStyle(value, fontScale),
        };
      } else {
        resultStyles = {
          ...resultStyles,
          [key]: {
            ...value,
          },
        };
      }
    });
    return resultStyles;
  },

  useTransformedStyles<
    T extends {
      [key: string]: ViewStyle | ImageStyle | TextStyle;
    }
  >(styles: T): T {
    const [fontScale] = React.useGlobal<DMSGlobalState, 'fontScale'>(
      'fontScale',
    );
    return React.useMemo(() => this.transformStyles(styles, fontScale), [
      fontScale,
      styles,
    ]);
  },

  async configureApp() {
    enableScreens();

    // if (__DEV__) {
    //   addDevTools();
    // }

    /**
     * Initialize translation
     */
    await translationService.initTranslation({
      resources: {
        vi,
      },
    });
    await translationService.changeLanguage(Language.vi, vi);

    await globalStateRepository.initialize();

    // accountService.configureAuthenticationSubscription();
    //
    // appService.subscribeGPSTracking();
  },
};
