import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Introduction from '../diseaseinfo/intro';
import History_One from '../diseaseinfo/history1';
import History_Two from '../diseaseinfo/history2';
import Acne from '../diseaseinfo/acne';
import Psoriasis from '../diseaseinfo/psoriasis';
import Nail_Fungus from '../diseaseinfo/nailfungus';
import Eczema from '../diseaseinfo/eczema';
import Tips from '../diseaseinfo/tips';
import ResourcesScreen from './learningResourcesScreen'

function LearningResourcesStack(){
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Learning Resources" component={ResourcesScreen}/>
        <Stack.Screen name="Introduction" component={Introduction}/>
        <Stack.Screen name="History1" component={History_One}/>
        <Stack.Screen name="History2" component={History_Two}/>
        <Stack.Screen name="Acne" component={Acne}/>
        <Stack.Screen name="Eczema" component={Eczema}/>
        <Stack.Screen name="Psoriasis" component={Psoriasis}/>
        <Stack.Screen name="NailFungus" component={Nail_Fungus}/>
        <Stack.Screen name="Tips" component={Tips}/>
      </Stack.Navigator>
    );
  }

export default LearningResourcesStack;