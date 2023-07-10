import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import SplashScreen from "./splashscreen";
import SignUpScreen from "./signupscreen";
import SignInScreen from "./signinscreen";
import ForgotPassword from "./forgotpassword";
import DrawerNavigationScreen from "./drawernavigationscreen";
import AdminDrawer from "../admin/admindrawer";
import DoctorDrawers from "../doctor/doctordrawers";
import VerifyEmail from "./verifyemail";
import Chat from "./chat/Chat";
import BookAnAppointment from "./BookAnAppointment";
import ChatOrAppointment from "./ChatOrAppointment";
// import PaymentStripe from "./Payment";
// import PatientDetails from "./PatientDetails";
import SearchScreen from "./SearchScreen";

const RootStack = createStackNavigator();

export default function RootStackScreen({ navigation }) {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#009387" },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
        <RootStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
     <RootStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    <RootStack.Screen
        name="DrawerNavigationScreen"
        component={DrawerNavigationScreen}
        options={{ headerShown: false }}
      />
        <RootStack.Screen
        name="AdminNavigationScreen"
        component={AdminDrawer}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Doctor"
        component={DoctorDrawers}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Email Verification"
        component={VerifyEmail}
        options={{ headerShown: false }}
      />
     <RootStack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: true,
          headerBackTitle: null,
        }}
      />
      <RootStack.Screen name="SearchScreen" component={SearchScreen} />
      <RootStack.Screen name="bookAppointment" component={BookAnAppointment} />
      {/* <RootStack.Screen name="PaymentScreen" component={PaymentStripe} />
      <RootStack.Screen name="PatientDetails" component={PatientDetails} />*/}
      <RootStack.Screen
        name="ChatOrAppointment"
        component={ChatOrAppointment}
      /> 
    </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
