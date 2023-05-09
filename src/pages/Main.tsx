import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ActivityIndicator
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import {StatusBar} from "expo-status-bar";
import {Btn} from "../components/Btn";
import {authStore} from "../store/authStore";
import {observer} from 'mobx-react-lite'
import {COLORS, FONTS, images, SIZES} from "../../constants";
import Menu from "../components/Menu";
import {menuStore} from "../store/menuStore";
import axios from "axios";
import Post from "../components/Post";
import Container from "../components/Container";
import { SafeAreaView } from 'react-native-safe-area-context'


export const Main = observer(() => {

    const [isLoading, setIsLoading] = useState(false)

    const exit  =() => {
        authStore.token = ''
        authStore.Username = ''
        authStore.Password = ''
    }

    if(isLoading){
        return(
            <SafeAreaView
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 50
                }}
            >
                <ActivityIndicator size={"large"}/>

            </SafeAreaView>
        )
    }

    return (

        <View>
            <StatusBar hidden={false} />
            <View
                style={{
                    marginTop: 35,
                }}
            >
                
            </View>



            <StatusBar hidden={true}/>

        </View>

    );
})

const styles = StyleSheet.create({
    all:{
        backgroundColor: 'white'
    },
    cn:{
        flex:1,
        paddingTop: 102,
        backgroundColor: COLORS.white,
    },
    footer:{
        backgroundColor: "#fff",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    burger:{
      height: 50,
      width:50,
    },
    icon:{
        marginTop: -50,
        marginRight: 335,
    }
})

