import React, { useEffect, useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./Main";
import { StatusBar } from "expo-status-bar";
import { observer } from "mobx-react-lite";
import SignIn from "./Authentication/SignIn";
import { TabN } from "../navigation/Tab";
import SignUp from "./Authentication/SignUp";
import { getAccessToken, isAuthenticated, isToken } from "../store/auth/auth.helper";
import Cookies from "js-cookie";
import { getAsyncStorage } from "../utils/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector } from "../hooks/useAppSelector";

const Stack = createNativeStackNavigator();

export const Start = observer(() => {

  // ios - заглушка, чтобы можно было скипнуть экран авторизации на iphone 
  const [ios, setIos] = useState(true)
  const {refreshToken} = useAppSelector(state => state.auth)

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {!ios ? (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="TabN"
              component={TabN}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});
