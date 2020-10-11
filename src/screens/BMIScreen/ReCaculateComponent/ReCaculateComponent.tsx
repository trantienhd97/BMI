import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

/**
 * File: ReCaculateComponent.tsx
 * @created 2020-10-10 21:40:04
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<ReCaculateComponentProps>>}
 */
export interface ReCaculateComponentProps {
  title?: string;

  notification?: any;

  handleReCalculate?(): void;
}

function ReCaculateComponent(props: ReCaculateComponentProps) {
  const {title, notification, handleReCalculate} = props;

  return (
    <View style={styles.container}>
      <View style={[styles.viewHeader, {alignItems: 'flex-start'}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#172635'}}>
        <View style={styles.viewContentModal}>
          <View style={styles.viewContenModalChild}>
            <Text style={{color: 'green', fontSize: 22, fontWeight: 'bold'}}>
              {notification?.comment}
            </Text>
            <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold'}}>
              {notification?.value}
            </Text>

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.textNotification}>{notification?.noti}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.viewBTN} onPress={handleReCalculate}>
            <Text style={styles.textBTN}>RE-CALCULATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default React.memo(ReCaculateComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181e33',
  },
  viewHeader: {
    height: '10%',
    backgroundColor: '#172635',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  viewBTN: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#ff0061',
    flex: 2 / 12,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBTN: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  viewContenModalChild: {
    backgroundColor: '#343245',
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '25%',
    paddingBottom: '25%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  viewContentModal: {
    flex: 11 / 12,
    marginTop: 10,
    padding: 16,
  },
  textNotification: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
