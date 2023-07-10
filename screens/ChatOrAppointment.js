import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function ChatOrAppointment({ route, navigation }) {
  const { currentUserId } = route.params;
  const { otherUserId } = route.params;
  const { name } = route.params;

  React.useEffect(() => {
    console.log(name, otherUserId, currentUserId);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={styles.signIn}
        onPress={() =>
          navigation.navigate("bookAppointment", { doc_id: currentUserId })
        }
      >
        <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
          <Text style={[styles.textSign, { color: "#fff" }]}>
            Book Appointment
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signIn}
        onPress={() =>
          navigation.navigate("Chat", {
            name: name,
            otherUserId: otherUserId,
            currentUserId: currentUserId,
          })
        }
      >
        <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
          <Text style={[styles.textSign, { color: "#fff" }]}>Chat</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signIn: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
