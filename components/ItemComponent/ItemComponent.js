import React, { useState } from 'react';

import { View, StyleSheet, Text, Button, TouchableOpacity, FlatList } from 'react-native';

const ItemComponent = (props) => {
    const [refresh, setRefresh] = useState();
    let muscleList = [];

    const setList = (list) => {
        muscleList = list;
    };

    setList(props.list)

    const translateHandler = () => {
        if (muscleList[0] == 0) {
            setRefresh(muscleList);
            muscleList[1].value = 'Peitorais';
            muscleList[2].value = 'Tríceps';
        };
        if (muscleList[0] == 1) {
            setRefresh(muscleList);
            muscleList[1].value = 'Dorsais';
            muscleList[2].value = 'Bíceps';
        }
        if (muscleList[0] == 2) {
            setRefresh(muscleList);
            muscleList[1].value = 'Pernas';
            muscleList[2].value = 'Deltóides';
            muscleList[3].value = 'Panturrilhas';
        }
    };

    return (
        <TouchableOpacity style={styles.item} activeOpacity={0.3} onPress={props.click}>
            <Text style={styles.title}>Training: {props.text}</Text>
            <View style={styles.list}>
                <FlatList
                    extraData={refresh}
                    keyExtractor={(item) => { item.key }}
                    data={muscleList}
                    renderItem={({ item }) => {
                        if (item.value !== undefined) {
                            return <Text style={styles.texts}> - {item.value}</Text>
                        }
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
        justifyContent: 'space-between'
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