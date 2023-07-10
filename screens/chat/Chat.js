import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";
import firebase from "firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Chat({ route, navigation }) {
  // const { name, otherUserId, currentUserId } = route.params;
  // const [messages, setMessages] = useState([]);

  // //Header of Chat Screen
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: <Text>{name}</Text>,
  //   });
  // }, [navigation]);

  // useEffect(() => {
  //   console.log("chat====", name, otherUserId, currentUserId);
  //   //     setMessages([
  //   //     {
  //   //         _id: 1,
  //   //         text: 'Hello developer',
  //   //         createdAt: new Date(),
  //   //         user: {
  //   //         _id: 2,
  //   //         name: 'React Native',
  //   //         avatar: 'https://placeimg.com/140/140/any',
  //   //     },
  //   //   },
  //   // ])
  // }, []);

  // const getAllMessages = async () => {
  //   const docId =
  //     otherUserId > currentUserId
  //       ? currentUserId + "-" + otherUserId
  //       : otherUserId + "-" + currentUserId;
  //   const querySnap = await firebase
  //     .firestore()
  //     .collection("chatrooms")
  //     .doc(docId)
  //     .collection("messages")
  //     .orderBy("createdAt", "desc")
  //     .get();
  //   const allmessage = querySnap.docs.map((docSnap) => {
  //     return {
  //       ...docSnap.data(),
  //       createdAt: docSnap.data().createdAt.toDate(),
  //     };
  //   });
  //   setMessages(allmessage);
  // };
  // useEffect(() => {
  //   //getAllMessages()
  //   const docId =
  //     otherUserId > currentUserId
  //       ? currentUserId + "-" + otherUserId
  //       : otherUserId + "-" + currentUserId;
  //   const messageRef = firebase
  //     .firestore()
  //     .collection("chatrooms")
  //     .doc(docId)
  //     .collection("messages")
  //     .orderBy("createdAt", "desc")
  //     .get();

  //   // messageRef.onSnapshot((querySnap) => {
  //   //   const allmessage = querySnap.docs.map((docSnap) => {
  //   //     return {
  //   //       ...docSnap.data(),
  //   //       createdAt: docSnap.data().createdAt.toDate(),
  //   //     };
  //   //   });
  //   //   setMessages(allmessage);
  //   // });
  // }, []);
  // const onSend = (messageArray) => {
  //   const msg = messageArray[0];
  //   const mymsg = {
  //     ...msg,
  //     sentBy: currentUserId,
  //     sentTo: otherUserId,
  //     createdAt: new Date(),
  //   };
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, mymsg)
  //   );

  //   console.log(msg)
  //   const docId =
  //     otherUserId > currentUserId
  //       ? currentUserId + "-" + otherUserId
  //       : otherUserId + "-" + currentUserId;
  //   firebase
  //     .firestore()
  //     .collection("chatrooms")
  //     .doc(docId)
  //     .collection("messages")
  //     .add({
  //       ...mymsg,
  //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //     });
  // };
  let [messages, setMessages] = useState([]);

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    console.log(result.uri);
  };

  useEffect(() => {
    GetAllMessage();
    return () => {
      console.log("This");
    };
  }, []);

  let GetAllMessage = async () => {
    const { name, otherUserId, currentUserId } = route.params;
    let allmessage = [];
    let uid = otherUserId;
    let cuid = currentUserId;
    console.log("user", uid);
    console.log("chat", cuid);
    await firebase
      .firestore()
      .collection("chatroomsupdate")
      .doc("messages")
      .collection(cuid)
      .where("chatuid", "==", uid)
      .get()
      .then((data) => {
        data.forEach((value) => {
          let result = value.data();
          result.createdAt = result.createdAt.toDate();
          allmessage.push(result);
        });
      });

    await firebase
      .firestore()
      .collection("chatroomsupdate")
      .doc("messages")
      .collection(uid)
      .where("chatuid", "==", cuid)
      .get()
      .then((data) => {
        data.forEach((value) => {
          let result = value.data();
          (result._id = 1), (result.user._id = 2);
          result.createdAt = result.createdAt.toDate();
          allmessage.push(result);
        });
      });
    await allmessage.sort(function (a, b) {
      return b.createdAt - a.createdAt;
    });
    setMessages(allmessage);
  };

  function onSend(Messages = []) {
    try {
      const { name, otherUserId, currentUserId } = route.params;
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, Messages)
      );
      let uid = otherUserId;
      let cuid = currentUserId;
      Messages[0].useruid = cuid;
      Messages[0].chatuid = uid;
      firebase
        .firestore()
        .collection("chatroomsupdate")
        .doc("messages")
        .collection(cuid)
        .add(Messages[0])
        .then(() => alert("succees"))
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        {/* <TouchableOpacity
          style={{}}
          onPress={() => _pickDocument()}
          style={{ justifyContent: "flex-end" }}
        >
          <Ionicons
            name="ios-add"
            size={40}
            color="black"
            style={{}}
          ></Ionicons>
        </TouchableOpacity> */}
        <GiftedChat
          messages={messages}
          onSend={(Messages) => onSend(Messages)}
          user={{
            _id: 1,
          }}
        ></GiftedChat>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sendMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: windowWidth,
    height: windowHeight - 50,
  },
  sendBtnContainer: {
    backgroundColor: "gray",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "29%",
  },
  add_File: {
    width: 70,

    position: "absolute",
    bottom: "5%",
    height: 70,
    margin: 20,
    borderRadius: 60,
    backgroundColor: "white",

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
// import React, { useState, useEffect, useCallback } from "react";
// import { GiftedChat } from "react-native-gifted-chat";
// import firebase from "firebase";
// import { StyleSheet,AsyncStorage, TextInput, View, YellowBox, Button } from "react-native";
// import * as firebase from "firebase";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBeG4voQIDF4X0xl6lJxFMn7HuSBa4jF3U",
//   authDomain: "skin-397ae.firebaseapp.com",
//   databaseURL: "https://skin-397ae-default-rtdb.firebaseio.com",
//   projectId: "skin-397ae",
//   storageBucket: "skin-397ae.appspot.com",
//   messagingSenderId: "673325550950",
//   appId: "1:673325550950:web:33469fcdad8cde8f73cca7",
// };

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

// YellowBox.ignoreWarnings(["Setting a timer for a long period of time"]);

// const db = firebase.firestore();
// const chatsRef = db.collection("chats");

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     readUser();
//     const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
//       const messagesFirestore = querySnapshot
//         .docChanges()
//         .filter(({ type }) => type === "added")
//         .map(({ doc }) => {
//           const message = doc.data();
//           //createdAt is firebase.firestore.Timestamp instance
//           //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
//           return { ...message, createdAt: message.createdAt.toDate() };
//         })
//         .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
//       appendMessages(messagesFirestore);
//     });
//     return () => unsubscribe();
//   }, []);

//   const appendMessages = useCallback(
//     (messages) => {
//       setMessages((previousMessages) =>
//         GiftedChat.append(previousMessages, messages)
//       );
//     },
//     [messages]
//   );

//   async function readUser() {
//     const user = await AsyncStorage.getItem("user");
//     if (user) {
//       setUser(JSON.parse(user));
//     }
//   }
//   async function handlePress() {
//     const _id = Math.random().toString(36).substring(7);
//     const user = { _id, name };
//     await AsyncStorage.setItem("user", JSON.stringify(user));
//     setUser(user);
//   }
//   async function handleSend(messages) {
//     const writes = messages.map((m) => chatsRef.add(m));
//     await Promise.all(writes);
//   }

//   if (!user) {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your name"
//           value={name}
//           onChangeText={setName}
//         />
//         <Button onPress={handlePress} title="Enter the chat" />
//       </View>
//     );
//   }
//   return <GiftedChat messages={messages} user={user} onSend={handleSend} />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 30,
//   },
//   input: {
//     height: 50,
//     width: "100%",
//     borderWidth: 1,
//     padding: 15,
//     marginBottom: 20,
//     borderColor: "gray",
//   },
// });
