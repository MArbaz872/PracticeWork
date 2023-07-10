import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ViewPatients from "./viewpatients";
import AddPatients from "./addpatient";
import PatientAdminView from "./patients";
import {Ionicons} from '@expo/vector-icons';
import PatientDetail from "./patientdetail";


function PatientStack({navigation}){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name={"Patients"} component={PatientAdminView} options={{
            headerLeft: () =>(
              <Ionicons name="menu-outline" size={30} color={'#000000'}
              backgroundColor='#000000' onPress={() => {navigation.toggleDrawer()}}/>
              )
            }}/>
            <Stack.Screen name={"View Patients"} component={ViewPatients}/>
            <Stack.Screen name={"Add Patients"} component={AddPatients}/>
            <Stack.Screen name={"Patient Detail"} component={PatientDetail}/>
        </Stack.Navigator>
        )
}

export default PatientStack;