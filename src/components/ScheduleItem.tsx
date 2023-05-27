import React, { memo } from "react";
import { View, Text} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { COLORS } from "../../constants";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";



export const ScheduleItem = (item: any) => {
        
    return(

        
        <View
            style={{
                backgroundColor: "white",
                flex: 1,
                borderRadius: 5,
                padding: 10,
                marginRight: 10,
                marginTop: 17,
            }}
        >
            
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 20,
                    backgroundColor: COLORS.orange,
                    borderRadius: 25,
                    marginLeft: 45,
                    justifyContent: 'center',
    
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                         

                    }}
                >
                    {item.pairType}
                </Text>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    flex: 1,
                }}
            >

                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        marginLeft: -2,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 12,
                        }}
                    >
                        {item.pairStart}
                    </Text>

                    <Text
                        style={{
                            fontSize: 10,
                            color: COLORS.gray,
                        }}
                    >
                        {item.pairEnd}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "column",
                        position: 'relative',
                        marginLeft: 8,
                    }}
                >

                    <Text
                        style={{
                            flexShrink: 1,
                            fontSize: 15,
                            
                        }}
                    >
                        {item.pairTitle}
                    </Text>

                    <View 
                        style={{
                            flexDirection: 'row',
                            flex: 1, 
                            marginTop: 3,
                        }}
                    >

                        <Ionicons name="person" size={9} color={COLORS.gray} />

                        <Text style={{color: COLORS.gray, fontSize: 9, marginLeft: 5,}}>{item.teacher}</Text>

                    </View>

                    <View 
                        style={{
                            flexDirection: 'row',
                        }}
                    >

                        <Ionicons name="navigate" size={9} color={COLORS.gray} />

                        <Text style={{color: COLORS.gray, fontSize: 9, marginLeft: 5}}>{item.auditory}</Text>

                    </View>

                </View>

            </View>

        </View>
    );

}