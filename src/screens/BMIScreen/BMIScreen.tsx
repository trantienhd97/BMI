import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaleIcon from '../../icon/MaleIcon';
import {COLORS} from '../../styles/common-variables';
import FemaleIcon from '../../icon/FemaleIcon';
import Slider from '@react-native-community/slider';
import PlusIcon from '../../icon/PlusIcon';
import MinusIcon from '../../icon/MinusIcon';

/**
 * File: BMIScreen.tsx
 * @created 2020-10-09 15:08:46
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<BMIScreenProps>>}
 */

const initialState = {countWeight: 0, countAge: 0};

export interface StateType {
  countWeight?: number;

  countAge?: number;
}

function reducerCount(state: StateType, action: {type: any}) {
  switch (action.type) {
    case 'incrementWeight':
      return {countWeight: state.countWeight + 1, countAge: state.countAge};
    case 'decrementWeight':
      return state.countWeight > 0
        ? {countWeight: state.countWeight - 1, countAge: state.countAge}
        : {countWeight: 0, countAge: state.countAge};
    case 'incrementAge':
      return {countAge: state.countAge + 1, countWeight: state.countWeight};
    case 'decrementAge':
      return state.countAge > 0
        ? {countAge: state.countAge - 1, countWeight: state.countWeight}
        : {countAge: 0, countWeight: state.countWeight};
    default:
      throw new Error();
  }
}

function BMIScreen() {
  const [height, setHeight] = React.useState<number>(150);

  const [male, isMale] = React.useState<boolean>(false);

  const [state, dispatch] = React.useReducer(reducerCount, initialState);

  const handleCalculate = () => {
    // @ts-ignore
    const res = state.countWeight / ((height / 100) * (height / 100));

    if (res < 18.5) {
      Alert.alert(
        // @ts-ignore
        'Chỉ số BMI dưới 18,5 cho thấy bạn đang ở tình trạng nhẹ cân và cần tăng cân thêm. Bạn nên hỏi xin ý kiến bác sĩ để có chế độ ăn uống hợp lý.',
      );
    }

    if (res >= 18.5 && res <= 24.9) {
      Alert.alert(
        // @ts-ignore
        'Chỉ số BMI ở khoảng này cho thấy bạn có cân nặng phù hợp và khỏe mạnh. Bạn sẽ giảm được nguy cơ mắc các bệnh nguy hiểm nếu duy trì được chỉ số này',
      );
    }

    if (res >= 25 && res <= 29.9) {
      Alert.alert(
        // @ts-ignore
        'Chỉ số BMI từ 25−29,9 cho thấy bạn đang trong tình trạng thừa cân nhẹ. Bạn nên giảm cân nhưng đừng giảm quá nhiều. Bạn cần hỏi xin lời khuyên của bác sĩ để có chế độ ăn phù hợp.',
      );
    }

    if (res >= 30) {
      Alert.alert(
        // @ts-ignore
        'Chỉ số BMI trên 30 cho thấy bạn đang bị béo phì. Bạn có nguy cơ mắc nhiều bệnh nếu bạn không thực hiện chế độ giảm cân. Bạn cần gặp và nói chuyện với bác sĩ để xin lời khuyên.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.title}>BMI CALCULATOR</Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.viewItem}>
          <TouchableOpacity
            style={styles.viewItemLeft}
            onPress={() => {
              isMale(true);
            }}>
            <View
              style={
                !male
                  ? styles.itemLeft
                  : [styles.itemLeft, {backgroundColor: '#343245'}]
              }>
              <MaleIcon />
              <Text style={styles.textItem}>MALE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewItemRight}
            onPress={() => {
              isMale(false);
            }}>
            <View
              style={
                male
                  ? styles.itemLeft
                  : [styles.itemLeft, {backgroundColor: '#343245'}]
              }>
              <FemaleIcon color={COLORS.RED} />
              <View>
                <Text style={[styles.textItem, {marginTop: 20}]}>FEMALE</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.viewHeight}>
          <Text style={styles.textItem}>HIGHT</Text>
          <Text style={[styles.textItem, {marginTop: 10, fontWeight: 'bold'}]}>
            <Text style={[styles.textItem, {fontSize: 30}]}>{height}</Text> cm
          </Text>
          <Slider
            style={{width: 200, height: 40, marginTop: 10}}
            minimumValue={0}
            maximumValue={250}
            minimumTrackTintColor="#5a3c52"
            maximumTrackTintColor="#000000"
            value={height}
            onValueChange={setHeight}
            step={1}
          />
        </View>

        <View style={styles.viewCount}>
          <View style={styles.viewItemLeft}>
            <View style={styles.itemLeftCount}>
              <Text style={styles.textItem}>WEIGHT</Text>
              <Text
                style={[
                  styles.textItem,
                  {marginTop: 10, fontSize: 30, fontWeight: 'bold'},
                ]}>
                {state.countWeight}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.viewIcon}
                  onPress={() => dispatch({type: 'decrementWeight'})}>
                  <MinusIcon color={COLORS.WHITE} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.viewIcon}
                  onPress={() => dispatch({type: 'incrementWeight'})}>
                  <PlusIcon color={COLORS.WHITE} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.viewItemRight}>
            <View style={styles.itemRightCount}>
              <Text style={styles.textItem}>AGE</Text>
              <Text
                style={[
                  styles.textItem,
                  {marginTop: 10, fontSize: 30, fontWeight: 'bold'},
                ]}>
                {state.countAge}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.viewIcon}
                  onPress={() => dispatch({type: 'decrementAge'})}>
                  <MinusIcon color={COLORS.WHITE} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.viewIcon}
                  onPress={() => dispatch({type: 'incrementAge'})}>
                  <PlusIcon color={COLORS.WHITE} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.viewBTN} onPress={handleCalculate}>
          <Text style={styles.textBTN}>CALCULATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BMIScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181e33',
  },
  viewHeader: {
    height: 120,
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
  viewContent: {
    backgroundColor: '#172635',
    flex: 1,
    marginTop: 5,
    padding: 16,
    justifyContent: 'space-between',
  },
  viewItem: {
    flexDirection: 'row',
    flex: 3 / 12,
  },
  viewItemLeft: {
    paddingRight: 16,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewItemRight: {
    paddingLeft: 16,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLeft: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#20263e',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLeftCount: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#343245',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRight: {
    padding: 50,
    backgroundColor: '#20263e',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRightCount: {
    padding: 50,
    backgroundColor: '#343245',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  textItem: {
    color: '#bec3c6',
    fontSize: 18,
    marginRight: 5,
  },
  viewHeight: {
    flex: 3 / 12,
    backgroundColor: '#343245',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCount: {
    flexDirection: 'row',
    flex: 3 / 12,
  },
  viewBTN: {
    backgroundColor: '#ff0061',
    flex: 1 / 12,
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
  viewIcon: {
    padding: 7,
    backgroundColor: '#575c69',
    borderRadius: 30,
    margin: 10,
  },
});
