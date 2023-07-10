import React from "react";
import {
  StyleSheet,
  BackHandler,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Modal,
  TouchableHighlight,
  Platform,
  Linking,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Toast from "react-native-tiny-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class PaymentStripe extends React.Component {
  static navigationOptions = {
    title: "Sponsor Meal",
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="restaurant" size={25} style={{ color: "blue" }} />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      card: "",
      cvc: "",
      expiry: "",
      myEmail: "",
      card_holder: "",
      postal: "",
      public_key:
        "sk_test_51HrP5WJIUZ1vuxUqfPPsgeOLRRVw0dyBpGS9i82xCkVoHmWogauMxsA1geQ9v19ub4oyRA0C5D3V2Mp0pKFyyNlD00aYmGCaX4",
      show_error: false,
      error_message: "",
      status: false,
      value: 1,
      user_id: "",
      sponsor_id: "",
      isLoading: false,
      showModal: false,
      modalVisible: false,
    };
    this.set_token();
  }

  sendrequest = () => {
    Linking.openURL(
      this.PAYMENT_API +
        "ios_payment/" +
        this.state.user_id +
        "/" +
        this.state.value
    );
  };

  show_error_message = () => {
    if (this.state.show_error) {
      if (this.state.status) {
        return (
          <Text style={{ margin: 10, color: "green", textAlign: "center" }}>
            {this.state.error_message}
          </Text>
        );
      } else {
        return (
          <Text style={{ margin: 10, color: "red", textAlign: "center" }}>
            {this.state.error_message}
          </Text>
        );
      }
    }
  };

  storedata = async (va) => {
    await AsyncStorage.setItem("total_donation", va);
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  cc_format_date = (value) => {
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];
    for (var i = 0, len = match.length; i < len; i += 2) {
      parts.push(match.substring(i, i + 2));
    }
    if (parts.length) {
      var vv = parts.join("/");
      this.setState({ expiry: vv });
      return vv;
    } else {
      var vv = value;
      this.setState({ expiry: vv });
      return vv;
    }
  };

  cc_format = (value) => {
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];
    for (var i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      var vv = parts.join(" ");

      this.setState({ card: vv });

      return vv;
    } else {
      var vv = value;

      this.setState({ card: vv });
      return vv;
    }
  };

  payment_submit = () => {
    this.setState({ isLoading: true });
    if (
      this.state.card != "" &&
      this.state.expiry != "" &&
      this.state.cvc != "" &&
      this.state.myEmail != ""
    ) {
      if (this.ValidateEmail(this.state.myEmail)) {
        this.setState({ isloading: true });
        var cardNum = this.state.card;
        cardNum = cardNum.replace(/ +/g, "");
        var cardDates = this.state.expiry;
        cardDates = cardDates.split("/");
        var month = cardDates[0];
        var year = cardDates[1];

        var stripe_url =
          "https://api.stripe.com/v1/tokens?card[number]=" +
          cardNum +
          "&card[exp_month]=" +
          month +
          "&card[exp_year]=" +
          year +
          "&card[cvc]=" +
          this.state.cvc +
          "&card[name]=" +
          this.state.myEmail;
        this.stripePayment(stripe_url);
      } else {
        this.setState({ error_message: "Invalid Email", isLoading: false });
      }
    } else {
      this.setState({
        error_message: "All Field are Required",
        isLoading: false,
      });
    }
  };

  stripePayment = async (url) => {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + this.state.public_key,
      },
    });
    let responseJson = await response.json();
    console.log("response", responseJson);
    if (responseJson.error) {
      console.log("respff=====", responseJson);
      this.setState({
        isLoading: false,
        show_error: true,
        error_message: responseJson.error.message,
      });
    } else {
      this.setState({ error_message: "" });
      this.charge_request(responseJson.id);
    }
  };

  set_token = async () => {
    var sponsor_id = await AsyncStorage.getItem("doc_id");
    await this.setState({ user_id: sponsor_id });
  };

  charge_request = (id) => {
    const formData = new FormData();
    formData.append("sponsor_id", this.state.user_id);
    formData.append("meals", this.state.value);
    formData.append("amount", this.state.value * 10);
    formData.append("tax", (this.state.value * 0.95).toFixed(2));
    formData.append("token", id);

    try {
      fetch(`${this.PAYMENT_API}donate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("api====", responseJson);
          this.setState({ isLoading: false });

          if (responseJson.error == true) {
            Toast.show(responseJson.error_msg);
          } else {
            Toast.show(responseJson.success_msg);
            this.setState({ card: "", cvc: "", expiry: "", myEmail: "" });

            this.storedata(JSON.stringify(responseJson.total_donations));

            this.setModalVisible(false);
            Toast.show("payment successful");
            this.props.navigation.navigate("bookAppointment");
          }
        })
        .catch((error) => {});
    } catch (e) {}
  };

  incressnumber = (text) => {
    if (text < 10) {
      this.setState({ error_message: "" });
      this.setState({ value: text + 1 });
    } else {
      this.setState({ error_message: "Maximum Deposit of is 10" });
    }
  };
  checknumber = (text) => {
    if (text > 1) {
      this.setState({ error_message: "" });
      this.setState({ value: text - 1 });
    } else {
      return this.setState({ error_message: "Minimum deposit of 1 " });
    }
  };
  ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  };

  PAYMENT_API = "http://mummyntummy.com/MobileStripe/stripev1.php";
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "red" }}>{this.state.error_message}</Text>
          <View style={{ flex: 1, width: "100%", marginTop: 15 }}>
            <ScrollView style={{ width: "90%", alignSelf: "center" }}>
              <TextInput
                placeholder="Card Number"
                value={this.state.card}
                maxLength={19}
                keyboardType="numeric"
                onChangeText={(text) => this.cc_format(text)}
                style={styles.edit_text_field}
              />
              <TextInput
                placeholder="CVC"
                keyboardType="numeric"
                maxLength={4}
                onChangeText={(text) => this.setState({ cvc: text })}
                style={styles.edit_text_field}
              />
              <TextInput
                placeholder="Expiry"
                value={this.state.expiry}
                maxLength={5}
                keyboardType="numeric"
                onChangeText={(text) => this.cc_format_date(text)}
                style={styles.edit_text_field}
              />
              <TextInput
                placeholder="Email"
                value={this.state.myEmail}
                keyboardType="email-address"
                onChangeText={(text) => this.setState({ myEmail: text })}
                style={styles.edit_text_field}
              />
              <Text
                style={{
                  alignSelf: "center",

                  fontSize: 16,
                  color: "red",
                }}
              >
                {this.state.error_message}
              </Text>
              {this.state.isLoading ? (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ActivityIndicator />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View style={{ width: "30%" }}>
                    <TouchableHighlight
                      style={styles.button}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Cancel
                      </Text>
                    </TouchableHighlight>
                  </View>
                  <View
                    style={{
                      width: "30%",
                    }}
                  >
                    <TouchableHighlight
                      style={styles.button}
                      onPress={() => this.payment_submit()}
                    >
                      <Text style={styles.button_text}>Ok</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
          <View style={{ flex: 0.3 }} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#009387",
    paddingVertical: 7.5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button_text: {
    fontSize: 18,
    color: "white",
    alignContent: "center",
    alignSelf: "center",
  },
  edit_text_field: {
    marginHorizontal: 20,
    borderRadius: 20,
    borderColor: "#009387",
    backgroundColor: "white",
    borderWidth: 2,
    paddingVertical: 7.5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
