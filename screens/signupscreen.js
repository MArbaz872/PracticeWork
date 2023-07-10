import React, { useState } from "react";
import {
  View,
  TextInput,
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
import { RadioButton } from "react-native-paper";

const SignUpScreen = ({ navigation }) => {
  const [full_Name, setfull_Name] = useState("");
  const [l_Name, setl_Name] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("Patient");
  const [data, setData] = React.useState({
    email: "",
    password: "",
    // pmdc: "",
    displayName: value,
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
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
  // const textInputPmdc = (val) => {
  //   if (val.length != 0) {
  //     setData({
  //       ...data,
  //       pmdc: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       pmdc: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };
  console.log("here is data=====>",value)
  const registerUser = () => {

    // return
    if (data.email === "" && data.password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then((res) => {
            firebase.firestore().collection("users").doc(res.user.uid).set({
              name: full_Name,
              email: data.email,
              designation: value,
              user_id: res.user.uid,

              age: "23",
              city: "gujrawala",
              country: "Pakistan",
              gender: "male",
              phone: "03206046300",
            });
            console.log("User registered successfully!");
            const user = firebase.auth().currentUser;
            if (user) {
              try {
                 user.sendEmailVerification();
                console.log("Email verification sent successfully.");
                Alert.alert("Registered Successfully!!!");
              } catch (error) {
                console.error("Error sending email verification:", error);
              }
            } else {
              console.log("No user is currently signed in.");
            }
          })
          .catch((error) => {
            Alert.alert(error.message);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Full Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user" color="#05375a" size={20} />
          <TextInput
            placeholder="Full Name"
            value={full_Name}
            onChangeText={setfull_Name}
            autoCapitalize="none"
            style={styles.textInput}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 20 }]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
            // onSubmitEditing={() => setData({ email: "" })}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="New Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => handlePasswordChange(val)}
            // onSubmitEditing={() => setData({ password: "" })}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View>
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <RadioButton.Item label="Patient" value="Patient" />
            <RadioButton.Item label="Doctor" value="Doctor" />
          </RadioButton.Group>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => registerUser(data.email,data.password)}
            style={[
              styles.signIn,
              { borderColor: "#009387", borderWidth: 1, marginTop: 15 },
            ]}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={[
              styles.signIn,
              { borderColor: "#009387", borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      {/*error?<Text>{error}</Text> : null*/}
    </View>
  );
};

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
    marginTop: 30,
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

export default SignUpScreen;
