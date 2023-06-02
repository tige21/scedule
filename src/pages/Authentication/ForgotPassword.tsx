import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, images } from '../../../constants';
import { StatusBar, View, Image, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import FormInput from '../../components/FormInput';
import { Btn } from '../../components/Btn';
import { useForgotMutation } from '../../api/api';

export const ForgotPassword = ({ navigation }: any) => {
    const [email, setEmail] = useState('');

    const [forgot, { data }] = useForgotMutation();

    const onSubmit = () => {
        const payload: string = email;
        forgot(payload);
        console.log('Пароль сброшен, вам придет сообщение на почту');
    };

    return (
        <SafeAreaView
            style={{
                backgroundColor: COLORS.white,
                flex: 1,
            }}
        >
            <StatusBar hidden={false} barStyle={'dark-content'} />

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons
                    name="chevron-back"
                    size={24}
                    color={COLORS.primary}
                    style={{ marginRight: 200, marginTop: 50, marginLeft: 15 }}
                />
                <Text
                    style={{
                        color: COLORS.primary,
                        fontSize: 16,
                        marginTop: 52,
                        marginLeft: -200,
                    }}
                >
                    Back
                </Text>
            </TouchableOpacity>

            <KeyboardAwareScrollView>
                <View
                    style={{
                        alignItems: 'center',
                        paddingTop: 24 * 3,
                        marginBottom: 30,
                    }}
                >
                    <Image
                        source={images.schedulelogo}
                        resizeMode="contain"
                        style={{
                            width: 250,
                            height: 57.1095571,
                        }}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.padding * 2,
                        marginTop: SIZES.base,
                    }}
                >
                    <Text
                        style={{
                            fontSize: SIZES.h2,
                            textAlign: 'center',
                        }}
                    >
                        Восстановление пароля
                    </Text>
                    <Text
                        style={{
                            fontSize: SIZES.body3,
                            textAlign: 'center',
                            marginTop: SIZES.padding,
                            color: COLORS.darkGray,
                            paddingBottom: 30,
                        }}
                    >
                        Введите email на который придет сообщение в новым паролем
                    </Text>
                </View>

                <FormInput onChangeText={setEmail} />

                <View
                    style={{
                        paddingLeft: SIZES.padding,
                        paddingRight: SIZES.padding,
                    }}
                >
                    <Btn
                        title="Сбросить пароль"
                        color={COLORS.white}
                        bcolor={COLORS.primary}
                        onPress={() => console.log('keklol')}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};
