import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import {COLORS, FONTS, images, SIZES} from "../../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";
import {authStore} from "../store/authStore";
import {StatusBar} from "expo-status-bar";
import Container from "../components/Container";
import {ScheduleItem} from "../components/ScheduleItem";


export const Settings = () => {
    return (
        <View>
            <StatusBar hidden={false}/>
            <Container>
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
                        fontSize: SIZES.h2,
                        marginBottom: 2,
                    }}
                >
                    Billy Harington
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: 180
                    }}
                >
                    <Text
                        style={{
                            fontSize: SIZES.body4,
                            color: COLORS.gray,
                            marginRight: 25
                        }}
                    >@idAsswecan
                    </Text>
                    <Text
                        style={{
                            fontSize: SIZES.body4,
                            color: COLORS.gray
                        }}
                    > ИКПИ-14
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => authStore.exit()}
                    style={{


                    }}
                >
                    <Text
                        style={{
                            color: COLORS.red,
                            fontSize: 15
                        }}
                    >
                        Log out
                    </Text>
                </TouchableOpacity>

            </Container>

        </View>
    );
}