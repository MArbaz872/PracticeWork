import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DoctorScreen from './doctor';
import DoctorProfile from './doctorprofile';
import DoctorEditProfile from './doctoreditprofile';
import DrawerContentDoctor from './doctordrawercontents';
import DoctorTab from './doctortab';

function DoctorDrawers(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator drawerContent={props => <DrawerContentDoctor {...props}/>}>
            <Drawer.Screen name="Doctor" component={DoctorTab}/>
            <Drawer.Screen name="Doctor Profile" component={DoctorProfile} options={{headerShown:true}}/>
            <Drawer.Screen name="Doctor Edit Profile" component={DoctorEditProfile} options={{headerShown:true}}/>
        </Drawer.Navigator>
    );
}

export default DoctorDrawers;