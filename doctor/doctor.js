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
import Input from "../components/InputWithIcon";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  Foundation,
  FontAwesome5,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Doctor({ navigation }) {
  const [AppointmentList, setAppointmentList] = React.useState([]);
  const [token, setToken] = React.useState("");
  const get_token = async () => {
    var sponsor_id = await AsyncStorage.getItem("doc_id");
    await setToken(sponsor_id);
  };
  React.useEffect(() => {
    get_token();

    var array = [];
    try {
      firebase
        .database()
        .ref(`Appointment/${token}`)
        .on("value", (dataSnap) => {
          console.log(dataSnap.val());
          dataSnap.forEach((documentSnapShot) => {
            //setAppointmentList(documentSnapShot);

            array.push({
              address: documentSnapShot.val().Address,
              age: documentSnapShot.val().Age,
              checked: documentSnapShot.val().checked,
              first_name: documentSnapShot.val().FirstName,
              last_name: documentSnapShot.val().LastName,
              phone_number: documentSnapShot.val().PhoneNumber,
              time: documentSnapShot.val().Time,
              docId: documentSnapShot.val().doc_id,
            });

            setAppointmentList(array);
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={AppointmentList}
        //  keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card
              onPress={() =>
                navigation.navigate("PatientDetails", {
                  first_name: item.first_name,
                  last_name: item.last_name,
                  address: item.address,
                  age: item.age,
                  gender: item.checked,
                  phone_number: item.phone_number,
                  appointment_time: item.appointment_time,
                  doc_id: item.doc_id,
                })
              }
              style={{}}
            >
              <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>Patient Info</Text>
                <View style={styles.iconTextRow}>
                  <FontAwesome name="user-o" size={17} color="#009387" />
                  <Text style={[styles.cardText, { fontSize: 20 }]}>
                    {item.first_name + " " + item.last_name}
                  </Text>
                </View>
                <View style={styles.iconTextRow}>
                  <FontAwesome name="phone" size={20} color="#009387" />
                  <Text style={styles.cardText}>
                    Contact:{" "}
                    <Text style={{ fontWeight: "normal" }}>
                      {item.phone_number}
                    </Text>
                  </Text>
                </View>
                <View style={styles.iconTextRow}>
                  <Entypo name="address" size={20} color="#009387" />
                  <Text style={styles.cardText}>
                    Address:{" "}
                    <Text style={{ fontWeight: "normal" }}>{item.address}</Text>
                  </Text>
                </View>
                <View style={styles.iconTextRow}>
                  <Foundation name="male-female" size={20} color="#009387" />
                  <Text style={styles.cardText}>
                    Gender:{" "}
                    <Text style={{ fontWeight: "normal" }}>{item.checked}</Text>
                  </Text>
                </View>
                <View style={styles.iconTextRow}>
                  <FontAwesome5
                    name="baby-carriage"
                    size={20}
                    color="#009387"
                  />
                  <Text style={styles.cardText}>
                    Age:{" "}
                    <Text style={{ fontWeight: "normal" }}>{item.age}</Text>
                  </Text>
                </View>
                <View style={styles.iconTextRow}>
                  <AntDesign name="clockcircle" size={20} color="#009387" />
                  <Text style={styles.cardText}>
                    Appointment time:{" "}
                    <Text style={{ fontWeight: "normal" }}>{item.time}</Text>
                  </Text>
                </View>
              </View>
            </Card>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
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
});

export default Doctor;
