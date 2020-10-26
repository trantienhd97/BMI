import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {NavigationProps} from '../../core/NavigationProps';
import {navigationScreens} from '../../config/navigation';

/**
 * File: HomeScreen.tsx
 * @created 2020-10-08 23:58:13
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<HomeScreenProps>>}
 */

export interface HomeScreenRouteParams {
  id?: number;
}

export interface HomeScreenProps
  extends NavigationProps<HomeScreenRouteParams> {}

function HomeScreen(props: HomeScreenProps) {
  const handleGoToBMIScreen = () => {
    // @ts-ignore
    props.navigation.navigate(navigationScreens.bmi);
  };

  const handleGoToRockPaperScissors = () => {
    // @ts-ignore
    props.navigation.navigate(navigationScreens.rockPaperScissor);
  };

  const handleGotoReadPaper = () => {
    // @ts-ignore
    props.navigation.navigate(navigationScreens.readPaper);
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.title}>Trang Chủ</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewItem}>
          <TouchableOpacity
            style={styles.viewItemLeft}
            onPress={handleGoToBMIScreen}>
            <Image
              source={{
                uri:
                  'https://image.winudf.com/v2/image1/Y3kuYm1pX2ljb25fMTU2MzA5NjYxOV8wMzA/icon.png?w=170&fakeurl=1',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewItemLeft}
            onPress={handleGoToRockPaperScissors}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh2Uu1xIQDAtETia31kps1OOONzOwdDG5avw&usqp=CAU',
              }}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.viewItem]}>
          <TouchableOpacity
            style={[styles.viewItemLeft]}
            onPress={handleGotoReadPaper}>
            <Image
              source={require('../../icon/read-paper.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#f8efd4',
  },
  viewHeader: {
    height: 120,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  viewItem: {
    flexDirection: 'row',
  },
  viewItemLeft: {
    paddingRight: 16,
    paddingLeft: 16,
    height: 200,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewItemRight: {
    height: 200,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },

  item: {
    width: '100%',
    height: '100%',
  },

  image: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
});
