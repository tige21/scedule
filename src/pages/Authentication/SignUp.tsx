import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, Animated, Modal } from 'react-native';
import { COLORS, SIZES, images, icons } from '../../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormInput from '../../components/FormInput';
import { observer } from 'mobx-react-lite';
// import {CustomSwitcher} from "../../components/CustomSwitcher";
import TextButton from '../../components/TextButton';
import { Btn } from '../../components/Btn';
import { Ionicons } from '@expo/vector-icons';
import { saveTokenToStorage } from '../../store/auth/auth.helper';
import { useRegisterUserMutation } from '../../api/api';
import { IRegisterDto } from '../../store/auth/auth.interface';
import { isValidEmail } from '../../utils/validate';

const SignUp = ({ navigation }: any) => {
    const [eye, setEye] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const fadeAnim = useState(new Animated.Value(0))[0];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [againPassword, setAgainPassword] = useState('');

    const [registerUser, { isError, isSuccess, error, data }] = useRegisterUserMutation();

    const validateFields = () => {
        if (!email || !password) {
            setErrorMessage('Заполните все поля');
        } else if (!isValidEmail(email)) {
            setErrorMessage('Введите правильный email');
        } else if (password.length < 6) {
            setErrorMessage('Минимальная длинна пароля - 6 символов');
        } else if (password !== againPassword) {
            setErrorMessage('Пароли должны совпадать');
        } else {
            return true;
        }
        setIsModalVisible(true);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeModal = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setIsModalVisible(false);
        });
    };

    const onSubmit = () => {
        const payload: IRegisterDto = { email, password };

        if (validateFields()) {
            console.log(payload);
            registerUser(payload);
            // navigation.goBack();
            console.log(data);
            return data;
        }
    };

    const handleExit = () => {
        navigation.goBack();
        return true;
    };

    const validPassword = () => {
        if (password !== againPassword || !againPassword) return false;
        return true;
    };

    const onChangeEye = () => {
        setEye(!eye);
    };

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                flex: 1,
            }}
        >
            <StatusBar hidden={false} />

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                }}
                onPress={handleExit}
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
                {/*Logo*/}
                <View
                    style={{
                        alignItems: 'center',
                        paddingTop: 24,
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

                {/*Text*/}

                <Modal visible={isModalVisible} transparent animationType="fade" onRequestClose={closeModal}>
                    <View style={styles.modalContainer}>
                        <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
                            <Text style={styles.errorText}>{errorMessage}</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={{ color: 'white' }}>Закрыть</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </Modal>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingHorizontal: 24 * 2,
                        marginTop: 8,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 22,
                            textAlign: 'center',
                        }}
                    >
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
                    label="Email"
                    placeholder=""
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
                                    width: 20,
                                    tintColor: isValidEmail(email) ? COLORS.green : COLORS.gray,
                                }}
                            />
                        </View>
                    }
                    onChangeText={setEmail}
                />

                <FormInput
                    label="Пароль"
                    placeholder=""
                    secureTextEntry={eye}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                            }}
                            onPress={onChangeEye}
                        >
                            <Image
                                source={eye ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray,
                                }}
                            />
                        </TouchableOpacity>
                    }
                    onChangeText={setPassword}
                />

                {/* еще одна форма для повторного ввода пароля */}
                <FormInput
                    label="Повторите пароль"
                    placeholder=""
                    secureTextEntry={true}
                    onChangeText={setAgainPassword}
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
                                    width: 20,
                                    tintColor: validPassword() ? COLORS.green : COLORS.gray,
                                }}
                            />
                        </View>
                    }
                />

                {/*Main btn*/}
                <View
                    style={{
                        paddingLeft: SIZES.padding,
                        paddingRight: SIZES.padding,
                    }}
                >
                    <Btn title="Зарегистрироваться" color={COLORS.white} bcolor={COLORS.primary} onPress={onSubmit} />
                </View>

                {/*Sing Up*/}
            </KeyboardAwareScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: COLORS.red2,
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    errorText: {
        color: 'white',
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SignUp;
