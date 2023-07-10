import React from "react";
import { Ionicons, MaterialCommunityIcons, Foundation, Fontisto } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import ResultScreen from "./result";
import DoctorScreen from "./doctor";
import Chat from "./chat/Chat";
import ExploreScreen from "./explorescreen";
import CasesScreen from "./cases";
import ImageDataScreen from "./imagedatascreen";

const ResultStack = createStackNavigator();
const CaseStack = createStackNavigator();
const DoctorStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: "tomato" }}
        >
            <Tab.Screen
                name="Cases"
                component={CaseStackScreen}
                options={{
                    tabBarLabel: "Cases",
                    tabBarColor: "#009387", //'#d02860',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="medkit" color={color} size={26} />
                        //<MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Result"
                component={ResultStackScreen}
                options={{
                    tabBarLabel: "Result",
                    tabBarColor: "#009387", //'#1f65ff',
                    tabBarIcon: ({ color }) => (
                        // <Ionicons name="md-notifications" color={color} size={26} />
                        <Foundation name="results" size={26} color={color} />
                        // <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Doctors"
                component={DoctorStackScreen}
                options={{
                    tabBarLabel: "Doctor",
                    tabBarColor: "#009387",
                    //headerShown: true ,
                    tabBarIcon: ({ color }) => (
                        // <Ionicons name="md-person" color={color} size={26} />
                        <Fontisto name="doctor" size={26} color={color} />
                        //<MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="More"
                component={ExploreStackScreen}
                options={{
                    tabBarLabel: "More",
                    tabBarColor: "#009387", //'#d02860',
                    tabBarIcon: ({ color }) => (
                        //<Ionicons name="md-aperture" color={color} size={26} />
                        <MaterialCommunityIcons name="dots-horizontal" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const CaseStackScreen = ({ navigation }) => (
    <CaseStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#fff", //'#009387'//'#1f65ff'
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
                fontWeight: "normal",
                alignSelf: "auto",
            },
        }}
        initialRouteName="Cases"
    >
        
        <CaseStack.Screen
            name="Cases"
            component={ImageDataScreen}
            options={{
                headerLeft: () => (
                    <Ionicons
                        name="menu-outline"
                        size={30}
                        color={"#000000"}
                        backgroundColor="#000000"
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    />
                ),
            }}
        />
        <CaseStack.Screen
            name="Case"
            component={CasesScreen}
            // options={{
            //     headerLeft: () => (
            //         <Ionicons
            //             name="menu-outline"
            //             size={30}
            //             color={"#000000"}
            //             backgroundColor="#000000"
            //             onPress={() => {
            //                 navigation.toggleDrawer();
            //             }}
            //         />
            //     ),
            // }}
        />
    </CaseStack.Navigator>
);

const ResultStackScreen = ({ navigation }) => (
    <ResultStack.Navigator
        //  options={{ headerShown: true }}
        screenOptions={{
            headerStyle: {
                backgroundColor: "#fff", //'#009387'//'#1f65ff'
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
                fontWeight: "normal",
                alignSelf: "auto",
            },
        }}
    >
        <ResultStack.Screen
            name="Result"
            component={ResultScreen}
            options={{
                headerLeft: () => (
                    <Ionicons
                        name="menu-outline"
                        size={30}
                        color={"#000000"}
                        backgroundColor="#00000"
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    />
                ),
            }}
        />
    </ResultStack.Navigator>
);

const DoctorStackScreen = ({ navigation }) => (
    <DoctorStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#fff", //'#009387'//'#1f65ff'
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
                fontWeight: "normal",
                alignSelf: "auto",
            },
        }}
    >
        <DoctorStack.Screen
            name="Doctor"
            component={DoctorScreen}
            options={{
                headerLeft: () => (
                    <Ionicons
                        name="menu-outline"
                        size={30}
                        color={"#000000"}
                        backgroundColor="#000000"
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    />
                ),
            }}
        />
       {/* <DoctorStack.Screen
            name="Chat"
            component={Chat}
            options={{
                headerLeft: () => (
                    <Ionicons
                        name="menu-outline"
                        size={30}
                        color={"#000000"}
                        backgroundColor="#000000"
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    />
                ),
            }}
        />*/}
    </DoctorStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) => (
    <ExploreStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#fff", //'#009387'/#009387/'#1f65ff'
            },
            headerTintColor: "#000000", //'#fff',
            headerTitleStyle: {
                fontWeight: "normal",
                alignSelf: "flex-start",
            },
        }}
    >
        <ExploreStack.Screen
            name="More"
            component={ExploreScreen}
            options={{
                headerLeft: () => (
                    <Ionicons
                        name="menu-outline"
                        size={30}
                        color={"#000000"}
                        backgroundColor="#000000"
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    />
                ),
            }}
        />
    </ExploreStack.Navigator>
);

export default MainTabScreen;
