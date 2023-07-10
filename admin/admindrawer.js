import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Admin from './admin';
import AdminProfile from './adminprofile';
import EditProfileScreen from './editprofileadmin';
import DrawerContentAdmin from './admindrawercontent';

function AdminDrawer({navigation}){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator drawerContent={props => <DrawerContentAdmin {...props}/>}>
            <Drawer.Screen name="Admin" component={Admin}/>
            <Drawer.Screen name="AdminProfile" component={AdminProfile} options={{headerShown:true}}/>
            <Drawer.Screen name="AdminEditProfile" component={EditProfileScreen} options={{headerShown:true}}/>
        </Drawer.Navigator>
    );
}

export default AdminDrawer;
