import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Container from '../components/Container';
import { COLORS, FONTS, images, SIZES } from '../../constants';
import { ScheduleItem } from '../components/ScheduleItem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Teachers = () => {
    return (
        <SafeAreaView>
            <StatusBar hidden={false} />
            <Container>
                {/* <Image
          source={images.ItsMe}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            position: "absolute",
            right: 0,
            top: 30,
          }}
        /> */}
            </Container>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                <Text style={{ fontSize: 25, fontWeight: '800' }}>Еще в работе</Text>
            </View>
        </SafeAreaView>
    );
};

export default Teachers;
