import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import firebase from "firebase";

function caseScreen({ navigation }) {
  const [image, setImage] = React.useState("https://i.imgur.com/TkIrScD.png");
  const [base64Image, setBase64Image] = React.useState("");
  const _uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new Error("uriToBlob failed"));
      };

      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  };
  const handleFetch = async () => {
    // console.log('wow-1')
    // http://project3214.pythonanywhere.com/upload/
    let imageB64 = image;
    // console.log(imageB64)
    let modalData = { img: base64Image };
    console.log(modalData, "modalData");
    axios
      .post("http://192.168.141.243:5000/predict", {
        body: { img: base64Image },
      })
      .then(function (response) {
        //     console.log(response.data)
        const user = firebase.auth().currentUser;
        firebase
          .firestore()
          .collection("result")
          .add({
            result: response.data,
            image: image,
            uid: user.uid,
            currentMonth: `${
              new Date().getUTCMonth() + 1
            }/${new Date().getFullYear()}`,
            date: `${new Date().getUTCDate()}/${
              new Date().getUTCMonth() + 1
            }/${new Date().getFullYear()} `,
          })
          .then(() => {
            navigation.navigate("Result", {
              screen: "Result",
              params: {
                result: response.data,
                image: image,
              },
            });
          });
      })
      .catch(function (error) {
        console.log(error, "err");
        // handle error
        alert(error.message);
      });
  };
  const handleImageSelect = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!pickerResult.cancelled) {
      let uri = pickerResult.uri;
      var name = Math.random();
      var ref = await firebase.storage().ref("/").child(`disease/${name}`);
      const response = await fetch(uri);
      const blob = await response.blob(uri);
      let metadata = {
        contentType: "image/jpeg",
      };
      await ref.put(blob, metadata);
      ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          setBase64Image(pickerResult.base64);
          setImage(url);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    setBase64Image(pickerResult.base64);
    setImage(pickerResult.uri);
  };

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });
    if (!pickerResult.cancelled) {
      // console.log(pickerResult);
      // base64Image
      let uri = pickerResult.uri;
      var name = Math.random();
      var ref = await firebase.storage().ref("/").child(`disease/${name}`);
      const response = await fetch(uri);
      const blob = await response.blob(uri);
      let metadata = {
        contentType: "image/jpeg",
      };
      await ref.put(blob, metadata);
      ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          setBase64Image(pickerResult.base64);
          setImage(url);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    setBase64Image(pickerResult.base64);
    setImage(pickerResult.uri);
    // _uriToBlob(pickerResult.uri).then((blob) => {
    //     let modalData = JSON.stringify({img:blob});
    //     axios
    //     .post('https://jsonplaceholder.typicode.com/posts', {
    //       body: modalData,
    //     })
    //     .then(function (response) {
    //       // handle success

    //       alert(JSON.stringify(response.data));
    //       console.log(response.data)
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       alert(error.message);
    //     });
    //     // fetch('http://project3214.pythonanywhere.com/upload/', {
    //     //     method: "POST",
    //     //     body: modalData,
    //     //     // headers: {"Content-type": "application/json; charset=UTF-8"}
    //     //     })
    //     //     .then(response => {
    //     //         alert("Status: "+response.status);

    //     //      })
    //     //     //  .then(json => alert("JSON: "+json))
    //     //     .catch(err => alert("ERR: "+err));
    // });

    // alert(pickerResult.uri);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.logo} />
      <View style={styles.buttonDiv}>
        <Button
          title="Capture Image"
          color="#05375a"
          onPress={openImagePickerAsync}
        />
        <Button
          title="Select Image"
          color="#05375a"
          onPress={handleImageSelect}
        />
        <Button title="Get Report" color="#05375a" onPress={handleFetch} />
      </View>
    </View>
  );
}

export default caseScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    color: "#05375a",
    backgroundColor: "#05375a",
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  logo: {
    height: 200,
    width: 200,
  },
  buttonDiv: {
    height: 150,
    justifyContent: "space-between",
  },
});
