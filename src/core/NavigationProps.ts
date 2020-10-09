import {
  CompositeNavigationProp,
  NavigationHelpers,
  NavigationProp as BaseNavigationProp,
  RouteProp as BaseRouteProp,
} from '@react-navigation/native';

export interface NavigationProps<T extends Record<string, any>> {
  route: BaseRouteProp<Record<string, T>, string>;

  navigation: CompositeNavigationProp<
    BaseNavigationProp<Record<string, T>>,
    NavigationHelpers<
      Record<
        string,
        | T
        | {
            screen?: string;
            params?: T;
          }
      >
    >
  >;
}

export type RouteProp<
  T1 extends Record<string, any>,
  T2 extends string
> = BaseRouteProp<T1, T2>;

export type NavigationProp<
  T extends Record<string, any>
> = CompositeNavigationProp<
  BaseNavigationProp<Record<string, T>>,
  NavigationHelpers<
    Record<
      string,
      T & {
        screen?: string;
        params?: T;
      }
    >
  >
>;
