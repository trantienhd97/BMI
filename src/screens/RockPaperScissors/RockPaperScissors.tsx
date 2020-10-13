import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

/**
 * File: RockPaperScissors.tsx
 * @created 2020-10-13 19:01:20
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<RockPaperScissorsProps>>}
 */
export interface Player1Stype {
  id?: number;

  source?: any;
}

const initialState = {count: 0};

export interface StateType {
  count?: any;
}

function reducerCount(state: StateType, action: {type: any}) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return state.count > 0 ? {count: state.count - 1} : {count: 0};
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const widthScreen = Dimensions.get('window').width;
function RockPaperScissors() {
  const [player1, setPlayer1] = React.useState<Player1Stype>({
    id: 1,
    source: require('../../icon/rock.png'),
  });

  // const [point, dispatch] = React.useReducer(reducerCount, initialState);

  const [player2, setPlayer2] = React.useState<number>(1);

  const [sourcePlayer2, setSourcePlayer2] = React.useState<any>(
    require('../../icon/rock.png'),
  );

  const [result, setResult] = React.useState<string>('Chơi nào');

  const handleSelectRock = (val: Player1Stype) => () => {
    setPlayer2(Math.floor(Math.random() * 3) + 1);
    setPlayer1(val);
    if (player2 === 1) {
      setResult('Hoà');
      setSourcePlayer2(require('../../icon/rock.png'));
    }
    if (player2 === 2) {
      setResult('Thua');
      setSourcePlayer2(require('../../icon/paper.png'));
      // dispatch({type: 'decrement'});
    }
    if (player2 === 3) {
      setResult('Thắng');
      setSourcePlayer2(require('../../icon/scissor.png'));
      // dispatch({type: 'increment'});
    }
  };

  const handleSelectPaper = (val: Player1Stype) => () => {
    setPlayer2(Math.floor(Math.random() * 3) + 1);
    setPlayer1(val);
    if (player2 === 1) {
      setResult('Thắng');
      setSourcePlayer2(require('../../icon/rock.png'));
      // dispatch({type: 'increment'});
    }
    if (player2 === 2) {
      setResult('Hoà');
      setSourcePlayer2(require('../../icon/paper.png'));
    }
    if (player2 === 3) {
      setResult('Thua');
      setSourcePlayer2(require('../../icon/scissor.png'));
      // dispatch({type: 'decrement'});
    }
  };

  const handleSelectScissors = (val: Player1Stype) => () => {
    setPlayer2(Math.floor(Math.random() * 3) + 1);
    setPlayer1(val);
    if (player2 === 1) {
      setResult('Thua');
      setSourcePlayer2(require('../../icon/rock.png'));
      // dispatch({type: 'decrement'});
    }
    if (player2 === 2) {
      setResult('Thắng');
      setSourcePlayer2(require('../../icon/paper.png'));
      // dispatch({type: 'increment'});
    }
    if (player2 === 3) {
      setResult('Hoà');
      setSourcePlayer2(require('../../icon/scissor.png'));
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{result}</Text>
        {/*<Text>{point}</Text>*/}
      </View>
      <View style={styles.action}>
        <View style={styles.viewActionLeft}>
          <View style={styles.backGroundImage}>
            <Image source={player1.source} style={styles.imageItemPlayer1} />
          </View>
          <Text>Player 1</Text>
        </View>
        <View style={styles.viewActionRight}>
          <View style={styles.backGroundImage}>
            <Image source={sourcePlayer2} style={styles.imageItemPlayer2} />
          </View>
          <Text>Player 2</Text>
        </View>
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.backGroundImage}
          onPress={handleSelectRock({
            id: 1,
            source: require('../../icon/rock.png'),
          })}>
          <Image
            source={require('../../icon/rock.png')}
            style={styles.imageItem}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backGroundImage}
          onPress={handleSelectPaper({
            id: 1,
            source: require('../../icon/paper.png'),
          })}>
          <Image
            source={require('../../icon/paper.png')}
            style={styles.imageItem}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backGroundImage}
          onPress={handleSelectScissors({
            id: 1,
            source: require('../../icon/scissor.png'),
          })}>
          <Image
            source={require('../../icon/scissor.png')}
            style={styles.imageItem}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(RockPaperScissors);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7dad9',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30%',
    paddingBottom: '30%',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  action: {
    width: widthScreen - 40,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    flexDirection: 'row',
    width: widthScreen,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageItemPlayer1: {
    width: 70,
    height: 70,
    transform: [{rotate: '90deg'}],
  },
  imageItemPlayer2: {
    width: 70,
    height: 70,
    transform: [{rotate: '270deg'}],
  },
  imageItem: {
    width: 70,
    height: 70,
  },
  viewActionLeft: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewActionRight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backGroundImage: {
    width: 100,
    height: 100,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19d3da',
  },
});
