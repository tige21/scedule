import React,{FC} from 'react';
import {View,Text} from "react-native";
import {observer} from "mobx-react-lite";
import {menuStore} from "../store/menuStore";
import {FONTS, SIZES} from "../../constants";

interface props{
    title: string,
    data: Array<any>,
    styleMenuActive: object,
    styleMenuOff: object,
}

const Menu: FC<props> = observer(({title, data, styleMenuActive,styleMenuOff}) => {
    return (
        <View
            style={menuStore.pressBurger ? styleMenuActive : styleMenuOff}
        >
            <View>
                <Text style={{
                    fontSize: SIZES.h1,
                }}>
                    {title}
                </Text>
                {data.map(item => {
                    return (
                        <View key={item.id}>
                            <Text>{item.title1}</Text>
                            <Text>{item.title2}</Text>
                        </View>)

                })}
            </View>
        </View>
    );
});

export default Menu;