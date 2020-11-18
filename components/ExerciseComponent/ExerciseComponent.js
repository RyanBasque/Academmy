import { registerRootComponent } from 'expo';
import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const ExerciseComponent = (props) => {

    const exercises = [
        ['Peck Deck ', 'Supino Reto ', 'Supino Inclinado ', 'Supino Declinado '],
        ['Pulley', 'Testa', 'Francês', 'Coice'],
        ['Pulley Costas', 'Pulley Frente', 'Rem. Curvado', 'Rem. Cavalinho', 'Rem. Unilateral'],
        ['Rosca Direita', 'Rosca Scott', 'Rosca Alterada', 'Rosca Concentrada'],
        ['Extensora', 'Leg. Press 45°', 'Hack', 'Flex Horizontal', 'Abdução', 'Adução'],
        ['Elevação Frontal', 'Elevação Lateral', 'P. D. Inverso', 'Desenv. Máquina'],
        ['Vertical'],

    ];

    const list = [...props.list];

    const setList = () => {
        if (props.list[0] == "A") {
            list.push([exercises[0], exercises[1]]);
        };
        if (props.list[0] == "B") {
            list.push([exercises[2], exercises[3]]);
        };
        if (props.list[0] == "C") {
            list.push([exercises[4], exercises[5], exercises[6]]);
        };
    };

    setList();

    console.log(list);

    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.title}>Training: {props.list[0]}</Text>
            {list[1].map(
                (item, index) => {
                    if (item.value !== undefined) {
                        return (
                            <View>
                                <Text key={index} style={styles.texts}> - {item.value}</Text>
                                {
                                    list[2].map(
                                        (item, index) => {
                                            return item.map((a, index) => { console.log(a); return <Text key={a}>{a}</Text> })
                                        }
                                    )
                                }
                            </View>
                        )
                    }
                }
            )}


        </View>
    );
};

const styles = StyleSheet.create({
    exerciseContainer: {
        width: '95%',
        marginBottom: 30,
        backgroundColor: 'rgb(230, 230, 230)',
        borderRadius: 10,
        padding: 15,
        paddingBottom: 20
    },
    title: {
        color: 'rgb(91, 198, 110)',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    texts: {
        fontSize: 17,
        marginTop: 10
    },
});

export default ExerciseComponent;