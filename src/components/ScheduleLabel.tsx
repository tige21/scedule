import React from 'react';
import { COLORS } from '../../constants';
import { View, Text } from 'react-native';

export const ScheduleLabel = ({ text }: any) => {
  let blockStyle;
  let width;
  switch (text) {
    case 'Практические занятия':
      blockStyle = COLORS.orange;
      width = 190;
      break;
    case 'Лекция':
      blockStyle = COLORS.blue1;
      width = 75;
      break;
    case 'Лабораторная работа':
      blockStyle = COLORS.red;
      width = 183;
      break;
    default:
      break;
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: width,
        height: 20,
        backgroundColor: blockStyle,
        borderRadius: 25,
        marginBottom: 5,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: COLORS.white,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
