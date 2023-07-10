import React from "react";
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import firebase from "firebase";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  Foundation,
  FontAwesome5,
} from "@expo/vector-icons";
import Toast from "react-native-tiny-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function PatientDetails({ navigation, route }) {
  const { first_name } = route.params;
  const { last_name } = route.params;
  const { address } = route.params;
  const { age } = route.params;
  const { gender } = route.params;
  const { phone_number } = route.params;
  const { appointment_time } = route.params;
  const { doc_id } = route.params;
  const [user_token, setToken] = React.useState("");
  const get_token = async () => {
    var sponsor_id = await AsyncStorage.getItem("doc_id");
    await setToken(sponsor_id);
    console.log("user id ====", user_token);
  };

  //////////////////notification///////////////////////////
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  React.useEffect(() => {
    get_token();
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    console.log(expoPushToken);
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("expo notification token ===", token);
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
  /////////////////notification Ended////////////////////////

  ////////////////reject appointment ///////////////////////

  //////////////////////ended///////////////////////////////
  const Rejected = (token) => {
    try {
      fetch(
        `https://histore.codembeded.com/mobile_api/reject.php?expo_token=${token}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.data.status == "ok") {
            console.log("user id =====", user_token);
            firebase
              .database()
              .ref(`Appointment/${user_token}`)
              .remove()
              .then((data) => {
                console.log(data);
              });

            Toast.show("Appointment rejected");
            navigation.navigate("Doctors");
          } else {
            console.log("error");
          }
        })
        .catch((error) => {
          Toast.show(error.toString());
        });
    } catch (e) {
      Toast.show(e.toString());
    }
  };

  const Accepted = (token) => {
    try {
      fetch(
        `https://histore.codembeded.com/mobile_api/accept.php?expo_token=${token}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          Toast.show("Appointment Accepted");
          navigation.navigate("Doctors");
          //   if (responseJson.data.status == "ok") {
          //     console.log("notification send");

          //     //     navigation.navigate("PaymentScreen");
          //   } else {
          //     console.log("error");
          //   }
        })
        .catch((error) => {
          Toast.show(error.toString());
        });
    } catch (e) {
      Toast.show(e.toString());
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Card style={{}}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Patient Info</Text>
          <View style={styles.iconTextRow}>
            <FontAwesome name="user-o" size={17} color="#009387" />
            <Text style={[styles.cardText, { fontSize: 20 }]}>
              {first_name + " " + last_name}
            </Text>
          </View>
          <View style={styles.iconTextRow}>
            <FontAwesome name="phone" size={20} color="#009387" />
            <Text style={styles.cardText}>
              Contact:{" "}
              <Text style={{ fontWeight: "normal" }}>{phone_number}</Text>
            </Text>
          </View>
          <View style={styles.iconTextRow}>
            <Entypo name="address" size={20} color="#009387" />
            <Text style={styles.cardText}>
              Address: <Text style={{ fontWeight: "normal" }}>{address}</Text>
            </Text>
          </View>
          <View style={styles.iconTextRow}>
            <Foundation name="male-female" size={20} color="#009387" />
            <Text style={styles.cardText}>
              Gender: <Text style={{ fontWeight: "normal" }}>{gender}</Text>
            </Text>
          </View>
          <View style={styles.iconTextRow}>
            <FontAwesome5 name="baby-carriage" size={20} color="#009387" />
            <Text style={styles.cardText}>
              Age: <Text style={{ fontWeight: "normal" }}>{age}</Text>
            </Text>
          </View>
          <View style={styles.iconTextRow}>
            <AntDesign name="clockcircle" size={20} color="#009387" />
            <Text style={styles.cardText}>
              Appointment time:{" "}
              <Text style={{ fontWeight: "normal" }}>{appointment_time}</Text>
            </Text>
          </View>
        </View>
      </Card>
      <View style={{ flexDirection: "row", position: "absolute", bottom: 15 }}>
        <TouchableOpacity
          style={styles.Accept_button}
          onPress={() => Rejected(expoPushToken)}
        >
          <Text style={styles.button_text}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Accept_button}
          onPress={() => Accepted(expoPushToken)}
        >
          <Text style={styles.button_text}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button_text: {
    fontSize: 22,
    color: "white",
    alignContent: "center",
    alignSelf: "center",
  },
  cardContainer: {
    borderRadius: 10,
    borderColor: "#009387",
    borderWidth: 2,
    paddingVertical: 6,
    margin: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
  },
  iconTextRow: {
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 7,
    alignItems: "center",
  },
  cardText: {
    fontSize: 14,
    marginLeft: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
  Accept_button: {
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#009387",
    marginHorizontal: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    width: "45%",
    marginBottom: 5,
  },
});
