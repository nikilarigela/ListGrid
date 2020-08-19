import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { REQUEST_NEWS } from '../../constants/actions';

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: REQUEST_NEWS, payload: 0 });
  }, [dispatch]);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 32, fontWeight: '600' }}>News</Text>
    </View>
  );
};

export default SplashScreen;
