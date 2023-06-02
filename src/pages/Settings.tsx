import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS, FONTS, images, SIZES } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Container from '../components/Container';
import { ScheduleItem } from '../components/ScheduleItem';
import { isToken, logout } from '../store/auth/auth.helper';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { authSlice } from '../store/auth/authSlice';
import SelectList from 'react-native-dropdown-select-list';
import { useGetGroupQuery, useGetScheduleQuery } from '../api/api';
import { scheduleSlice } from '../store/schedule/schedule.slice';
import { useAppSelector } from '../hooks/useAppSelector';

export const Settings = () => {
    const dispatch = useAppDispatch();

    const { removeUser } = authSlice.actions;
    const { setData } = scheduleSlice.actions;

    const { data } = useAppSelector(state => state.schedule);

    const handleLogout = async () => {
        await logout();
        console.log('kek');
        dispatch(removeUser());
    };

    const [faculty, setFaculty] = React.useState('');
    const [group, setGroup] = React.useState('');
    const { data: scheduleData } = useGetScheduleQuery(group);

    useEffect(() => {

        if (scheduleData?.data && group !== '') {
            dispatch(setData({}))
            // debugger    
            dispatch(setData(scheduleData.data));
        } else {
            dispatch(setData({}));
        }
    }, [scheduleData, dispatch]);

    const onSubmit = () => {
        setGroup('');
        dispatch(setData({}));
    };

    const faculties = [
        { key: 'РТС', value: 'РТС' },
        { key: 'И', value: 'ИКСС' },
        { key: 'ИС', value: 'ИСиТ' },
    ];

    const groups = {
        РТС: [
            { key: 'ИКТ-211', value: 'ИКТ-211' },
            { key: 'ИКТ-212', value: 'ИКТ-212' },
            { key: 'ИКТ-213', value: 'ИКТ-213' },
        ],
        И: [
            { key: 'ИКПИ-12', value: 'ИКПИ-12' },
            { key: 'ИКПИ-13', value: 'ИКПИ-13' },
            { key: 'ИКПИ-14', value: 'ИКПИ-14' },
        ],
        ИС: [
            { key: 'ИСТ-011', value: 'ИСТ-011' },
            { key: 'ИСТ-012', value: 'ИСТ-012' },
            { key: 'ИСТ-013', value: 'ИСТ-013' },
        ],
    };

    return (
        <View>
            <StatusBar hidden={false} />

            <SafeAreaView
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                }}
            >
                <Image
                    source={images.ItsMe}
                    style={{
                        height: 100,
                        width: 100,
                        marginBottom: 5,
                        borderRadius: 50,
                    }}
                />
                <Text
                    style={{
                        fontSize: SIZES.h1,
                        fontWeight: 'bold',
                        marginBottom: 2,
                    }}
                >
                    Егор Перебейнос
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: 180,
                    }}
                >
                    <Text
                        style={{
                            fontSize: SIZES.body4,
                            color: COLORS.gray,
                            marginRight: 25,
                        }}
                    >
                        @tige21
                    </Text>
                    <Text
                        style={{
                            fontSize: SIZES.body4,
                            color: COLORS.gray,
                        }}
                    >
                        {' '}
                        ИКПИ-14
                    </Text>
                </View>

                <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20 }}>
                    <View
                        style={{
                            width: 350,
                            paddingHorizontal: 20,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 10,
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.red,
                                fontSize: 15,
                            }}
                        >
                            Выйти
                        </Text>
                    </View>
                </TouchableOpacity>

                <View
                    style={{
                        width: '100%',
                        paddingHorizontal: 32,
                        marginVertical: 30,
                    }}
                >
                    <SelectList
                        setSelected={setFaculty}
                        data={faculties}
                        placeholder={'Выберите факультет'}
                        search={false}
                    />

                    {faculty !== '' && (
                        <View
                            style={{
                                marginTop: 20,
                            }}
                        >
                            <SelectList setSelected={setGroup} data={groups[faculty]} placeholder={'Выберите группу'} />
                        </View>
                    )}

                    {/* <TouchableOpacity onPress={onSubmit} style={{ marginTop: 20 }}>
                        <View
                            style={{
                                width: 350,
                                paddingHorizontal: 20,
                                backgroundColor: '#FFFFFF',
                                borderRadius: 10,
                                height: 45,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.red,
                                    fontSize: 15,
                                }}
                            >
                                Очистить группу
                            </Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </SafeAreaView>
        </View>
    );
};
