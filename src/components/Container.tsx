import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children }: any) => {
    return (
        <SafeAreaView
            style={{
                position: 'absolute',
                left: 20,
                right: 20,
                alignItems: 'center',
                width: wp(90),
                height: hp(100),
                top: 15,
            }}
        >
            {children}
        </SafeAreaView>
    );
};

export default Container;
