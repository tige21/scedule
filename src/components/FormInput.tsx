import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { COLORS, SIZES, FONTS, images, icons } from '../../constants';

interface props {
  label?: string;
  appendComponent?: React.ReactNode;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  autoCompleteType?: string;
  autoCapitalize?: string;
  onChangeText?: (text: string) => void;
  placeholderTextColor?: string;
}

const FormInput = ({
  label,
  appendComponent,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  autoCompleteType,
  autoCapitalize,
  onChangeText,
}: props) => {
  return (
    <View
      style={{
        paddingLeft: SIZES.padding,
        paddingRight: SIZES.padding,
        marginTop: 25,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text style={{ color: COLORS.gray, fontSize: SIZES.body4 }}>{label}</Text>
        <Text></Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          height: 55,
          paddingLeft: 30,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray1,
        }}
      >
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
