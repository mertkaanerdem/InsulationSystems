import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

function SumApp({navigation}) {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [sum, setSum] = useState();

  function sumNumbers() {
    return setSum(parseInt(numOne) + parseInt(numTwo));
  }

  return (
    <View>
      <TextInput
        placeholder="Birinci sayıyı gir"
        onChangeText={(val) => setNumOne(val)}
      />
      <TextInput
        placeholder="İkinci sayıyı gir"
        onChangeText={(val) => setNumTwo(val)}
      />
      <Text>Sonuç: {sum}</Text>
      <Button title="Topla!" onPress={() => sumNumbers()} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export {SumApp};
