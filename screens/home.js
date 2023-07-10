import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Result" onPress={() => navigation.navigate("Result")} />
            <Button title="Admin" onPress={() => navigation.navigate("Admin")} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
