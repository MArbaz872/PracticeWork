// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect } from "react";
import firebase from "firebase";
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";

const SearchScreen = ({ navigation }) => {
  const [doctorList, setDoctorList] = useState([{}]);
  const [DocId, setDocId] = React.useState("");
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [detail, setDetail] = useState([{}]);
  const user = firebase.auth().currentUser;
  useEffect(() => {
    var arr = [];
    firebase
      .firestore()
      .collection("users")
      .where("designation", "==", "Doctor")
      .get()
      .then((documentSnapshot) => {
        // arr.push({name:documentSnapshot.data().name,userId:documentSnapshot.data().user_id,currentUser:currentUser.user_id})
        const filter = documentSnapshot.docs.map((e) => e.data());
        setFilteredDataSource([...filter]);
        //    console.log("Doctor List");
        //      console.log(documentSnapshot.data());
      }),
      //setDetail(arr);
      [];
  });
  /* firebase
        .firestore()
        .collection("users")
        .where("designation", "==", "Doctor")
        .get()
        .then((documentSnapshot) => {
        const filter = documentSnapshot.docs.map((e) => e.data());
        setFilteredDataSource([...filter]);
        }),[]*/

  const ItemView = ({ item, index }) => (
    <Text
      style={styles.itemStyle}
      onPress={() =>
        navigation.navigate("ChatOrAppointment", {
          name: item.name,
          otherUserId: item.user_id,
          currentUserId: user.uid,
        })
      }
    >
      {index + 1 + ". " + item.name}
    </Text>
  );

  const ItemSeparatorView = () => (
    <View
      style={{
        height: 0.5,
        width: "100%",
        backgroundColor: "#C8C8C8",
      }}
    />
  );

  // const getItem = (item) => navigation.navigate("Chat",{name:item.name});

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {console.log("filterdata source ======", filteredDataSource)}
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => setSearch(text)}
          placeholder="Type Here..."
          value={search}
        />
        <TouchableOpacity>
          <FlatList
            data={
              (search &&
                filteredDataSource.filter((e) =>
                  e.name.toLowerCase().includes(search.toLowerCase())
                )) ||
              filteredDataSource
            }
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
});

export default SearchScreen;
