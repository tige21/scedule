import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Settings } from "../pages/Settings";
import { Main, Schedule } from "../pages/Schedule";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS, icons } from "../../constants";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Teachers from "../pages/Teachers";

const Tab = createBottomTabNavigator();

export const TabN = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarActiveTintColor: COLORS.gray,
        tabBarInactiveTintColor: COLORS.gray3,
        tabBarShowLabel: false,
        lazy: true,
        tabBarStyle: {
          height: "10%",
        
          position: "absolute",
          zIndex: 40,
        },
      })}
    >
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="timetable"
                size={focused ? 26 + 3 : 26}
                color={focused ? COLORS.primary : COLORS.gray}
              />

              <Text
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 11,
                  color: focused ? COLORS.primary : COLORS.gray3,
                }}
              >
                Расписание
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Teachers"
        component={Teachers}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5
                name="chalkboard-teacher"
                size={focused ? 26 + 3 : 26}
                color={focused ? COLORS.primary : COLORS.gray}
              />

              <Text
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 11,
                  color: focused ? COLORS.primary : COLORS.gray3,
                }}
              >
                Преподаватели
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="settings-outline"
                size={focused ? 26 + 4 : 26}
                color={focused ? COLORS.primary : COLORS.gray}
              />

              <Text
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 11,
                  color: focused ? COLORS.primary : COLORS.gray3,
                }}
              >
                Настройки
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
