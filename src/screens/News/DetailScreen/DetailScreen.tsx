import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import BackIcon from '../../../icon/BackIcon';
import {COLORS} from '../../../styles/common-variables';

/**
 * File: DetailScreen.tsx
 * @created 2020-10-27 00:26:41
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<DetailScreenProps>>}
 */

function DetailScreen(props: PropsWithChildren<DetailScreenProps>) {
  const {navigation, route} = props;
  // @ts-ignore
  const {item} = route.params;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item?.title}</Text>
      <Image source={{uri: item?.urlToImage}} style={styles.image} />
      <View style={styles.viewNoteImage}>
        <Text style={styles.noteImage}>Ảnh: {item?.author}</Text>
      </View>
      <View style={styles.viewContent}>
        <Text style={styles.content}>{item?.content}</Text>
      </View>
      <View style={styles.goBackView}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.goBack}>
          <BackIcon color={COLORS.BLUE} />
          <Text style={styles.goBackText}>Trở lại</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export interface DetailScreenProps extends StackScreenProps<any> {
  //
}

DetailScreen.defaultProps = {
  //
};

DetailScreen.propTypes = {
  //
};

export default React.memo(DetailScreen);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
    backgroundColor: '#d2d3c9',
  },
  title: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    color: 'black',
  },
  image: {
    marginTop: 12,
    height: 200,
    resizeMode: 'contain',
  },
  viewNoteImage: {
    marginTop: 5,
    width: '100%',
    alignItems: 'flex-end',
  },
  noteImage: {
    fontSize: 14,
    color: 'blue',
  },
  viewContent: {
    flex: 1,
    marginTop: 12,
  },
  content: {
    fontSize: 14,
    lineHeight: 22,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackView: {
    marginTop: 12,
    marginBottom: 52,
  },
  goBackText: {
    color: COLORS.BLUE,
  },
});
