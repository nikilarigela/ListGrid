import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Toggle = ({
  onLeftPress,
  leftLabel,
  rightLabel,
  onRightPress,
  onTogglePress,
  selectedSide,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <TouchableOpacity onPress={onLeftPress}>
        <Text>{leftLabel}</Text>
      </TouchableOpacity>
      <Pressable onPress={onTogglePress}>
        <View
          style={{
            width: 65,
            height: 20,
            backgroundColor: selectedSide === 'left' ? '#e8acac' : '#f25c5c',
            borderRadius: 20,
            marginHorizontal: 16,
          }}>
          <View
            style={{
              height: 25,
              width: 25,
              borderRadius: 12.5,
              backgroundColor: 'white',
              position: 'absolute',
              top: -3,
              alignSelf: selectedSide === 'left' ? 'flex-start' : 'flex-end',
            }}
          />
        </View>
      </Pressable>
      <TouchableOpacity onPress={onRightPress}>
        <Text>{rightLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Toggle;
