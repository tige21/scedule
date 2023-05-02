import React from "react";
import { View, Text} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { COLORS } from "../../constants";
import { Ionicons } from '@expo/vector-icons';



export const ScheduleItem = () => {
    
    const render = () => {

    }
    
    return(
        <View
            style={{
                paddingTop: 15,
                paddingBottom: 15,
                position: 'relative',
                left: 15,

            }}
        >
            
            <View
                style={{
                    height: 20,
                    width: 70,
                    backgroundColor: COLORS.orange,
                    borderRadius: 25,
                    position: 'relative',
                    left: 60,
                    justifyContent: 'center',
                    alignItems: 'center'
                    
    
                }}
            >
                <Text
                    style={{
                        color: COLORS.white
                    }}
                >
                    Лекция
                </Text>
            </View>

            <View
                style={{
                    flexDirection: "row",
                }}
            >

                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-end'
                        
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                        }}
                    >
                        10:00
                    </Text>

                    <Text
                        style={{
                            fontSize: 15,
                            color: COLORS.gray,
                        }}
                    >
                        11:30
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "column",
                        position: 'relative',
                        left: 10
                    }}
                >

                    <Text
                        style={{
                            fontSize: 20,
                        }}
                    >
                        Математика
                    </Text>

                    <View 
                        style={{
                            flexDirection: 'row',
                            
                        }}
                    >

                        <Ionicons name="person" size={15} color={COLORS.gray} />

                        <Text style={{color: COLORS.gray, fontSize: 13, marginLeft: 5}}>Сорокин Иван Артёмович</Text>

                    </View>

                    <View 
                        style={{
                            flexDirection: 'row'
                        }}
                    >

                        <Ionicons name="navigate" size={15} color={COLORS.gray} />

                        <Text style={{color: COLORS.gray, fontSize: 13, marginLeft: 5}}>120/1, просп.Большевиков, 22</Text>

                    </View>

                </View>

            </View>

        </View>

    );

}