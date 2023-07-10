import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Ionicons, Fontisto} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Doctor from './doctor';
import PatientList from './patientlist';
import MedicalReport from './reports';
import AppointmentNotification from './notifications';


const PatientStack = createStackNavigator();
const DoctorStack = createStackNavigator();
const ReportStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function DoctorTab(){
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#009387' }}>
            <Tab.Screen name="Doctor"  component={DoctorStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="home-outline" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen name="Patient" component={PatientStackScreen}
            options={{
                tabBarLabel: 'Patients',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                  <Fontisto name="bed-patient" color={color} size={26} />
                ),
              }}
            />

          <Tab.Screen name="Report" component={ReportStackScreen}
            options={{
                tabBarLabel: 'Reports',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="document-outline" color={color} size={26} />
                ),
              }}
            />

          <Tab.Screen name="Notification" component={NotificationStackScreen}
            options={{
                tabBarLabel: 'Notifications',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="md-notifications" color={color} size={26} />
                ),
              }}
            />
        </Tab.Navigator>
    )
}


const DoctorStackScreen = ({navigation}) =>(
    <DoctorStack.Navigator screenOptions={
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
    }>
      <DoctorStack.Screen name="Doctor" component={Doctor}
      options={{
        headerLeft: () =>(
          <Ionicons name="menu-outline" size={30} color={'#000000'}
          backgroundColor='#000000' onPress={() => {navigation.toggleDrawer()}}/>
          )
        }}
      />
    </DoctorStack.Navigator>
  );
  
  
  const PatientStackScreen = ({navigation}) =>(
    <PatientStack.Navigator
    screenOptions={
      {
        headerStyle:{
          backgroundColor: '#fff'
        },
        headerTintColor:'#000000',
        headerTitleStyle:{
          fontWeight:'normal',
          alignSelf: 'auto'
        }
      }
    } >
      <PatientStack.Screen name="Patients" component={PatientList}
      options={{
        headerLeft: () =>(
          <Ionicons name="menu-outline" size={30} color={'#000000'}
          backgroundColor='#00000' onPress={() => {navigation.toggleDrawer()}}/>
          )
        }}
      />
    </PatientStack.Navigator>
  );
  
  const ReportStackScreen = ({navigation}) =>(
    <ReportStack.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor: '#fff'
        },
        headerTintColor:'#000000',
        headerTitleStyle:{
          fontWeight:'normal',
          alignSelf: 'auto'    
        }
      }
    }>
      <ReportStack.Screen name="Medical Reports" component={MedicalReport}
      options={{
        headerLeft: () =>(
          <Ionicons name="menu-outline" size={30} color={'#000000'}
          backgroundColor='#000000' onPress={() => {navigation.toggleDrawer()}}/>
          )
        }}
      />
    </ReportStack.Navigator>
  );
  
  
  
  const NotificationStackScreen = ({navigation}) =>(
    <NotificationStack.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor: '#fff'
        },
        headerTintColor:'#000000',
        headerTitleStyle:{
          fontWeight:'normal',
          alignSelf: 'flex-start'
        }
      }
    }>
      <NotificationStack.Screen name="Notifications" component={AppointmentNotification}
      options={{
        headerLeft: () =>(
          <Ionicons name="menu-outline" size={30} color={'#000000'}
          backgroundColor='#000000' onPress={() => {navigation.toggleDrawer()}}/>
          )
        }}
      />
    </NotificationStack.Navigator>
  );



export default DoctorTab;