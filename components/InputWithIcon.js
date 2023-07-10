import * as React from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  image,
  keyboardType,
  onEndEditing,
  editable,
  onFocus,
  autoFocus,
}) => {
  //const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={styles.sectionStyle}>
      <FontAwesome
        name={image}
        size={22}
        color="#009387"
        style={styles.imageStyle}
      />
      <TextInput
        style={{ flex: 1 }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        underlineColorAndroid="transparent"
        onEndEditing={onEndEditing}
        secureTextEntry={secureTextEntry}
        editable={editable}
        onFocus={onFocus}
        autoFocus={autoFocus}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#009387",
    height: 40,
    borderRadius: 10,
    marginVertical: 7.5,
    marginHorizontal: 20,
  },
  imageStyle: {
    margin: 5,
    height: 25,
    width: 25,
    alignItems: "center",
  },
});
