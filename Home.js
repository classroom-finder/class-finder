import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { LecHall, HeaderBar, filterButton, dateButton } from './Components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './assets/colors/colors';

// Need to import the new_json.json but idk how to do that so we will get back to that later

export default Home = ({ navigation }) => {
    return (
    <View style={styles.container}>
       <View style={styles.headerBar}>
          <Text style={styles.headerBarText}>LECTURE HALLS</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('DatePage')}>
              <AntDesign style={styles.dateIcon} name="calendar" size={30} color={colors.textBlack} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('FilterPage')}>
              <Ionicons style={styles.filterIcon} name="filter" size={30} color={colors.textBlack} />
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

  headerBarText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    left: 30,
},

headerBar: {
    paddingTop: 80,
    paddingBottom: 20,
    flexDirection: 'row',
},
dateIcon: {
    paddingTop: 40,
    right: 260,
},
filterIcon: {
    paddingTop: 40,
    left: 15,
},

  textInList: {
    fontSize: 16,
    color: "black",
    fontFamily: 'Roboto-Regular',
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