import { registerRootComponent } from 'expo';
import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const ExerciseComponent = (props) => {

    const A = [
        [
            { value: 'Peck Deck', key: 'ahsdiha' },
            { value: 'Supino Reto ', key: 'ahdiha' },
            { value: 'Supino Inclinado ', key: 'hdiha' },
            { value: 'Supino Declinado ', key: 'hdha' },
            { value: 'Crucifixo Reto ', key: 'hadha' },
        ],
        [
            { value: 'Pulley', key: 'hsddiha' },
            { value: 'Testa', key: 'ahdidhaa' },
            { value: 'Francês', key: 'hddaiha' },
            { value: 'Coice', key: 'hddhaa' },
        ]
    ];

    const B = [
        [
            { value: 'Pulley Costas', key: 'hsddiaha' },
            { value: 'Pulley Frente', key: 'ahdidahaa' },
            { value: 'Rem. Curvado', key: 'hddaaiha' },
            { value: 'Rem. Cavalinho', key: 'hdsdhaa' },
            { value: 'Rem. Unilateral', key: 'hddfhaa' },
        ],
        [
            { value: 'Rosca Direita', key: 'hsxddiha' },
            { value: 'Rosca Scott', key: 'ahdidhxaa' },
            { value: 'Rosca Alterada', key: 'hddxaiha' },
            { value: 'Rosca Concentrada', key: 'hdxdhaa' },
        ]
    ];

    const C = [
        [
            { value: 'Extensora', key: 'hzsddiaha' },
            { value: 'Leg. Press 45°', key: 'ahdizdahaa' },
            { value: 'Hack', key: 'hddzaaiha' },
            { value: 'Flex Horizontal', key: 'hdzsdhaa' },
            { value: 'Abdução', key: 'hdzdfhaa' },
            { value: 'Adução', key: 'hddzzhaa' },
        ],
        [
            { value: 'Elevação Frontal', key: 'hsdzdiaha' },
            { value: 'Elevação Lateral', key: 'ahdizdahaa' },
            { value: 'P. D. Inverso', key: 'hddaaziha' },
            { value: 'Desenv. Máquina', key: 'hdszdhaa' },
        ],
        [
            { value: 'Vert.', key: 'hsddziaha' },
        ]
    ]

    const list = [...props.list];

    let exercise;

    const setList = () => {
        if (props.list[0] == "A") {
            list.push(A);
            exercise = [...list[2]]
        };
        if (props.list[0] == "B") {
            list.push(B);
            exercise = [...list[2]]

        };
        if (props.list[0] == "C") {
            list.push(C);
            exercise = [...list[2]]
        };
    };

    setList();

    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.title}>Training: {props.list[0]}</Text>
            {list[1].map(
                (item, index) => {
                    return (
                        <View>
                            <Text key={index} style={styles.texts}> - {item.value}</Text>
                            {
                                exercise[index].map(
                                    item => {
                                        return (
                                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <Text style={{ marginTop: 5 }}>    - {item.value}</Text>
                                                <Text style={{ fontSize: 12, color: 'rgb(91, 198, 110)' }}>4 Séries de 10</Text>
                                            </View>

                                        )
                                    }
                                )
                            }
                        </View>
                    )

                }
            )}
            {

            }

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
        paddingBottom: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2.65,

        elevation: 5,
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