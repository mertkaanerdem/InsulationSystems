import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceSize = Dimensions.get('window');

function MathCard({item, enterNumber1, enterNumber2, mathResult, goHome}) {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>Sonuç</Text>
      <Text style={styles.resultNumber}>{item}</Text>
      <TextInput
        keyboardType={'number-pad'}
        style={styles.input}
        placeholder="Birinci sayıyı gir"
        onChangeText={enterNumber1}
      />
      <TextInput
        keyboardType={'number-pad'}
        style={styles.input}
        placeholder="İkinci sayıyı gir"
        onChangeText={enterNumber2}
      />

      <TouchableOpacity style={styles.resultBtn} onPress={mathResult}>
        <Text style={styles.resultText}>Sonuç Göster</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={goHome}>
        <Text style={styles.backText}>Ana sayfaya dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  result: {
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    bottom: 70,
  },
  resultNumber: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    bottom: 70,
  },
  resultBtn: {
    backgroundColor: '#ffca28',
    borderRadius: 10,
    marginTop: 10,
  },
  resultText: {
    margin: 10,
    textAlign: 'center',
    color: '#555',
    fontWeight: 'bold',
  },
  back: {
    borderWidth: 1,
    borderColor: '#ffca28',
    borderRadius: 10,
    marginTop: 10,
    width: deviceSize.width / 3,
    alignSelf: 'flex-end',
    position: 'relative',
  },
  backText: {
    margin: 10,
    color: '#555',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export {MathCard};
