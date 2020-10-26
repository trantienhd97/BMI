import React, {PropsWithChildren} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import TabBar from '../components/TabBar/TabBar';
import {View} from 'react-native';

/**
 * File: HomeNewspaper.tsx
 * @created 2020-10-21 00:16:57
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<HomeNewspaperProps>>}
 */
function HomeNewspaper(props: PropsWithChildren<HomeNewspaperProps>) {
  const {navigation, route} = props;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <TabBar navigation={navigation} route={route} />
    </View>
  );
}

export interface HomeNewspaperProps extends StackScreenProps<any> {
  //
}

HomeNewspaper.defaultProps = {
  //
};

HomeNewspaper.propTypes = {
  //
};

export default React.memo(HomeNewspaper);
