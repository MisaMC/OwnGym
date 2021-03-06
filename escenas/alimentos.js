import React from 'react';
import {StyleSheet, Text, View, Image,Button,Alert, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
const alimentos = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.alimentos()}>
      alimentos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
  },
});

export default alimentos;
