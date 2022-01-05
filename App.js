import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import { LecHall, HeaderBar, filterButton, dateButton } from './Components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './assets/colors/colors';

import Home from './Home';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import FilterPage from './FilterPage';
import DatePage from './DatePage';

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
        <Stack.Screen name="FilterPage" 
        component={FilterPage} 
        options = {{
          headerShown: false,
        }}
        />
        <Stack.Screen name="DatePage" 
        component={DatePage} 
        options = {{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}