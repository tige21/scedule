import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Main} from "../pages/Main";
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import {Feed} from "../pages/Feed";
import {NavigationContainer} from "@react-navigation/native";


const Tab = createMaterialBottomTabNavigator()

// Убран в долгий ящик...

export const TabNavigator = () => {

    return (

        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#5090F3'}}
        >
            <Tab.Screen
                name="Main"
                component={Main}
                options={{
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color="black"/>
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Feed}
                options={{
                    tabBarColor: '#028960',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="bell" size={24} color="black" />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};


