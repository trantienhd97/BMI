import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MinusIcon from '../../../icon/MinusIcon';
import {COLORS} from '../../../styles/common-variables';
import PlusIcon from '../../../icon/PlusIcon';

/**
 * File: CountComponent.tsx
 * @created 2020-10-10 21:02:51
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<CountComponentProps>>}
 */
export interface CountComponentProps {
  text?: string;

  state?: any;

  decrement?(): void;

  increment?(): void;

  clearTimer?(): void;
}

function CountComponent(props: CountComponentProps) {
  const {text, state, decrement, increment, clearTimer} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textItem} numberOfLines={1}>
        {text}
      </Text>
      <Text
        style={[
          styles.textItem,
          {fontSize: 30, fontWeight: 'bold', marginTop: 5},
        ]}>
        {state}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.viewIcon}
          onLongPress={decrement}
          onPressOut={clearTimer}>
          <MinusIcon color={COLORS.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewIcon}
          onLongPress={increment}
          onPressOut={clearTimer}>
          <PlusIcon color={COLORS.WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(CountComponent);

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: '100%',
    backgroundColor: '#343245',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  viewIcon: {
    width: 35,
    height: 35,
    backgroundColor: '#575c69',
    borderRadius: 30,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    color: '#bec3c6',
    fontSize: 18,
  },
});
