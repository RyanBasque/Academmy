import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HeaderComponent = (props) => {
    return (
        <View style={styles.headerContainer}>
            <StatusBar backgroundColor="rgb(91, 198, 110)" />
            <Text style={{ color: '#ffff', fontSize: 23 }}>Academmy</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: '12%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(91, 198, 110)',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default HeaderComponent;