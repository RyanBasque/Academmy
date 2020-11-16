import React, { useState } from 'react';

import { StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';
import ItemComponent from './components/ItemComponent/ItemComponent';

const App = () => {
  const [trainings, setTrainings] = useState([{ value: 'A', key: 'ahsdiha' }, { value: 'B', key: 'ahdiha' }, { value: 'C', key: 'hdiha' }]);
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <BannerComponent />
      <View style={styles.itemContainer}>
        <FlatList
          horizontal
          data={trainings}
          renderItem={({ item }) => {
            return <ItemComponent text={item.value} />
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