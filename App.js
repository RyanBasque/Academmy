import React, { useState } from 'react';

import { StyleSheet, View, FlatList, ScrollView, Text } from 'react-native';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';
import ItemComponent from './components/ItemComponent/ItemComponent';
import ExerciseComponent from './components/ExerciseComponent/ExerciseComponent';

const App = () => {
  const [trainings, setTrainings] = useState([
    { value: 'A', key: 'ahsdiha' },
    { value: 'B', key: 'ahdiha' },
    { value: 'C', key: 'hdiha' }
  ]);

  const [muscle, setMuscle] = useState([
    [0, { value: 'Breastplate', key: '1' }, { value: 'Triceps', key: '2' }],
    [1, { value: 'Dorsal', key: '3' }, { value: 'Biceps', key: '4' }],
    [2, { value: 'Legs', key: '5' }, { value: 'Deltoids', key: '6' }, { value: 'Calfs', key: '7' }],
  ]);

  const [showExercises, setShowExercises] = useState(false);

  const [trainingList, setTrainingList] = useState(null);

  const showExercisesContainer = (index) => {
    setShowExercises(true);

    setTrainingList([[trainings[index].value], [...muscle[index]]]);
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderComponent />
        <BannerComponent />
        <View style={styles.itemContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={trainings}
            renderItem={({ item, index }) => {
              return <ItemComponent text={item.value} list={muscle[index]} click={() => { showExercisesContainer(index) }} />
            }}
          />
        </View>
        <View style={styles.exerciseContainer}>
          {showExercises ? <ExerciseComponent list={trainingList} /> : null}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  itemContainer: {
    width: '100%',
    height: 220,
    paddingTop: 20,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  exerciseContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;