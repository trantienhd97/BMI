import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaleIcon from '../../icon/MaleIcon';
import {COLORS} from '../../styles/common-variables';
import FemaleIcon from '../../icon/FemaleIcon';
import SexComponent from './SexComponent/SexComponent';
import HeightComponent from './HeightComponent/HeightComponent';
import CountComponent from './CountComponent/CountComponent';
import ReCaculateComponent from './ReCaculateComponent/ReCaculateComponent';

/**
 * File: BMIScreen.tsx
 * @created 2020-10-09 15:08:46
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<BMIScreenProps>>}
 */

const initialState = {countWeight: 50, countAge: 20};

export interface StateType {
  countWeight?: number;

  countAge?: number;
}

export interface NotiType {
  noti?: string;

  value?: any;

  comment?: string;
}

function reducerCount(state: StateType, action: {type: any}) {
  switch (action.type) {
    case 'incrementWeight':
      // @ts-ignore
      return {countWeight: state.countWeight + 1, countAge: state.countAge};
    case 'decrementWeight':
      // @ts-ignore
      return state.countWeight > 1
        ? // @ts-ignore
          {countWeight: state.countWeight - 1, countAge: state.countAge}
        : {countWeight: 1, countAge: state.countAge};
    case 'incrementAge':
      // @ts-ignore
      return {countAge: state.countAge + 1, countWeight: state.countWeight};
    case 'decrementAge':
      // @ts-ignore
      return state.countAge > 1
        ? // @ts-ignore
          {countAge: state.countAge - 1, countWeight: state.countWeight}
        : {countAge: 1, countWeight: state.countWeight};
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

// const heightScreen = Dimensions.get('window').height;

function BMIScreen() {
  const [height, setHeight] = React.useState<number>(150);

  const [male, isMale] = React.useState<boolean>(false);

  const [timer, setTimer] = React.useState<any>(null);

  const [notification, setNotification] = React.useState<NotiType>({
    noti: '',
    value: 0,
    comment: '',
  });

  const [state, dispatch] = React.useReducer(reducerCount, initialState);

  const handleReCalculate = () => {
    setNotification({
      noti: '',
      value: 0,
      comment: '',
    });
    dispatch({
      type: 'reset',
    });
    setHeight(150);
  };

  const handleCalculate = () => {
    const res =
      Math.round(
        // @ts-ignore
        (state.countWeight / ((height / 100) * (height / 100))) * 100,
      ) / 100;

    if (res < 18.5) {
      setNotification({
        noti:
          'Chỉ số BMI dưới 18,5 cho thấy bạn đang ở tình trạng nhẹ cân và cần tăng cân thêm. Bạn nên hỏi xin ý kiến bác sĩ để có chế độ ăn uống hợp lý.',
        value: res,
        comment: 'Gầy',
      });
    }

    if (res >= 18.5 && res <= 24.9) {
      setNotification({
        noti:
          'Chỉ số BMI ở khoảng này cho thấy bạn có cân nặng phù hợp và khỏe mạnh. Bạn sẽ giảm được nguy cơ mắc các bệnh nguy hiểm nếu duy trì được chỉ số này',
        value: res,
        comment: 'Bình thường',
      });
    }

    if (res >= 25 && res <= 29.9) {
      setNotification({
        noti:
          'Chỉ số BMI từ 25−29,9 cho thấy bạn đang trong tình trạng thừa cân nhẹ. Bạn nên giảm cân nhưng đừng giảm quá nhiều. Bạn cần hỏi xin lời khuyên của bác sĩ để có chế độ ăn phù hợp.',
        value: res,
        comment: 'Hơi béo',
      });
    }

    if (res >= 30) {
      setNotification({
        noti:
          'Chỉ số BMI trên 30 cho thấy bạn đang bị béo phì. Bạn có nguy cơ mắc nhiều bệnh nếu bạn không thực hiện chế độ giảm cân. Bạn cần gặp và nói chuyện với bác sĩ để xin lời khuyên.',
        value: res,
        comment: 'Béo phì',
      });
    }
  };

  const handleDecreWeight = () => {
    dispatch({type: 'decrementWeight'});
    setTimer(setTimeout(handleDecreWeight, 200));
  };

  const handleOnPressDecreWeight = () => {
    dispatch({type: 'decrementWeight'});
  };

  const handleincrementAge = () => {
    dispatch({type: 'incrementAge'});
    setTimer(setTimeout(handleincrementAge, 200));
  };

  const handleOnPressIncrementAge = () => {
    dispatch({type: 'incrementAge'});
  };

  const clearTimer = () => {
    clearTimeout(timer);
    setTimer(null);
  };

  const handleDecreAge = () => {
    dispatch({type: 'decrementAge'});
    setTimer(setTimeout(handleDecreAge, 200));
  };

  const handleOnPressDecreAge = () => {
    dispatch({type: 'decrementAge'});
  };

  const handleincrementWeight = () => {
    dispatch({type: 'incrementWeight'});
    setTimer(setTimeout(handleincrementWeight, 200));
  };

  const handleOnpressIncrementWeight = () => {
    dispatch({type: 'incrementWeight'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.title}>BMI CALCULATOR</Text>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.viewItem}>
          <SexComponent
            icon={<MaleIcon color={COLORS.BLUE} />}
            text={'MALE'}
            handleSelectSex={() => {
              isMale(true);
            }}
            selected={!male}
          />

          <SexComponent
            icon={<FemaleIcon color={COLORS.RED} />}
            text={'FEMALE'}
            handleSelectSex={() => {
              isMale(false);
            }}
            selected={male}
          />
        </View>

        <HeightComponent text={'HEIGHT'} state={height} setSate={setHeight} />

        <View style={styles.viewCount}>
          <CountComponent
            onPressDecrement={handleOnPressDecreWeight}
            clearTimer={clearTimer}
            decrement={handleDecreWeight}
            text={'WEIGHT'}
            state={state.countWeight}
            increment={handleincrementWeight}
            onPressIncrement={handleOnpressIncrementWeight}
          />

          <CountComponent
            onPressDecrement={handleOnPressDecreAge}
            decrement={handleDecreAge}
            text={'AGE'}
            state={state.countAge}
            increment={handleincrementAge}
            clearTimer={clearTimer}
            onPressIncrement={handleOnPressIncrementAge}
          />
        </View>

        <TouchableOpacity style={styles.viewBTN} onPress={handleCalculate}>
          <Text style={styles.textBTN}>CALCULATE</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={notification?.value !== 0}>
        <ReCaculateComponent
          title={'YOUR RESULT'}
          notification={notification}
          handleReCalculate={handleReCalculate}
        />
      </Modal>
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
    height: '15%',
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewItemLeft: {
    paddingRight: 16,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    color: '#bec3c6',
    fontSize: 18,
    marginRight: 5,
  },
  viewCount: {
    flexDirection: 'row',
    flex: 3 / 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewBTN: {
    padding: 10,
    marginTop: 20,
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
