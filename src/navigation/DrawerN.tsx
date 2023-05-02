import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Kek} from "../pages/Kek";
import {Settings} from "../pages/Settings";
import { Feed } from "../pages/Feed";
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from "./TabNavigator";
import {Main} from "../pages/Main";


const Drawer = createDrawerNavigator()


export const DrawerN = () => {
    return(

        <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="Article" component={Settings} />
        </Drawer.Navigator>

    
    )

}