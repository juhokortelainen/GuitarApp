import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import PracticeExercises from './components/PracticeExercises';
import PracticeDetails from './components/PracticeDetails';
import Songs from './components/Songs';
import SongDetails from './components/SongDetails';
import FindSong from './components/FindSong';
import FindSongInfo from './components/FindSongInfo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='PracticeExercises' component={PracticeExercises}/>
        <Stack.Screen name='PracticeDetails' component={PracticeDetails}/>
        <Stack.Screen name='Songs' component={Songs} />
        <Stack.Screen name='SongDetails' component={SongDetails} />
        <Stack.Screen name='FindSong' component={FindSong} />
        <Stack.Screen name='FindSongInfo' component={FindSongInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}