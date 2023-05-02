import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {COLORS, SIZES, FONTS, images, icons} from "../../constants";

interface props{
    label: string,
    labelColor?: string,
    buttonColor?: string,
    fontSize?: number,
    labelStyles?: object,
    buttonStyles?: object,
    onPress?: () => void,
}

const TextButton: FC<props> = ({label, labelColor, buttonColor, fontSize, buttonStyles, labelStyles, onPress}) => {
    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={labelStyles}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default TextButton;