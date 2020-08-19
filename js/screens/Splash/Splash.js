import React from 'react';
import { Text, View } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 32, fontWeight: '600' }}>News</Text>
    </View>
  );
};

export default SplashScreen;
