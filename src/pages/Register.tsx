import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import {Btn} from "../components/Btn";
import {StatusBar} from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import {COLORS, SIZES, FONTS, images, icons} from "../../constants";
import {Form} from "../components/Form";
import PageContainer from "../components/PageContainer";


export const Register = ({navigation}: any) => {

    const handleExit = () => {
        navigation.goBack();
        return true;
    }

    return(
        <SafeAreaView style={styles.cn}>

            <PageContainer>
                <Ionicons name="chevron-back" size={24} color="#5090F3" style={styles.back} onPress={handleExit}/>
                <Image source={images.schedule} style={styles.img}/>
                <Text style={styles.text}>Registration</Text>
                <Text style={styles.p}>сохраняйте свое расписание)))</Text>
                <Form placeholder="Username"/>
                <Form placeholder="Password"/>
                <Form placeholder="Confirm password"/>
                <Btn title="Register" bcolor="#5090F3" color="white"/>
                <StatusBar hidden={true}/>
            </PageContainer>
            
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: "center",

    },
    cn:{
        flex:1,
        alignItems: "center",
        paddingTop: 52,

    },
    img:{
        height: 146,
        width: 146
    },
    text:{
        fontSize: 26,
        color: "#5090F3",
    },
    p:{
        fontSize: 14,
        color: "#757575",
    },
    line:{
        height: 1,
        borderWidth: 0.5,
        width: 137,
        borderColor: "#757575",
        marginLeft: 12,
        marginRight: 12,
    },
    back:{
        marginRight: 330
    }

});
