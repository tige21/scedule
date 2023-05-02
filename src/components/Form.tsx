import React from "react";
import {StyleSheet, TextInput} from "react-native";

interface propsF {
    placeholder: string,
    onChangeText?: (text:string) => void,

}
export const Form =(props: propsF)=>{
    return(
        <TextInput
            style={{
                width: 328,
                height: 54,
                marginTop: 33,
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 22,
                backgroundColor: "#F4F4F7",
                borderStyle: "solid",
                borderRadius: 10,

            }} {...props}>

        </TextInput>

    );

}


