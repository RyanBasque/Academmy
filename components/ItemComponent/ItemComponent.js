import React, { useState } from 'react';

import { View, StyleSheet, Text, Button, TouchableOpacity, FlatList } from 'react-native';

const ItemComponent = (props) => {
    const [refresh, setRefresh] = useState();
    let muscleList = [];

    const setList = (list) => {
        muscleList = list;
    };

    setList(props.list);

    const translateHandler = () => {
        if (muscleList[0].value == 'Breastplate') {
            setRefresh(muscleList);
            muscleList[0].value = 'Peitorais';
            muscleList[1].value = 'Tríceps';
        };
        if (muscleList[0].value == 'Dorsal') {
            setRefresh(muscleList);
            muscleList[0].value = 'Dorsais';
            muscleList[1].value = 'Bíceps';
        };
        if (muscleList[0].value == 'Legs') {
            setRefresh(muscleList);
            muscleList[0].value = 'Pernas';
            muscleList[1].value = 'Deltóides';
            muscleList[2].value = 'Panturrilhas';
        };
    };

    return (
        <TouchableOpacity style={styles.item} activeOpacity={0.3} onPress={props.click}>
            <Text style={styles.title}>Training: {props.text}</Text>
            <View style={styles.list}>
                <FlatList
                    extraData={refresh}
                    keyExtractor={(item) => { item.key }}
                    data={muscleList}
                    renderItem={({ item, index }) => {
                        return <Text style={styles.texts}> - {item.value}</Text>

                    }}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={translateHandler} activeOpacity={0.3}>
                <Text style={{ color: 'rgb(91, 198, 110)', fontWeight: 'bold' }}>Translate</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        width: 180,
        height: 180,
        backgroundColor: 'rgb(230, 230, 230)',
        borderRadius: 10,
        marginRight: 10,
        paddingTop: 10,
        justifyContent: 'space-between',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    title: {
        color: 'rgb(91, 198, 110)',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    texts: {
        fontSize: 15
    },
    list: {
        paddingLeft: 10,
        paddingRight: 10
    },
    button: {
        width: '100%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 13,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    }
});

export default ItemComponent;