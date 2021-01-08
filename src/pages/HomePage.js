import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

function HomePage({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Sum')}>
        <Text>Sum</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Minus')}>
        <Text>Minus</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Times')}>
        <Text>Times</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Divide')}>
        <Text>Divide</Text>
      </TouchableOpacity>
    </View>
  );
}

export {HomePage};
