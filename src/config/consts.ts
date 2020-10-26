import {Dimensions, KeyboardTypeOptions, Platform} from 'react-native';
import ReactNativeConfig from 'react-native-config';

/**
 * API BaseURL constants
 *
 * @type {string}
 */

export const API_BASE_URL: string = ReactNativeConfig.DMS_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('Missing API_BASE_URL');
}

export const GET_DATA_FROM_US =
  'http://newsapi.org/v2/top-headlines?country=us&apiKey=f4d2babf5ed64a1abe4c9f4542d3d99b';

// ------------------------------------------------------------------------

/**
 * Seed data
 */

// ------------------------------------------------------------------------

/**
 * Date time constants
 */

export const DATE_FORMAT: string = 'DD/MM/YYYY';

export const TIME_FORMAT: string = 'HH:mm:ss';

export const DATE_TIME_FORMAT: string = `${DATE_FORMAT} ${TIME_FORMAT}`;

// ------------------------------------------------------------------------

/**
 * Platform constants
 */

export const PLATFORM_IS_ANDROID: boolean = Platform.OS === 'android';

export const PLATFORM_IS_IOS: boolean = Platform.OS === 'ios';

export const PLATFORM_NAME: string = PLATFORM_IS_ANDROID ? 'Android' : 'iOS';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export {SCREEN_WIDTH, SCREEN_HEIGHT};

// ------------------------------------------------------------------------

export const GOOGLE_API_KEY: string = ReactNativeConfig.DMS_GOOGLE_API_KEY;

export const MATTERMOST_WEBHOOK_URL: string =
  ReactNativeConfig.DMS_MATTERMOST_WEBHOOK_URL;

export const ACCEPTABLE_DISTANCE_DIFF: number = 1;

export const SMALL_SINGLE_LIST_TAKE_ALL: number = 1000;

/**
 * Location option
 *
 * @type {GeoWatchOptions}
 */

/**
 * EndReachedThreshold for FlatList
 *
 * @type {number}
 */
export const END_REACHED_THRESHOLD: number = 0.5;

/**
 * Ratio width / height of banner images
 *
 * @type {number}
 */
export const BANNER_RATIO: number = 1;

export const NUMERIC_KEYBOARD_TYPE: KeyboardTypeOptions = PLATFORM_IS_IOS
  ? 'number-pad'
  : 'numeric';

export const THOUSAND_SEPARATOR: string = ',';

export const DECIMAL_SEPARATOR: string = '.';

/**
 * Time between 2 GPS updates
 *
 * @type {number}
 */
export const GPS_TRACKING_TIME: number = 10000;

/**
 * Sentry DSN for error tracking
 *
 * @type {string}
 */
export const SENTRY_DSN: string = ReactNativeConfig.DMS_SENTRY_DSN;

export const KEY_IMAGE_ALBUM_ASYNC_STORAGE: string = 'albumStorage';

/**
 * Key of geolocation in async storage
 *
 * @type {string}
 */
export const ASYNC_STORAGE_GEOLOCATION_KEY: string = 'location';

// eslint-disable-next-line prettier/prettier
export const CODE_PUSH_DEPLOYMENT_KEY: string =
    PLATFORM_IS_ANDROID ? ReactNativeConfig.DMS_CODE_PUSH_DEPLOYMENT_KEY_ANDROID : ReactNativeConfig.DMS_CODE_PUSH_DEPLOYMENT_KEY_IOS;
