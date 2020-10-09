/**
 * App global state
 *
 * @interface {DMSGlobalState}
 */
export class DMSGlobalState {
  /**
   * App i18n language
   */
  language?: string;

  /**
   * App i18n fallback language
   *
   * @type {string}
   */
  fallbackLanguage?: string;

  /**
   * Access token of current user
   */
  token?: string;

  /**
   * Check if user is logging in on app open
   */
  logginIn?: boolean;

  /**
   * StatusBar display state
   */
  displayStatusbar?: boolean;

  /**
   * Task "DMS Album" loaded
   */
  albumLoaded?: boolean;

  /**
   * Current system font scale
   */
  fontScale?: number;

  /**
   * Unit of measure loading state
   */
  unitOfMeasureLoading?: Record<number, boolean>;

  /**
   * Tax type loading state
   */
  taxTypeLoading?: Record<number, boolean>;
}
