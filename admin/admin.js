import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { StyleSheet} from 'react-native';
import {Ionicons, Fontisto} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorAdminView from './doctor';
import NotificationAdminView from './notifications';
import PatientStack from './patientstack';
import DoctorStack from './doctorstack';

const AdminPatientStack = createStackNavigator();
const AdminDoctorStack = createStackNavigator();
const AdminNotificationStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Admin(){
    return( 
        <Tab.Navigator initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#009387' }}>
            <Tab.Screen name="PatientView" component={PatientStack} 
            options={{
                tabBarLabel: 'Patients',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Fontisto name="bed-patient" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen name="DoctorView" component={DoctorStack} 
            options={{
                tabBarLabel: 'Doctors',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                <Fontisto name="doctor" size={26} color={color} />
                ),
              }}
            />
            <Tab.Screen name="NotificationView" component={AdminNotification} 
            options={{
                tabBarLabel: 'Notifications',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="notifications" color={color} size={26} />
                ),
              }}
            />
        </Tab.Navigator>
    );
}

/*const AdminPatient = ({navigation})=>(

    <AdminPatientStack.Navigator
    screenOptions={
        {
          headerStyle:{
            backgroundColor: '#fff'
          },
          headerTintColor:'#000000',
          headerTitleStyle:{
            fontWeight:'normal',
            alignSelf: 'auto',
          }
        }
      }
    >
        <AdminPatientStack.Screen name="Patients" component={PatientStack} 
        options={{
            headerLeft: () =>(
              <Ionicons name="menu-outline" size={30} color={'#000000'}
              backgroundColor='#000000' onPress={() => {navigation.toggleDrawer()}}/>
              )
            }}
        />
    </AdminPatientStack.Navigator>
);
*/

/*const AdminDoctor = ({navigation})=>(
    <AdminDoctorStack.Navigator
    screenOptions={
        {
          headerStyle:{
            backgroundColor: '#fff'
          },
          headerTintColor:'#000000',
          headerTitleStyle:{
            fontWeight:'normal',
            alignSelf: 'auto',
          }
        }
      }
    >
        <AdminDoctorStack.Screen name="Doctors" component={DoctorAdminView} 
        options={{
            headerLeft: () =>(
              <Ionicons name="menu-outline" size={30} color={'#000000'}
              backgroundColor='#000000' onPress={() => {navigation.toggleDrawer()}}/>
              )
            }}
        />
    </AdminDoctorStack.Navigator>
);*/


const AdminNotification = ({navigation})=>(
    <AdminNotificationStack.Navigator
    screenOptions={
        {
          headerStyle:{
            backgroundColor: '#fff'
          },
          headerTintColor:'#000000',
          headerTitleStyle:{
            fontWeight:'normal',
            alignSelf: 'auto',
          }
        }
      }
    >
        <AdminNotificationStack.Screen name="Notifications" component={NotificationAdminView} 
        options={{
            headerLeft: () =>(
              <Ionicons name="menu-outline" size={30} color={'#000000'}
              backgroundColor='#000000' onPress={() => {navigation.toggleDrawer()}}/>
              )
            }}
        />
    </AdminNotificationStack.Navigator>
);


export default Admin;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    button: {
        alignItems: 'flex-start',
        marginTop: 5,
        paddingLeft:20,

    },
    btn: {
        width: '95%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    }
  });
  