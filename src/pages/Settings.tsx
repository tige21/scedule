import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Container from "../components/Container";
import { ScheduleItem } from "../components/ScheduleItem";
import PageContainer from "../components/PageContainer";
import { isToken, logout } from "../store/auth/auth.helper";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { authSlice } from "../store/auth/authSlice";

export const Settings = () => {

  const dispatch = useAppDispatch()
  
  const {removeUser} = authSlice.actions

  const handleLogout = async() => {
    await logout()
    console.log('kek')
    dispatch(removeUser())
  }

  return (
    <View>
      <StatusBar hidden={false} />
    
        <SafeAreaView
        style={{
          position: "absolute",
          left: 20,
          right: 20,
          alignItems: "center",
          width: wp(90),
          height: hp(100),
          top: 15,
        }}
        >
        
        
          <Image
            source={images.Billy}
            style={{
              height: 100,
              width: 100,
              marginBottom: 5,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: SIZES.h1,
              marginBottom: 2,
            }}
          >
            Billy Harington
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: 180,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.body4,
                color: COLORS.gray,
                marginRight: 25,
              }}
            >
              @idAsswecan
            </Text>
            <Text
              style={{
                fontSize: SIZES.body4,
                color: COLORS.gray,
              }}
            >
              {" "}
              ИКПИ-14
            </Text>
          </View>

          <TouchableOpacity onPress={handleLogout} style={{}}>
            <Text
              style={{
                color: COLORS.red,
                fontSize: 15,
              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
       

        </SafeAreaView>
      
    </View>
  );
};
