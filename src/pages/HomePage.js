import React from 'react';
import {View, Text, Button} from 'react-native';

function HomePage({navigation}) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Sum" onPress={() => navigation.navigate('Sum')} />
    </View>
  );
}

export {HomePage};
