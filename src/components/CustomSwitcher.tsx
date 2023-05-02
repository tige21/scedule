import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, View, TouchableOpacity, Animated, Text} from "react-native";
import {COLORS, SIZES, FONTS, images, icons} from "../../constants";
import {authStore} from "../store/authStore";
import {observer} from "mobx-react-lite";


export const CustomSwitcher = observer(() => {
    return (
        <TouchableOpacity
            onPress={() => authStore.setPress()
            }

        >
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={
                    authStore.press ? styles.switchOn : styles.switchOff
                }>
                    <View style={{
                        ...styles.dot,
                        backgroundColor: authStore.press ? COLORS.white : COLORS.gray
                    }}>

                    </View>

                </View>
                <Text style={{
                    marginLeft: SIZES.base,
                    color: authStore.press ? COLORS.primary : COLORS.gray
                }}>запомнить</Text>
            </View>

        </TouchableOpacity>
    );
})

const styles = StyleSheet.create({
    switchOn:{
        height: 20,
        width: 40,
        paddingRight: 2,
        justifyContent: "center",
        alignItems: "flex-end",
        borderRadius: 10,
        backgroundColor: COLORS.primary
    },
    switchOff:{
        height: 20,
        width: 40,
        paddingLeft: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: 10,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.gray
    },
    dot:{
        width: 12,
        height: 12,
        borderRadius: 6,
    }


})
