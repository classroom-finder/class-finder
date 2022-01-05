import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './assets/colors/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

AntDesign.loadFont();
Ionicons.loadFont();

export class LecHall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <View style={styles.lecHallItem}>
                <View style={styles.imageView}>
                    <Image source={require("./assets/mc-building-icon.jpg")}
                    style={{width: 70, height: 60, borderRadius: 10,}}></Image>
                </View>

                <View style={styles.textView}>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.distance}</Text>
                    <Text>{this.props.availability} </Text>
                </View>
                <View style={styles.favouriteView}>
                    <Image source={require("./assets/heart-icon.png")} style={{width: 20, height: 20}}/>
                </View>
            </View>
        );
    }
}

// This is the header also includes the calendar and filter button (need to figure that out)
export class HeaderBar extends React.Component { 
    render() {
        return(
            <View style={styles.headerBar}>
                <Text style={styles.headerBarText}>LECTURE HALLS</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('DatePage')}>
                    <AntDesign style={styles.dateIcon} name="calendar" size={30} color={colors.textBlack} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('FilterPage')}>
                    <Ionicons style={styles.filterIcon} name="filter" size={30} color={colors.textBlack} />
                </TouchableOpacity>
                
            </View>
        );
    }
}

export class filterButton extends React.Component {
    render() {
        return 
        <View>

        </View>
    }
}

export class dateButton extends React.Component {
    render() {
        return
        <View>

        </View>
    }
}


const styles = StyleSheet.create({
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

    lecHallItem: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 17,
        margin: 10,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 20,
    },

    imageView: {
      
    },

    textView: {

    },

    favouriteView: {
    },

});




