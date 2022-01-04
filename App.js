import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { LecHall, HeaderBar, filterButton, dateButton } from './Components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './assets/colors/colors';

import Home from './Home';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={Home} 
        options = {{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}