import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, View, Text, TouchableOpacity} from "react-native";


interface propsB {
    title: string
    color?: string,
    bcolor?: string,
    onPress?: () => void,
}

export const Btn = ({title, bcolor, color, onPress}: propsB) => {

    const styles = StyleSheet.create({
        btn:{
            marginTop: 32,
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            backgroundColor: bcolor ?? "#fff",
            borderRadius: 10,
            height: 55,
        },
        shadow:{
            shadowColor: '#171717',
            elevation: 3,
            shadowRadius: 10,
        },
        text:{
            color: color,
        }
    })

    return (
        <TouchableOpacity style={[styles.btn]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};





