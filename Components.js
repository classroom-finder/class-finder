import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, SafeAreaView, Modal, TouchableOpacity} from 'react-native';

const filterIcon = require('./assets/filter-icon.png');



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

export class HeaderBar extends React.Component {
    render() {
        return(
            <View style={styles.headerBar}>
                <Text style={styles.headerBarText}>LECTURE HALLS</Text>
            </View>
        );
    }
}

export class FilterButton extends React.Component{
    constructor(){
        super();
        this.state = {show:false}
    }
    render() {
        return(
            <View>
            <TouchableOpacity style={styles.button} onPress={()=>{this.setState({show:true})}}>
                <Image source={filterIcon} style={{width: 20, height: 20, marginBottom: -5}}></Image>
                <Text style={styles.buttonText}>Filter</Text>
            </TouchableOpacity>


            <Modal visible={this.state.show}>
                <View style ={styles.filterPopup}>
                    <Text> Filter</Text>
                </View>

                <Button title = "Close Filter" onPress = {()=>{this.setState({show:false})}}/>
            </Modal>

            

            </View>

        )
    }
}


const styles = StyleSheet.create({
    headerBarText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    headerBar: {
        paddingTop: 60,
        paddingBottom: 15,
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

    filterPopup:{
        width: 313,
        height: 394,
        left: 50%,
        top: 50%,
        backgroundColor: 'white',
        borderRadius:33,
        borderWidth: 1
    },
});







