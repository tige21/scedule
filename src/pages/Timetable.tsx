import React from 'react';
import {View, Text, Image, StatusBar} from "react-native";
import Container from "../components/Container";
import {COLORS, FONTS, images, SIZES} from "../../constants";
import { timeTableStore } from '../store/timeTableStore';
import { ScheduleItem } from '../components/ScheduleItem';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


const Timetable = () => {
    return (
        <View>
            <StatusBar hidden={false}/>
            <Container>

                <Image source={images.Billy} style={{height: 40, width: 40, borderRadius: 20,position: 'absolute', right: 0, top: 30}}/>

                <View
                    style={{
                        flexDirection: 'column',
                        position: 'absolute',
                        left: 0,
                        top: 70
                    }}
                >
                    <Text
                        style={{
                            fontSize: 33
                        }}
                    >
                        Доброе утро!
                    </Text>

                    <Text
                        style={{
                            color: COLORS.primary,
                            fontSize: 28,
                        }}
                    >
                        Сегодня
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.gray,
                            }}
                        >
                            25 октября
                        </Text>

                        <Text
                            style={{
                                color: COLORS.gray
                            }}
                        > • </Text>
                        
                        <Text
                            style={{
                                color: COLORS.gray
                            }}
                        >
                            2 пары
                        </Text>

                    </View>
                    
                    <ScrollView
                        style={{
                            marginTop: 20,
                            elevation: 5,
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            width: wp(90),
                    
                        }}
                    >

                        <ScheduleItem/>
                        <ScheduleItem/>

                        
                        
                        
                    </ScrollView>

                </View>

            </Container>
        </View>
    );
};

export default Timetable;