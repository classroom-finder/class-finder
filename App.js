import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { LecHall, HeaderBar, filterButton, dateButton } from './Components';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <HeaderBar/>
      </View>

      <View style={styles.filterAndTimeBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Time</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>Filter!</Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.listHalls}>
        <FlatList
        showsVerticalScrollIndicator ={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LecHall name={item.title} distance={item.distance} availability={item.availability}/>
        )}>
        </FlatList>
      </SafeAreaView>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FED440',
    opacity: 0.83,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },

  textInList: {
    fontSize: 16,
    color: "black",
  },

  listHalls: {
    width: '90%'
  },

  listItem: {
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    paddingVertical: 30,
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 10,
    padding: 20,
  },

  filterAndTimeBar: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  }


});

const DATA = [
  {
    id: 'stc0060',
    title: 'STC Room 0060',
    distance: '500 m',
    availability: '9:00 - 10:30',
  },
  {
    id: 'rch0201',
    title: 'RCH Room 0201',
    distance: '600 m',
    availability: '9:00 - 10:30',
  },
  {
    id: 'mc4023',
    title: 'MC Room 4023',
    distance: '700 m',
    availability: '9:00 - 10:30',
  },
  {
    id: 'mc4021',
    title: 'MC Room 4021',
    distance: '700 m',
    availability: '9:00 - 10:30',
  },
  {
    id: 'mc4020',
    title: 'MC Room 4020',
    distance: '700 m',
    availability: '9:00 - 10:30',
  },
  {
    id: 'mc4025',
    title: 'MC Room 4025',
    distance: '700 m',
    availability: '9:00 - 10:30',
  },
  {
    id: 'mc4029',
    title: 'MC Room 4029',
    distance: '700 m',
    availability: '9:00 - 10:30',
  },
];