import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import HomeScreen from './screens/Home';
import SplashScreen from './screens/Splash';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => setFetching(false), 1500);
  }, []);

  if (fetching) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
