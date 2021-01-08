import React, {useState} from 'react';
import {View} from 'react-native';
import {MathCard} from '../components';

function MinusApp({navigation}) {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [result, setResult] = useState();

  function answer() {
    return setResult(parseFloat(numOne) - parseFloat(numTwo));
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MathCard
        enterNumber1={(val) => setNumOne(val)}
        enterNumber2={(val) => setNumTwo(val)}
        mathResult={(val) => answer(val)}
        item={result}
        goHome={() => navigation.goBack()}
      />
    </View>
  );
}

export {MinusApp};
