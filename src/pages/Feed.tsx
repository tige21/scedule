import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

export const Feed = () => {
    return (
        <SafeAreaView style={styles.cn}>
            <Text>
                Здесь могла быть ваша реклама...
            </Text>
            <StatusBar hidden={true}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    cn: {
        flex: 1,
        alignItems: "center",
        paddingTop: 102,
        backgroundColor: '#fff',
    }
})