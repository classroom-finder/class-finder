import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { LecHall, HeaderBar, FilterButton } from './Components';


const calendarIcon = require('./assets/calender-icon.png');


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderBar/>
      </View>

      <View style={styles.filterAndTimeBar}>
        <TouchableOpacity style={styles.button}>
          <Image source={calendarIcon} style={{width: 30, height: 30, marginRight: -5,}}></Image>
          <Text style={styles.buttonText}>Time</Text>
        </TouchableOpacity>
        <View style={{flex: 3}}></View>
        
        <FilterButton/>
      </View>

      <View style={styles.listHalls}>
        <FlatList
        showsVerticalScrollIndicator ={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LecHall name={item.title} distance={item.distance} availability={item.availability}/>
        )}>
        </FlatList>
      </View>

    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FED440',
    opacity: 0.83,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1
  },

  textInList: {
    fontSize: 16,
    color: "black",
  },

  listHalls: {
    width: '90%',
    flex: 4
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
    alignContent: 'space-around',
    justifyContent: 'space-evenly',
    margin: 10,
    flexDirection: 'row',
    width: '85%'
  },

  button: {
    alignItems: "center",
    padding: 5,
    height: 30,
    flex: 1,
    flexDirection: 'row',
  },

  buttonText: {
    color: 'black',
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