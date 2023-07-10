import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {Ionicons} from '@expo/vector-icons';
import DoctorAdminView from "./doctor";
import ViewDoctors from "./viewdoctor";
import AddDoctor from "./adddoctor";
import VerifyDoctor from "./verifydoctor";
import DoctorDetail from "./doctordetail";


function DoctorStack({navigation}){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name={"Doctors"} component={DoctorAdminView} options={{
            headerLeft: () =>(
              <Ionicons name="menu-outline" size={30} color={'#000000'}
              backgroundColor='#000000' onPress={() => {navigation.toggleDrawer()}}/>
              )
            }}/>
            <Stack.Screen name={"Verify Doctor"} component={VerifyDoctor}/>
            <Stack.Screen name={"View Doctor"} component={ViewDoctors}/>
            <Stack.Screen name={"Add Doctor"} component={AddDoctor}/>
            <Stack.Screen name={"Doctor Detail"} component={DoctorDetail}/>
        </Stack.Navigator>
        )
}

export default DoctorStack;