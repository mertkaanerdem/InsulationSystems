import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Insulation Systems</Text>
        <Text style={styles.subHeader}>ÖZDEMİR İZOLASYON</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Sum')}>
          <Text style={styles.buttonText}>Toplama</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Minus')}>
          <Text style={styles.buttonText}>Çıkartma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Times')}>
          <Text style={styles.buttonText}>Çarpma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Divide')}>
          <Text style={styles.buttonText}>Bölme</Text>
        </TouchableOpacity>
      </View>
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
  headerContainer: {
    flex: 1,

    justifyContent: 'center',
  },
  ButtonContainer: {
    flex: 2,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
  },
  subHeader: {
    textAlign: 'right',
    fontStyle: 'italic',
  },

  button: {
    backgroundColor: '#ffca28',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    margin: 10,
    textAlign: 'center',
    color: '#555',
    fontWeight: 'bold',
  },
});

export {HomePage};
