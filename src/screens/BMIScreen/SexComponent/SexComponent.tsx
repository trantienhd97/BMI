import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

/**
 * File: SexComponent.tsx
 * @created 2020-10-10 19:27:05
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<SexComponentProps>>}
 */

export interface SexComponentProps {
  icon?: any;

  text?: string;

  handleSelectSex?(): void;

  selected?: boolean;
}

function SexComponent(props: SexComponentProps) {
  const {icon, text, handleSelectSex, selected} = props;
  return (
    <TouchableOpacity style={selected ? [styles.container , {backgroundColor: '#20263e'}] : styles.container} onPress={handleSelectSex}>
      {icon}
      <Text style={styles.textItem} numberOfLines={1}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default SexComponent;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: '100%',
    backgroundColor: '#343245',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textItem: {
    marginTop: 20,
    color: '#bec3c6',
    fontSize: 18,
  },
});
