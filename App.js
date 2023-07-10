import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import RootStackScreen from "./screens/rootstackscreen";
//import {AuthContext} from './components/context';
console.disableYellowBox = true;
//console.ignoredYellowBox = ['Setting a timer'];

export default function App() {
  //   const highestTimeoutId = setTimeout(() => ";");
  //   for (let i = 0; i < highestTimeoutId; i++) {
  //     clearTimeout(i);
  //   }
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo(
    () => ({
      /*  signIn :()=>{
      setUserToken('abcd');
      setIsLoading(false);
    },*/
      /* signOut:()=>{
      setUserToken(null);
      setIsLoading(false);
    },
    signUp:()=>{
      setUserToken('abcd');
      setIsLoading(false);
    },*/
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      {/* <AuthContext.Provider value={authContext}>*/}
      <NavigationContainer theme={theme}>
        {
          // userToken != null ?(
          //<DrawerNavigationScreen/>
          //)
          //:
          <RootStackScreen />
          //<AdminDrawer/>
          //<DoctorDrawers/>
        }
      </NavigationContainer>
      {/*   </AuthContext.Provider> */}
    </PaperProvider>
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
// import React from "react";
// import { View,Text } from "react-native-animatable";
// import {
//   NavigationContainer,
//   DarkTheme as NavigationDarkTheme,
//   DefaultTheme as NavigationDefaultTheme,
// } from "@react-navigation/native";
// import RootStackScreen from "./screens/rootstackscreen";
// import SplashScreen from "./screens/splashscreen";
// // import SignInScreen from "./screens/signinscreen";


// export default function App(){
//   return(

//   //  <SignInScreen/>
//   // <SplashScreen/>
//   // <View>
//   //   <Text>bdsfjdsjkfdsjfdsfjsdjfo</Text>
//   // </View>

//     <NavigationContainer>
//       <RootStackScreen />

//     </NavigationContainer>
   
//   )
// }