import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screeps/FeedScreen";
import HomeScreen from "../screeps/HomeScreen";
import React from 'react';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
    <Stack.Navigator initialRouteName="HomeScreen">
       
        <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen} 
            options={{ title: 'Bienvenido' }}
    
            />
            <Stack.Screen 
            name="FeedScreen"
            component={FeedScreen} 
            />
         </Stack.Navigator>
    )

}
export default MainStackNavigator