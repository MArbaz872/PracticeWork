import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Platform,
} from "react-native";
import firebase from "firebase";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
// import { useNavigation } from '@react-navigation/native';

function ResultScreen(props) {
  // const name3 = useNavigationParam('setingokay');
  // const { setingokay } = route.params;
  // console.log('setingokay', setingokay)
  //   const { result } = route.params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState("");
  const [image, setImage] = useState("");
  
  const user = firebase.auth().currentUser;
  const html = `
  <html lang="en">

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Page Title</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style type="text/css">
  
    </style>
  </head>
  
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title" style="color:#269A2A ;">Report</h4>
              <div class="row" style="margin-top: 60px;">
                <div class="col-md-4">
                  <h6>Name:</h6>
                  <p  autocomplete="off" name="name" placeholder="Type something" />
                  ${name}
                  </p>
                </div>
                <div class="col-4">
                  
                </div>
                <div class="col-md-4">
                  <h6>Email:</h6>
                  <p  autocomplete="off" name="email" placeholder="Type something" />
                  ${email}
                  </p> 
                </div>
              </div>
              <div class="row" style="margin-top: 60px;">
                <div class="col-md-4">
                  <h6>Address:</h6>
                  <p autocomplete="off" name="address" placeholder="Type something" />
                  ${city}
                  </p> 
                </div>
                <div class="col-md-4">
                  <h6>Contact:</h6>
                  <p autocomplete="off" name="contact" placeholder="Type something" />
                 ${phone}
                  </p> 
                </div>
              </div>
              <div class="row" style="margin-top: 60px;">
                <div class="col-12">
                  <h6>Result:</h6>
                  <p autocomplete="off" name="address" placeholder="Type something" />	${result}
                  </p>
                </div>
                <div class="col-12">
                  <h6 style="color:#269A2A ;">Cure:</h6>
                  <p autocomplete="off" name="contact" placeholder="Type something" />
                  adasdas
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </body>
  
  </html>
`;
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .where("user_id", "==", user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          setName(documentSnapshot.data().name);

          setEmail(documentSnapshot.data().email);

          setAge(documentSnapshot.data().age);
          setGender(documentSnapshot.data().gender);

          setCity(documentSnapshot.data().city);

          setCountry(documentSnapshot.data().country);

          setPhone(documentSnapshot.data().phone);

          setResult(props.route.params?.result);
          setImage(props.route.params?.image);
          

        });
        //console.log("Report", querySnapshot);
      });

  }, []);

  console.log(props.route, "fkdmfkm")
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Report</Text>
        <View style={[styles.colView, { justifyContent: "space-between" }]}>
          <View>
            <Text style={styles.fieldTitle}>NAME:</Text>
            <Text style={styles.field}>{name}</Text>
          </View>
          <View>
            <Text style={styles.fieldTitle}>EMAIL:</Text>
            <Text style={styles.field}>{email}</Text>
          </View>
        </View>
        <View style={styles.colView}>
          <View>
            <Text style={styles.fieldTitle}>ADDRESS:</Text>
            <Text style={styles.field}>{city}</Text>
          </View>
          <View style={{ marginLeft: 50 }}>
            <Text style={styles.fieldTitle}>CONTACT:</Text>
            <Text style={styles.field}>{phone}</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text style={styles.fieldTitle}>RESULT: </Text>
            <Text style={styles.field}>{result ? result : "Loading"}</Text>
          </View>
          {/* <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Text style={styles.fieldTitle}>Disease: </Text>
                        <Text style={styles.field}>Acne</Text>
                    </View> */}
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text style={styles.fieldTitle}>Cure: </Text>
            {/* 'Acne', 'Eczema', 'Healthy', 'Psoriasis' */}
            {result == "Acne" ? (
              <Text style={styles.field}>
                Medications: Isotretion Cream. Clindamycin Plus Tetrinoin. Apply
                to affected areas once or twice daily or as directed by a
                dermatologist
              </Text>
            ) : result == "Eczema" ? (
              <Text style={styles.field}>
                Medications: Hydrophil Lotion. Hydrocortisone Cream.Apply to
                affected areas once or twice daily or as directed by a
                dermatologist
              </Text>
            ) : result == "Psoriasis" ? (
              <Text style={styles.field}>
                Medications: Topical Steroids Cream. Hydrocortisone.Apply to
                affected areas once or twice daily or as directed by a
                dermatologist
              </Text>
            ) : (
              <Text>You don't need any medication</Text>
            )}
          </View>
        </View>
      </View>
      <View
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
            height: 80,
            backgroundColor: "white",
          },
        ]}
      >
        <Button title="Download" color="#05375a" onPress={() => print()} />
      </View>
    </>
  );
}

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    justifyContent: "space-around",
    paddingTop: 10,
  },
  field: {
    // width:"100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#009387",
  },
  fieldTitle: {
    fontWeight: "bold",
  },
  colView: {
    flexDirection: "row",
  },
});
