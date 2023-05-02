import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    SafeAreaView,
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
import {Picker} from '@react-native-picker/picker';
import {COLORS, FONTS, images, SIZES} from "../../constants";
import Menu from "../components/Menu";
import {menuStore} from "../store/menuStore";
import {DrawerN} from "../navigation/DrawerN";
import axios from "axios";
import Post from "../components/Post";
import Container from "../components/Container";


export const Main = observer(() => {

    const [isLoading, setIsLoading] = useState(false)

    const FetchAll = () => {
        setIsLoading(true)
        axios.get('https://634afe02d90b984a1e344c92.mockapi.io/shedule/users')
            .then(({data}) => {
                setIsLoading(true)
                menuStore.setData(data)
            }).catch(err => {
                console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const exit  =() => {
        authStore.token = ''
        authStore.Username = ''
        authStore.Password = ''
    }
    const [selected, setSelected] = useState('')

    const [selectedLanguage, setSelectedLanguage] = useState();

    const data = [
        {key: '1', value: 'Kek'},
        {key: '2', value: 'Sfsdfsf'},
        {key: '3', value: 'Dfdsaf'},
        {key: '4', value: 'Adsf'},
        {key: '5', value: 'SFdfsdfasfd'},
        {key: '6', value: 'Sd'},
    ]

    useEffect(() => {
        FetchAll();
    },[])

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
                <FlatList refreshControl={<RefreshControl refreshing={isLoading} onRefresh={FetchAll}/>} data={menuStore.data} renderItem={({item}) =>
                {
                    return(
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                marginTop: SIZES.radius,


                            }}
                        >
                            <Image
                                source={{ uri: item.avatar }}
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                            />
                            <Text>{item.name}</Text>
                            <Text>{item.info}</Text>
                        </View>
                    )
                }}/>
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

