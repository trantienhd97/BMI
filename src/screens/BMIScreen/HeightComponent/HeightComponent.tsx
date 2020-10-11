import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

/**
 * File: HeightComponent.tsx
 * @created 2020-10-10 20:46:10
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<HeightComonentProps>>}
 */
export interface HeightComponent {
  text?: string;

  state?: number;

  setSate?: any;
}

function HeightComponent(props: HeightComponent) {
  const {text, state, setSate} = props;
  return (
    <View style={styles.viewHeight}>
      <Text style={styles.textItem}>{text}</Text>
      <Text style={[styles.textItem, {marginTop: 10, fontWeight: 'bold'}]}>
        <Text style={[styles.textItem, {fontSize: 30}]}>{state}</Text> cm
      </Text>
      <Slider
        style={{width: 200, height: 40, marginTop: 10}}
        minimumValue={0}
        maximumValue={250}
        minimumTrackTintColor="#5a3c52"
        maximumTrackTintColor="#000000"
        value={state}
        onValueChange={setSate}
        step={1}
      />
    </View>
  );
}

export default React.memo(HeightComponent);

const styles = StyleSheet.create({
  viewHeight: {
    flex: 3 / 12,
    backgroundColor: '#343245',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    color: '#bec3c6',
    fontSize: 18,
    marginRight: 5,
  },
});
