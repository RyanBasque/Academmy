import React from 'react';

import { View, StyleSheet, Image } from 'react-native';

const BannerComponent = () => {
    return (
        <View style={styles.bannerContainer}>
            <Image
                source={require('../../assets/banner.png')}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        height: 235,
        width: '100%',
        backgroundColor: 'rgb(91, 198, 110)',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200
    }
});

export default BannerComponent;