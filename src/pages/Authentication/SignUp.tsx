import React from "react";
import {View, Text, Image, TouchableOpacity, StatusBar} from "react-native";
import {COLORS, SIZES, images, icons} from "../../../constants";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormInput from "../../components/FormInput";
import {authStore} from "../../store/authStore";
import {observer} from "mobx-react-lite";
import {CustomSwitcher} from "../../components/CustomSwitcher";
import TextButton from "../../components/TextButton";
import {Btn} from "../../components/Btn";
import {Ionicons} from "@expo/vector-icons";


const SignUp = observer(({navigation}: any) => {

    const handleExit = () => {
        navigation.goBack();
        return true;
    }

    return(
        <View style={{
            backgroundColor: COLORS.white,
            flex: 1,

        }}>
            <StatusBar hidden={false}/>

            <TouchableOpacity
                style={{
                    flexDirection: 'row'
                }}
                onPress={handleExit}
            >
            <Ionicons name="chevron-back" size={24} color={COLORS.primary} style={{marginRight: 200, marginTop: 50, marginLeft: 15}}/>
                <Text
                    style={{
                        color: COLORS.primary,
                        fontSize: 16,
                        marginTop: 52,
                        marginLeft: -200,
                    }}
                >Back</Text>
            </TouchableOpacity>


                <KeyboardAwareScrollView>
                {/*Logo*/}
                <View style={{
                    alignItems: 'center',
                    paddingTop: 24,
                    marginBottom: 30,
                }}>
                    <Image source={images.schedulelogo}
                           resizeMode='contain'
                           style={{
                               width: 250,
                               height: 57.1095571,
                           }}/>
                </View>


                {/*Text*/}

                <View style={{
                    flex:1,
                    justifyContent: "center",
                    paddingHorizontal: 24 *2,
                    marginTop: 8
                }}>
                    <Text style={{
                        fontSize:22, textAlign: 'center'
                    }}>
                        Начнем
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'center',
                            marginTop: 8,
                            color: COLORS.darkGray,
                            paddingBottom: 20,
                        }}
                    >
                        Создайте аккаунт, чтобы продолжить!
                    </Text>
                </View>

                {/*Froms*/}

                <FormInput
                    label='Email'
                    placeholder=''
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center',

                            }}
                        >
                            <Image
                                source={icons.correct}
                                style={{
                                    height: 20,
                                    width:20,
                                    tintColor: authStore.Username == '' ? COLORS.gray : COLORS.green,
                                }
                                }
                            />

                        </View>
                    }
                    onChangeText={(text:string) => {authStore.user(text)}}
                />

                <FormInput
                    label='Пароль'
                    placeholder=''
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center',

                            }}
                        >
                            <Image
                                source={icons.correct}
                                style={{
                                    height: 20,
                                    width:20,
                                    tintColor: authStore.Username == '' ? COLORS.gray : COLORS.green,
                                }
                                }
                            />

                        </View>
                    }
                    onChangeText={(text:string) => {authStore.user(text)}}
                />

                <FormInput
                    label='Повторите пароль'
                    placeholder=''
                    onChangeText={(text:string) => authStore.password(text)}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 42,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => authStore.setEye()}
                        >
                            <Image
                                source={authStore.eye ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width:20,
                                    tintColor: COLORS.gray,
                                }
                                }
                            />
                        </TouchableOpacity>
                    }
                />


                {/*Main btn*/}
                <View
                    style={{
                        paddingLeft: SIZES.padding,
                        paddingRight: SIZES.padding,
                    }}
                >
                    <Btn
                        title="Зарегистрироваться"
                        color={COLORS.white}
                        bcolor={COLORS.primary}
                    />
                </View>

                {/*Sing Up*/}



            </KeyboardAwareScrollView>

        </View>
    );

})

export default SignUp;