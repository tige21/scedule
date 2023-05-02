import React from 'react';
import {View, Image, Text} from "react-native";

const Post = ({avatar, name, info, id}: any) => {
    return (
        <View
            style={{
                flexDirection: 'column'
            }}
        >
            <Image
                source={{uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1028.jpg'}}
                style={{
                    height: 80,
                    width: 80,
                }}
            />
            <Text>
                {name}
            </Text>
            <Text>
                {info}
            </Text>
        </View>
    );
};

export default Post;