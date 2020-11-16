import React, { useState } from 'react';

import { StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';
import ItemComponent from './components/ItemComponent/ItemComponent';

const App = () => {
  const [trainings, setTrainings] = useState([
    { value: 'A', key: 'ahsdiha' },
    { value: 'B', key: 'ahdiha' },
    { value: 'C', key: 'hdiha' }
  ]);

  const [muscle, setMuscle] = useState([
    [1, { value: 'Breastplate', key: '1', refresh: false }, { value: 'Triceps', key: '2' }],
    [2, { value: 'Dorsal', key: '3' }, { value: 'Biceps', key: '4' }, { value: 'Cardiovascular', key: '5' }],
    [3, { value: 'Legs', key: '6' }, { value: 'Deltoids', key: '7' }, { value: 'Calfs', key: '8' }],
  ]);

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <BannerComponent />
      <View style={styles.itemContainer}>
        <FlatList
          horizontal
          data={trainings}
          renderItem={({ item, index }) => {
            return <ItemComponent text={item.value} list={muscle[index]} />
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
});

export default App;