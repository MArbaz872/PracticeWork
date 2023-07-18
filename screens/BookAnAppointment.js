import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from "expo-notifications";
import * as Device from 'expo-device';

import { RadioButton } from "react-native-paper";
import Dropdown from "../components/Dropdown";
import firebase from "firebase";

export default function BookAnAppointment({ route, navigation }) {
  const { doc_id } = route.params;
  const { currentUserId } = route.params;
  const [checked, setChecked] = React.useState("first");
  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [Age, setAge] = React.useState("");
  const [PhoneNumber, setPhoneNumber] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const TimeData = [
    { key: 4, label: "1:00 PM" },
    { key: 5, label: "1:30 PM" },
    { key: 6, label: "2:00 PM" },
    { key: 42, label: "2:30 PM" },
    { key: 3, label: "3:00 PM" },
    { key: 8, label: "3:30 PM" },
    { key: 12, label: "4:00 PM" },
    { key: 121, label: "4:30 PM" },
    { key: 235432, label: "5:00 PM" },
    { key: 23423, label: "5:30 PM" },
    { key: 657, label: "6:00 PM" },
    { key: 88, label: "6:30 PM" },
    { key: 61, label: "7:00 PM" },
    { key: 60, label: "7:30 PM" },
    { key: 40, label: "8:00 PM" },
    { key: 609, label: "8:30 PM" },
    { key: 214, label: "9:00 PM" },
  ];

  //notification///////////////////////////////////////////////////////
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  async function registerForPushNotificationsAsync() {
    // console.log("registerForPushNotificationsAsync")
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      // console.log("here in bookappotment-->",finalStatus)

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      // console.log("expo notification token ===", token);
      setExpoPushToken(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }
  const SendNotification = (token) => {
    try {
      fetch(
        `https://histore.codembeded.com/mobile_api/notification.php?expo_token=${token}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then((response) => response.json())
        alert(response)
        // console.log("lol----->",response)
        .then((responseJson) => {

          if (responseJson.data.status == "ok") {
            navigation.navigate("PaymentScreen");
          } else {
            console.log("error");
          }
          console.log(responseJson);
        })
        .catch((error) => {
          // Toast.show(error.toString());
          console.log("error-=-=-=-=-=",error)
        });
    } catch (e) {
      // Toast.show(e.toString());
      console.log("e--=-=-=->",e)
    }
  };

  const PushTokenInFirebase = (expoPushToken) => {
    console.log("Firebase token====", expoPushToken);
    try {
      firebase
        .firestore()
        .collection("users")
        .doc(doc_id)
        .update({
          NotificationToken: expoPushToken,
        })
        .then((data) => {
          console.log("pushed----------->", data);
          if (data == "ok") {
            navigation.navigate("PaymentScreen");
          } else {
            console.log("<------------------------error------------------------------->");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const BookAppointment = () => {
   
    if (
      FirstName === "" ||
      LastName === "" ||
      Age === "" ||
      Address === "" ||
      PhoneNumber === "" ||
      checked === "" ||
      TimeData === ""
    ) {
      alert("Enter All Fields in From");
    } else {
      try {
        console.log("hit->",
          doc_id,
          FirstName,
          LastName,
          Age,
          PhoneNumber,
          Address,
          checked,
          Time
        );
        firebase
        // alert("before")
          .database()
          .ref("Appointment/")
          .push({
            doc_id: doc_id,
            FirstName: FirstName,
            LastName: LastName,
            Age: Age,
            PhoneNumber: PhoneNumber,
            Address: Address,
            Checked: checked,
            Time: Time,
          })
          .then((data) => {
            // alert('Appointment Booked')

            // console.log("data");
            // SendNotification(expoPushToken);
            PushTokenInFirebase(expoPushToken);
          });
      } catch (error) {
        alert("error")
        // console.log("error--------->",error);
      }
    }
  };
  const [Time, setTime] = React.useState("Pick Time");
  // console.log("time---->",Time)

  React.useEffect(() => {
    console.log("doc id--->",doc_id);
  }, []);
  return (
    <View
      style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
    >
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="First Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(val) => setFirstName(val)}
          value={FirstName}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Last Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(val) => setLastName(val)}
          value={LastName}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Age"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(val) => setAge(val)}
          value={Age}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Address"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(val) => setAddress(val)}
          value={Address}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="contact Number"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(val) => setPhoneNumber(val)}
          value={PhoneNumber}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <RadioButton
          value="first"
          status={checked === "Male" ? "checked" : "unchecked"}
          onPress={() => setChecked("Male")}
        />
        <Text style={{ marginTop: 7 }}>Male</Text>
        <RadioButton
          value="second"
          status={checked === "Female" ? "checked" : "unchecked"}
          onPress={() => setChecked("Female")}
        />
        <Text style={{ marginTop: 7 }}>Female</Text>
      </View>
      <View style={styles.dropdown_row}>
        <Text>Select Time</Text>
        <Dropdown
          data={TimeData}
          // initValue={"Select Time"?.Time}
          initValue={Time == undefined ? 'Select Time' : Time}
          onChange={(option) => {
            setTime(option.label);
          }}
          style={{
            ...styles.text,
            ...styles.value_width,
          }}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => BookAppointment()}
        >
          <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>Book</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    marginHorizontal: 20,
    marginBottom: 20,
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
    marginHorizontal: 20,
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
  dropdown_row: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  value_width: {
    width: "60%",
  },
});
