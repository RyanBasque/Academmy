import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const ItemComponent = (props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>Training: {props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: 180,
        height: 180,
        backgroundColor: 'rgb(230, 230, 230)',
        borderRadius: 10,
        marginRight: 10,
        padding: 10
    },
    title: {
        color: 'rgb(91, 198, 110)',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default ItemComponent;