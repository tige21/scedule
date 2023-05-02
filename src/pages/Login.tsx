import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {Form} from "../components/Form";
import {Btn} from "../components/Btn";
import {StatusBar} from "expo-status-bar";
import { observer } from "mobx-react-lite";
import { authStore } from "../store/authStore";
import {COLORS, SIZES, FONTS, images, icons} from "../../constants";

export const Login = observer(({navigation}: any)=>{

    const registerLoading = () => {
        navigation.navigate('Register')
    }

    const user = (userInput: string) => {
        authStore.Username = userInput
    }

    return(
        <SafeAreaView style={styles.cn}>
            <Image style={styles.img} source={images.schedule}/>
            <Text style={{fontSize: SIZES.h1}}>Login</Text>
            <Text style={styles.p}>сохраняйте свое расписание)))</Text>
            <Form placeholder="Username" onChangeText={(text:string) => authStore.user(text)}/>
            <Form placeholder="Password" onChangeText={(text:string) => authStore.password(text)}/>
            <Btn title="Login" color="#5090F3" onPress={() => authStore.auth(authStore.Password, authStore.Username)}/>

            <View style={{display: "flex", flexDirection: "row", paddingTop: 33, alignItems: "center"}}>
                <View style={styles.line}></View>
                <Text style={[styles.p]}>atau</Text>
                <View style={styles.line}></View>
            </View>

            <Btn title="Register" bcolor="#fff" color="#5090F3" onPress={registerLoading}/>
            <StatusBar hidden={true}/>




        </SafeAreaView>
    );

})

const styles = StyleSheet.create({
    cn:{
        flex:1,
        alignItems: "center",
        paddingTop: 102,
        backgroundColor: "#FFFFFF"
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
    form:{
        width: 328,
        height: 64,
        marginTop: 24,
        paddingTop: 22,
        paddingBottom: 23,
        paddingLeft: 22,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#5090F3',
    }



});