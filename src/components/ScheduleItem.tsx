import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScheduleLabel } from './ScheduleLabel';

export const ScheduleItem = (item: any) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        minHeight: 90,
        marginRight: 10,
        marginTop: 17,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            {item.pairStart}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: COLORS.gray,
            }}
          >
            {item.pairEnd}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            position: 'relative',
            marginLeft: 8,
            width: 225,
          }}
        >
          <ScheduleLabel text={item.pairType} />
          <Text
            style={{
              flexShrink: 1,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            {item.pairTitle}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 7,
            }}
          >
            <Ionicons name="person" size={12} color={COLORS.gray} />

            <Text style={{ color: COLORS.gray, fontSize: 12, marginLeft: 5 }}>{item.teacher}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Ionicons name="navigate" size={12} color={COLORS.gray} />

            <Text style={{ color: COLORS.gray, fontSize: 12, marginLeft: 5 }}>{item.auditory}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
