import React, {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {navigationScreens} from '../../../../config/navigation';

/**
 * File: ItemComponent.tsx
 * @created 2020-10-22 21:11:26
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<ItemComponentProps>>}
 */
const widthScreen = Dimensions.get('window').width;
function ItemComponent(props: PropsWithChildren<ItemComponentProps>) {
  const {item, navigation} = props;

  const handleGoToDetailScreen = React.useCallback(() => {
    navigation.navigate(navigationScreens.detailNews, {
      item,
    });
  }, [item, navigation]);
  return (
    <TouchableOpacity onPress={handleGoToDetailScreen} style={styles.viewItem}>
      <Image
        source={{uri: item?.urlToImage}}
        style={{width: widthScreen - 32, height: 150, borderRadius: 10}}
      />
      <Text style={styles.time}>{item?.publishedAt}</Text>
      <Text style={styles.title} numberOfLines={2}>
        {item.content}
      </Text>
    </TouchableOpacity>
  );
}

export interface ItemComponentProps {
  item?: any;

  navigation?: any;
}

ItemComponent.defaultProps = {
  //
};

ItemComponent.propTypes = {
  //
};

export default React.memo(ItemComponent);

const styles = StyleSheet.create({
  viewItem: {
    flex: 1,
  },
  title: {
    marginTop: 8,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  time: {
    marginTop: 5,
  },
});
