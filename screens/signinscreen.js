import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  TextInput,
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  StatusBar,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Notifications from "expo-notifications";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
//import {AuthContext} from '../components/context';
import firebase from "../firebase/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import firebase from "../firebase/firebase";

const SignInScreen = ({ navigation }) => {
  // const user = firebase.auth().currentUser;
  //   const [user, setUser] = useState('');
  //   const [specific_Email, setSpecific_Email] = useState(specificEmail);
  const [data, setData] = React.useState({
    email: "",
    password: "",
    pmdc: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  //const {signIn} = React.useContext(AuthContext);
  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const userLogin = () => {
    if (data.email === "" && data.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      console.log(data.email.trim());
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email.trim(), data.password.trim())
        // console.log(user.uid)
        // console.log(user.displayName)
        .then(async (res) => {
          await AsyncStorage.setItem("doc_id", res.user.uid);
          const token = (await Notifications.getDevicePushTokenAsync()).data;


          await firebase
            .firestore()
            .collection("users")
            .doc(res.user.uid)
            .update({ expoToken: token });
          firebase
            .firestore()
            .collection("users")
            .doc(res.user.uid)
            .get()
            .then((documentSnapshot) => {
              //setDesignation(documentSnapshot.data().designation);
              //console.log(documentSnapshot.data().designation);
      
              if (res.user.emailVerified == false) {
                navigation.replace("Email Verification");
              } else {
                if (documentSnapshot.data().designation == "Doctor") {
                  navigation.replace("Doctor");
                } else if (documentSnapshot.data().designation == "Patient") {
                  navigation.replace("DrawerNavigationScreen");
                  //console.log(documentSnapshot.data().designation);
                } else {
                  navigation.replace("AdminNavigationScreen");
                  //console.log(documentSnapshot.data().designation);
                  //navigation.replace('DrawerNavigationScreen');
                }
                console.log("emailVerified =====", res.user.emailVerified);
                console.log("User logged-in successfully!");
              }
            });
        })
        .catch((error) => {
          console.log("here--->", error.message);
          Alert.alert(error.message);
        });
      //res.user.providerData.forEach(function (profile) {
      //console.log("Sign-in provider: " + profile.providerId);
      //console.log("  Provider-specific UID: " + profile.uid);
      //console.log("  Name: " + profile.displayName);
      //console.log("  Email: " + profile.email);
      //console.log("  Photo URL: " + profile.photoURL);
      /* if(profile.email == data.email && profile.displayName == "Doctor"){
                navigation.replace('Doctor');
            }else if(data.email == "asjad@gmail.com"){
                navigation.replace('AdminNavigationScreen');
            }else{
                navigation.replace('DrawerNavigationScreen');
            }*/
      //})
      //console.log('User logged-in successfully!')
      //}).catch(error => {Alert.alert(error.message)})
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          //setDesignation(documentSnapshot.data().designation);
          //console.log(documentSnapshot.data().designation);
          if (user.emailVerified == false) {
            navigation.replace("Email Verification");
          } else {
            if (documentSnapshot.data().designation == "Doctor") {
              navigation.replace("Doctor");
            } else if (documentSnapshot.data().designation == "Patient") {
              navigation.replace("DrawerNavigationScreen");
              //console.log(documentSnapshot.data().designation);
            } else {
              navigation.replace("AdminNavigationScreen");
              //console.log(documentSnapshot.data().designation);
              //navigation.replace('DrawerNavigationScreen');
            }
            console.log("emailVerified =====", res.user.emailVerified);
            console.log("User logged-in successfully!");
          }
        });
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
            onSubmitEditing={() => setData({ email: "" })}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => handlePasswordChange(val)}
            onSubmitEditing={() => setData({ password: "" })}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => userLogin()}>
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            style={[
              styles.signIn,
              { borderColor: "#009387", borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
