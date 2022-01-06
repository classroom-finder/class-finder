import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, SafeAreaView, Modal, TouchableOpacity, TextInput} from 'react-native';

const filterIcon = require('./assets/filter-icon.png');
const calendarIcon = require('./assets/calender-icon.png');


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

// The Filter Button
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

            <Modal 
            visible={this.state.show}
            transparent={this.state.show}>
                <View style={{backgroundColor: '#000000aa', flex:1}}>
                    <View style ={styles.filterPopup}>
                        <Text style={styles.Title}> Filter</Text>
                        <FavouritesButton />
                        <FilterEntries />
                        <ApplyButton />
                        <Button title = "Close Filter" onPress = {()=>{this.setState({show:false})}}/>
                    </View>
                </View>

            </Modal>
            </View>

        )
    }
}

// The Time Button
export class TimeButton extends React.Component{
    constructor(){
        super();
        this.state = {show:false}
    }
    render() {
        return(
            <View>
            {/* <TouchableOpacity style={styles.button} onPress={()=>{this.setState({show:true})}}>
                <Image source={calendarIcon} style={{width: 30, height: 30, marginRight: -5,}}></Image>
                <Text style={styles.buttonText}>Time</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.button} onPress={()=>{this.setState({show:true})}}>
                <Image source={calendarIcon} style={{width: 30, height: 30, marginRight: -5,}}></Image>
                <Text style={styles.buttonText}>Time</Text>
            </TouchableOpacity>


            <Modal 
            visible={this.state.show}
            transparent={this.state.show}>
                <View style={{backgroundColor: '#000000aa', flex:1}}> 
                    <View style ={styles.filterPopup}>
                        <Text style={styles.Title}>Dates and Times</Text>
                        <DateEntries />
                        <ApplyButton />
                        <Button title = "Close Filter" onPress = {()=>{this.setState({show:false})}}/>
                    </View>
                </View>

            </Modal>
            </View>

        )
    }
}

export class FavouritesButton extends React.Component{
    render() {
        return(
            <View>
                <TouchableOpacity styles = {styles.button}>
                    {/*<Image source = {checkboxIcon} style = {{width:10, height:10}}></Image>*/}
                    <Text style = {styles.favouritesOnlyText}>Favourites only</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class FilterEntries extends React.Component {
    constructor() {
        super();
        this.state = {
            building: '',
            maxDistance: ''
        }
    }
    render() {
        return(
            <View>
                <View style={styles.EachRow}>
                <Text> Preference of Building</Text>
                <TextInput
                    multiline
                    style = {styles.textInput}
                    placeholder='Building'
                    onChangeText={(input) => {this.setState ({building:input})}} />
                </View>

                <View style={styles.EachRow}>
                    <Text> Distance</Text>
                    <TextInput
                    multiline
                    style = {styles.textInput}
                    placeholder='Enter Max Distance'
                    onChangeText={(input) => {this.setState ({maxDistance:input})}} />
                </View>    
            </View>
        )
    }
}

// this is the stuff for entering dates
class DateEntries extends React.Component {
    constructor() {
        super();
        this.state = {
            month: '',
            day: '',
            startHour: '',
            startMinute: '',
            endHour:'',
            endMinute: ''
        }
    }
    render() {
        return(
            <View>

                <View style={styles.EachRow}>
                    <Text>Month</Text>
                    <TextInput 
                        class="month" 
                        multiline
                        style={styles.textInput}
                        placeholder=' Enter month here (2 digits)'
                        onChangeText={(input) => {this.setState ({month:input})}}
                    />
                </View>

                <View style={styles.EachRow}>
                    <Text>Day</Text>
                    <TextInput  
                        multiline
                        style={styles.textInput}
                        placeholder=' Enter day here (2 digits)'
                        onChangeText={(input) => {this.setState ({day:input})}}
                    />
                </View>     

                <View style={styles.EachRow}>
                    <Text>Start </Text>
                    <Text>Hour</Text>
                    <TextInput  
                        multiline
                        style={styles.textInput} 
                        placeholder=' (2 digits) '
                        onChangeText={(input) => {this.setState ({startHour:input})}}
                    />  

                    <Text style={styles.Minute}>     Minute</Text>
                    <TextInput  
                        multiline
                        style={styles.textInput} 
                        placeholder=' (2 digits)'
                        onChangeText={(input) => {this.setState ({startMinute:input})}}
                    />
                </View>

                <View style={styles.EachRow}>
                    <Text>End </Text>
                    <Text>Hour</Text>
                    <TextInput  
                        multiline
                        style={styles.textInput} 
                        placeholder=' (2 digits) '
                        onChangeText={(input) => {this.setState ({endHour:input})}}
                    />  

                    <Text style={styles.Minute}>      Minute</Text>
                    <TextInput  
                        multiline
                        style={styles.textInput} 
                        placeholder=' (2 digits)'
                        onChangeText={(input) => {this.setState ({endMinute:input})}}
                    /> 
                </View>            
            </View>
        )
    }
}

export class ApplyButton extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity styles = {styles.button}>
                    <Text style = {styles.applyText}>Apply</Text>
                </TouchableOpacity>
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

    Title: {
        paddingTop: 10,
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
    },


    EachRow: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingTop: 30,
        padding: 15,
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
      },

    filterPopup:{
        width: 313,
        height: 394,
        left: 50,
        top: 50,
        backgroundColor: '#FED440',
        borderRadius:33,
        borderWidth: 1
    },

    favouritesOnlyText:{
        color: 'black',
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "center",
        paddingTop: 20
    },
    textInput:{
        color: 'black',
        fontSize: 14,
        fontWeight: "normal",
        left: 5,
    },

    applyText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
    }

});







