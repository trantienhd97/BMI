import React, {PropsWithChildren} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListRenderItem,
  ListRenderItemInfo,
  FlatList,
  Alert,
} from 'react-native';
import TabBar from './components/TabBar/TabBar';
import {StackScreenProps} from '@react-navigation/stack';
import BackIcon from '../../icon/BackIcon';
import {COLORS} from '../../styles/common-variables';
import ItemComponent from './components/ItemComponent/ItemComponent';
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay';

/**
 * File: News.tsx
 * @created 2020-10-17 10:19:20
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<NewsProps>>}
 */

function News(props: PropsWithChildren<NewsProps>) {
  const {navigation, route} = props;

  const [dataFromUS, setDataFromUS] = React.useState<any[]>([]);

  const [loading, setLoading] = React.useState<boolean>(false);

  const [refresh, setRefesh] = React.useState<boolean>(false);

  const [pageNumber, setPageNumber] = React.useState<number>(1);

  const handleGetNewsFromUS = React.useCallback(async () => {
    const response = await fetch(
      'http://newsapi.org/v2/top-headlines?country=us&page=1&pageSize=10&apiKey=bd59ee98a2e746c5aa247039f71918c9',
    );
    const jsonData = await response.json();
    setDataFromUS(
      // @ts-ignore
      jsonData.articles.filter((item) => item?.content !== null) as any[],
    );
  }, []);

  const handleRefresh = React.useCallback(() => {
    setRefesh(true);
    setPageNumber(1);
    handleGetNewsFromUS()
      .then(() => setRefesh(false))
      .catch(() => Alert.alert('Xem lại đường truyền'));
  }, [handleGetNewsFromUS]);

  const handleLoadMore = React.useCallback(async () => {
    let currentPage = pageNumber;
    const response = await fetch(
      'http://newsapi.org/v2/top-headlines?country=us&page=' +
        (currentPage + 1).toString() +
        '&pageSize=10&apiKey=bd59ee98a2e746c5aa247039f71918c9',
    );
    const jsonData = await response.json();
    if (jsonData.articles.length !== 0) {
      setDataFromUS(dataFromUS.concat(jsonData.articles));
    } else {
      Alert.alert('Hết tin');
    }
    setPageNumber(currentPage + 1);
  }, [dataFromUS, pageNumber]);

  React.useEffect(() => {
    setLoading(true);
    handleGetNewsFromUS()
      .then(() => setLoading(false))
      .catch(() => Alert.alert('Xem lại đường truyền'));
  }, [handleGetNewsFromUS]);

  const renderItem: ListRenderItem<any> = React.useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return (
        <ItemComponent
          key={item?.urlToImage}
          item={item}
          navigation={navigation}
        />
      );
    },
    [navigation],
  );

  return (
    <View style={styles.containerView}>
      <View style={styles.viewHeader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <BackIcon color={COLORS.WHITE} />
          </TouchableOpacity>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Trang chủ</Text>
          </View>
        </View>
      </View>
      <Text style={styles.titleContent}>Tin hot</Text>
      {loading ? (
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={dataFromUS}
            renderItem={renderItem}
            style={styles.list}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            onEndReachedThreshold={0.5}
            onEndReached={handleLoadMore}
            refreshing={refresh}
            keyExtractor={(item) => item.urlToImage}
            onRefresh={handleRefresh}
            ListEmptyComponent={
              <View style={styles.noNews}>
                <Text style={styles.textNoNews}>Không có tin</Text>
              </View>
            }
          />
        </View>
      )}
      <View style={styles.viewTabBar}>
        <TabBar navigation={navigation} route={route} />
      </View>
    </View>
  );
}

export interface NewsProps extends StackScreenProps<any> {
  //
}

News.defaultProps = {
  //
};

News.propTypes = {
  //
};

export default React.memo(News);

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  viewTabs: {
    width: '100%',
    flexGrow: 1,
  },
  viewHeader: {
    height: 80,
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    padding: 16,
    alignItems: 'flex-start',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  list: {
    width: '100%',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
  },
  viewTabBar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  titleContent: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  contentContainer: {
    paddingBottom: 180,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  noNews: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNoNews: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
