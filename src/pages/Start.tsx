import React from "react";
import {Login} from "./Login";
import {Register} from "./Register";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Main} from "./Main";
import {StatusBar} from "expo-status-bar";
import { authStore } from "../store/authStore";
import {observer} from 'mobx-react-lite'
import {TabNavigator} from "../navigation/TabNavigator";
import SignIn from "./Authentication/SignIn";
import { DrawerN } from "../navigation/DrawerN";
import { TabN } from "../navigation/Tab";
import SignUp from "./Authentication/SignUp";



const Stack = createNativeStackNavigator()

export const Start = observer(() => {
    const token = authStore.token
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!token ? (
                    <>
                        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
                        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                    </>

                    )
                    : (
                        <>
                            <Stack.Screen name="TabN" component={TabN} options={{headerShown: false}}/>

                        </>
                    )
                }
                </Stack.Navigator>
        </NavigationContainer>
    );
})

